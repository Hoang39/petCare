import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"

import ggmap from '../img/map.jpg'
import dogcare from '../img/dogcare.jpg'
import { useContext } from "react"
import CartContext from "../store/cartContext"

const Contact = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <Header cartLen={cart.length}/>
            <div className="my-8 mx-20">
                <div className="flex flex-row rounded bg-[#ededed] items-center px-4">
                    <div className="cursor-pointer text-[#333] px-3 my-2 border-r-2 hover:text-primary_color duration-300">Trang chủ</div>
                    <p className="text-[#333] px-3">Liên hệ</p>
                </div>

                {/* map */}
                <div className="my-20 p-2 border-2">
                    <img src={ggmap} alt="map"></img>
                </div>

                {/* address */}
                <div className="my-20 p-10 border-2 border-primary_color border-l-8 rounded-xl">
                    <div className="space-y-8">
                        <div className="flex flex-row gap-x-16">
                            <div className="p-2 rounded-full border-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#de8ebe" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>  
                            </div>
                            <div>
                                <p className="text-primary_color font-medium text-lg">ĐỊA CHỈ 1:</p>
                                <p className="text-[#333]">Số 168 Thượng Đình – Thanh Xuân – Hà Nội</p>
                            </div>

                            <div>
                                <p className="text-primary_color font-medium text-lg">ĐỊA CHỈ 2:</p>
                                <p className="text-[#333]">294 -296 Đồng Đen – Quận Tân Bình – Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-16">
                            <div className="p-2 rounded-full border-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#de8ebe" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-primary_color font-medium text-lg">ĐIỆN THOẠI</p>
                                <p className="text-[#333]">0939.86.36.96</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="my-16 flex flex-col items-center">
                    <p className="font-primary text-primary_color text-3xl font-bold">LIÊN HỆ</p>
 
                    <div className="my-8 flex flex-row items-center gap-x-8">
                        <div className="space-y-6">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" cols="50" id="message" type="email" placeholder="Message"></textarea>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <div className="cursor-pointer flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-2 px-4 border-2 border-dashed transition focus:outline-none focus:shadow-outline">
                                    <p className="text-white font-medium pr-1">POST COMMENT</p>
                                </div>
                            </div>
                        </form>
                            
                        </div>
                        <img src={dogcare} alt="pet"></img>
                    </div>
                </div>

            </div>

            <Hotline />
            <Footer />
        </>
    )
}

export default Contact