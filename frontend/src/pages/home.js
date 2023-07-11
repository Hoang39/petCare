import { useContext, useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"

import petFood from '../img/petFood.jpeg'
import petProduct from '../img/petProduct.jpg'
import petService from '../img/petService.jpg'
import publicplace from '../img/publicplace.jpg'
import minidog from '../img/minidog.png'
import dogcare from '../img/dogcare.jpg'
import priceservice from '../img/priceservice.jpg'

import { getAllPets } from "../api/productApi"
import { Link, useNavigate } from "react-router-dom"
import CartContext from "../store/cartContext"

const Home = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([])
    const { cart } = useContext(CartContext)

    useEffect(() => {
        (async () => {
            const res = await getAllPets()
            setPets(res.slice(0, 8))
        })()
    },[])

    return (
        <>
            <Header cartLen={cart.length}/>

            {/* body */}
            <div className="my-8 mx-4 lg:mx-20">
                <div className="flex flex-row rounded bg-[#ededed] items-center px-4">
                    <div className="cursor-pointer text-[#333] px-3 my-2 border-r-2 hover:text-primary_color duration-300">Trang chủ</div>
                    <p className="text-[#333] px-3">Danh mục sản phẩm</p>
                </div>

                {/* product */}
                <div className="my-16 flex flex-col items-center">
                    <p className="font-primary text-primary_color text-3xl font-bold">THÚ CƯNG</p>
                    <div className="flex flex-row flex-wrap justify-between mt-8">
                        {pets.map((item) => (
                            <div
                                key={item.id}
                                className="w-[22%] space-y-2"
                            >
                                <div onClick={() => navigate(`/pet/${item.id}`)} className="cursor-pointer h-3/4 group overflow-hidden relative">
                                    <div className="invisible group-hover:visible absolute w-full h-full flex flex-col items-center justify-center bg-white/50 z-30">
                                        <div className="flex flex-row gap-x-3">
                                            <div className='cursor-pointer group/link p-3 rounded-full border-2 border-primary_color bg-white hover:bg-primary_color transition'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path className="group-hover/link:fill-white" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" fill="#de8ebe"></path> </svg>
                                            </div>

                                            <div className='cursor-pointer group/link p-3 rounded-full border-2 border-primary_color bg-white hover:bg-primary_color transition'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path className="group-hover/link:fill-white" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#de8ebe"></path> </svg>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-2 px-4 mt-6 border-2 border-dashed transition">
                                            <p className="text-white font-medium pr-1">Mua hàng</p>
                                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                                        </div>
                                    </div>

                                    <img src={item.imageUrl} alt={item.name} className="h-full group-hover:scale-110 group-hover:blur-sm duration-300"></img>
                                </div>
                                <p className="text-primary_color text-sm font-medium">ID: {item.petID}</p>
                                <p className="truncate text-[#333] font-primary font-bold text-lg hover:text-primary_color duration-300">{item.name}</p>
                                <p className="text-primary_color text-lg font-medium">{item.unitPrice}đ</p>
                            </div>
                        ))}
                    </div>
                    <Link to="/pet" className="self-end flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 mt-6 border-2 border-dashed">
                        <p className="text-white font-medium pr-2">Xem thêm</p>
                        <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                    </Link>
                </div>

                {/* service */}
                <div className="my-16 flex flex-col items-center">
                    <p className="font-primary text-primary_color text-3xl font-bold">SẢN PHẨM</p>
                    <div className="flex flex-col sm:flex-row justify-between mt-8 gap-x-16">
                        <Link to='/petFood' className="group flex flex-col items-center sm:w-[33%]">
                            <img src={petFood} alt="food" className="h-60 w-full rounded-xl object-cover group-hover:scale-105 transition"></img>
                            <p className="py-4 font-primary text-[#333] font-bold text-medium py-4 group-hover:text-primary_color">THỨC ĂN</p>
                        </Link>

                        <Link to='/petProduct' className="group flex flex-col items-center sm:w-[33%]">
                            <img src={petProduct} alt="product" className="h-60 w-full rounded-xl object-cover group-hover:scale-105 transition"></img>
                            <p className="py-4 font-primary text-[#333] font-bold text-medium py-4 group-hover:text-primary_color">PHỤ KIỆN</p>
                        </Link>

                        <Link to='/petService' className="group flex flex-col items-center sm:w-[33%]">
                            <img src={petService} alt="service" className="h-60 w-full rounded-xl object-cover group-hover:scale-105 transition"></img>
                            <p className="py-4 font-primary text-[#333] font-bold text-medium py-4 group-hover:text-primary_color">DỊCH VỤ</p>
                        </Link>
                    </div>
                </div>

                {/* public place */}
                <div className="sm:mb-40 my-40 flex flex-col lg:flex-row items-center gap-x-8">
                    <img src={publicplace} alt="pet" className="hover:scale-110 duration-300 hidden sm:block scale-[80%]"></img>
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-[#333] text-4xl sm:text-6xl font-medium font-primary text-center">Get Access To</p>
                        <p className="text-primary_color text-xl sm:text-3xl font-bold font-primary text-center">PUBLIC PLACES WITH YOUR PET!</p>
                        <p className="text-[#333] text-justify sm:mx-8 lg:mx-0">Register today and join the largest Emotional Support Animal database in the country. We will update you anytime the Federal Laws change, as well as other pertinent info related to your Emotional Support Animal.</p>
                        <div className="cursor-pointer flex flex-col items-center w-full lg:w-2/3 py-4 rounded-lg bg-primary_color hover:bg-hover_primary_color border-2 border-dashed mx-auto lg:m-0">
                            <img src={minidog} alt='dog'></img>
                            <p className="text-white font-bold text-2xl">Register for Free!</p>
                        </div>
                    </div>
                </div>

                {/* dog service */}
                <div className="sm:mb-40 my-40 flex flex-col-reverse lg:flex-row items-center gap-x-8 bg-white rounded-xl p-8 lg:p-16 border-2 border-primary_color drop-shadow-2xl">
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-[#333] text-3xl sm:text-5xl lg:text-6xl font-medium font-primary">Dog Care Service</p>
                        <p className="text-primary_color text-lg sm:text-2xl font-bold font-primary">PLEASE CALL NOW: 090 1876 345</p>
                        <p className="text-[#333] text-justify pb-4">Emotional support dogs are often identified by wearing an emotional support dog vest or tag, letting the public know that it is an emotional support dog; otherwise, their handlers will find themselves having to explain that their dog is an emotional support dog. Some businesses, such as airlines, prefer to see an identification card or vest that indicates that the dog is an emotional support dog.</p>
                        <div className="cursor-pointer w-36 sm:w-full lg:w-36 flex flex-row items-center justify-between rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed mx-auto lg:m-0">
                            <p className="text-white font-medium">READ MORE</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                        </div>
                    </div>
                    <img src={dogcare} alt="pet" className="hidden scale-[70%] sm:block"></img>
                </div>

                {/* price service */}
                <div className="sm:mb-40 my-40 sm:flex items-center gap-x-6">
                    <div className="sm:hidden flex flex-row items-center justify-between">
                        <p className="text-primary_color text-4xl font-medium font-primary my-8 mx-auto">Price Services</p>
                    </div>
                    <div className="relative hidden sm:block">
                        <img src={priceservice} alt="price"></img>
                        <div className="absolute top-4 right-10 rounded-full p-4 bg-primary_color/50 -rotate-45">
                            <div className="rounded-full px-4 py-8 bg-primary_color border-2 border-white border-dashed">
                                <p className="text-white font-primary text-2xl">PRICE</p>
                                <p className="text-white font-primary text-medium">SERVICES</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center space-y-4 px-10 py-6 bg-white border-2 border-primary_color/50 drop-shadow-lg hover:drop-shadow-2xl">
                            <p className="text-[#333] font-primary text-xl">DOG DAYCARE</p>
                            <p className="text-hover_primary_color font-primary text-lg">FULL DAY</p>
                            <p className="text-primary_color font-primary text-2xl">$29.00</p>
                            <p className="text-[#333]">$15 for full day on weekends</p>
                            <div className="cursor-pointer w-36 flex flex-row items-center justify-between rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                <p className="text-white font-medium">READ MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-4 px-10 py-6 bg-white border-2 border-primary_color/50 drop-shadow-lg hover:drop-shadow-2xl">
                            <p className="text-[#333] font-primary text-xl">DOG DAYCARE</p>
                            <p className="text-hover_primary_color font-primary text-lg">FULL DAY</p>
                            <p className="text-primary_color font-primary text-2xl">$29.00</p>
                            <p className="text-[#333]">$15 for full day on weekends</p>
                            <div className="cursor-pointer w-36 flex flex-row items-center justify-between rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                <p className="text-white font-medium">READ MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-4 px-10 py-6 bg-white border-2 border-primary_color/50 drop-shadow-lg hover:drop-shadow-2xl">
                            <p className="text-[#333] font-primary text-xl">DOG DAYCARE</p>
                            <p className="text-hover_primary_color font-primary text-lg">FULL DAY</p>
                            <p className="text-primary_color font-primary text-2xl">$29.00</p>
                            <p className="text-[#333]">$15 for full day on weekends</p>
                            <div className="cursor-pointer w-36 flex flex-row items-center justify-between rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                <p className="text-white font-medium">READ MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-4 px-10 py-6 bg-white border-2 border-primary_color/50 drop-shadow-lg hover:drop-shadow-2xl">
                            <p className="text-[#333] font-primary text-xl">DOG DAYCARE</p>
                            <p className="text-hover_primary_color font-primary text-lg">FULL DAY</p>
                            <p className="text-primary_color font-primary text-2xl">$29.00</p>
                            <p className="text-[#333]">$15 for full day on weekends</p>
                            <div className="cursor-pointer w-36 flex flex-row items-center justify-between rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                <p className="text-white font-medium">READ MORE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <Hotline />

            <Footer />
        </>
    )
}

export default Home