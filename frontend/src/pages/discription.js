import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"
import { Link, useParams } from 'react-router-dom';

import { getAllPets, getAllPetFoods, getAllProducts, getAllServices } from "../api/productApi"
import CartContext from "../store/cartContext";

const Discription = ( props ) => {
    const params = useParams();
    const href = props.href
    const [load, setLoad] = useState(true)
    const { cart, handleAdd } = useContext(CartContext)
    const [product, setProduct] = useState([])
    const [allproduct, setAllProduct] = useState([])
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        (async () => {
            const res = href === 'pet'? await getAllPets() : href === 'petFood'? await getAllPetFoods() : href === 'petService'? await getAllServices() : await getAllProducts()
            setAllProduct(res)
            setProduct(res.filter((item) => item.id == params.id)[0])
        })()
    }, [])

    const handleQuantity = (event) => setQuantity(event.target.value)

    return (
        <>
            <Header cartLen={cart.length}/>

            <div className="my-8 mx-20">
                <div className="flex flex-row rounded bg-[#ededed] items-center px-4">
                    <div className="cursor-pointer text-[#333] px-3 my-2 border-r-2 hover:text-primary_color duration-300">Trang chủ</div>
                    <p className="text-[#333] px-3">Sản phẩm</p>
                </div>

                <div className="mt-20 flex flex-row gap-x-8">
                    <div className="border-2 rounded w-1/5 bg-primary_color/20">
                    </div>
                    
                    <div className='w-3/4'>
                        <div className='flex flex-row'>
                            <div className='w-80 mr-8 overflow-hidden'>
                                <img src={product.imageUrl} alt={product.name} className="h-full hover:scale-110 duration-300"></img>
                            </div>
                            <div className="space-y-8">
                                <div className='my-2 space-y-2'>
                                    <p className="truncate text-[#333] font-primary font-bold text-xl hover:text-primary_color duration-300">{product.name}</p>
                                    <p className="text-primary_color text-lg font-medium">{product.unitPrice}đ</p>
                                    <div className="flex flex-row gap-x-8 items-center">
                                        <label className="text-[#333] font-medium" htmlFor="quantity">Số lượng:</label>
                                        <input onChange={handleQuantity} className="border-2 rounded-l py-1 px-3" type="number" id="quantity" name="quantity" min="1" max="100" placeholder="0"/>
                                        
                                        <div onClick={() => {handleAdd(product, parseInt(params.id), href, quantity); setLoad(!load)}} className="cursor-pointer self-end flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                            <p className="text-white font-medium pr-2">Mua hàng</p>
                                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                                        </div>
                                    
                                    </div>                            
                                </div>
                                <div className='my-2 space-y-2 border-t-2 pt-8'>
                                    <div className="flex flex-row items-center gap-x-3">
                                        <p className="text-[#333]">Mã đơn hàng:</p>
                                        <p className="text-[#333] text-sm py-1 px-2 border-2">{product.id}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-8">
                                        <p className="text-[#333]">Tình trạng:</p>
                                        <p className="text-[#333] text-sm py-1 px-2 border-2">Còn hàng</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-8">
                                        <p className="text-[#333]">Danh mục:</p>
                                        <p className="text-[#333] text-sm py-1 px-2 border-2">{product.breed || product.category || product.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='my-20 py-20 flex flex-col items-center border-t-2'>
                            <p className="font-primary text-primary_color text-2xl font-bold mb-8">Sản phẩm tương tự</p>
                            <div className="flex flex-row justify-between gap-x-4">
                                {allproduct.slice(0, 3).map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-[30%]"
                                    >
                                        <Link to={`/${href}/${item.id}`} className="block h-3/4 group overflow-hidden relative">
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
                                        </Link>
                                        <div className={'my-2 space-y-2'}>
                                            <p className="text-primary_color text-sm font-medium">ID: {item.id}</p>
                                            <p className="truncate text-[#333] font-primary font-bold text-lg hover:text-primary_color duration-300">{item.name}</p>
                                            <p className="text-primary_color text-lg font-medium">{item.unitPrice}đ</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <Link to={`/${href}`} className="self-end flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-1 px-3 border-2 border-dashed">
                                <p className="text-white font-medium pr-2">Xem thêm</p>
                                <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Hotline />
            <Footer />
        </>
    )
}

export default Discription