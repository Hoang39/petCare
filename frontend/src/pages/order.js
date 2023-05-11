import { useEffect, useState } from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"
import { userOrder } from "../api/userApi"
import { useNavigate } from "react-router-dom"

import wishlist from '../img/wishlist.png'

const Order = () => {
    const navigate = useNavigate()
    const [order, setOrder] = useState([])

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('user')
            const res = await userOrder(token)
            setOrder(res)
        })()
    }, [])

    return (
        <>
            <Header />
            {
                order && order.length
                ?
                <div className="my-8 mx-20 flex flex-col items-center">
                    <p className="font-primary text-primary_color text-2xl font-bold">ĐƠN HÀNG</p>
                    <div className="overflow-y-auto h-160 flex flex-col gap-4 gap-y-6 mt-8">
                        {
                            order && order.map((item)=>(
                                <div key={item.orderID} className="lg:w-[500px] w-[450px] flex flex-row justify-between border-b-2 border-gray-100 pt-8">
                                    <div className="flex flex-col flex-wrap gap-4">
                                        <p><b>Mã đơn hàng:</b> {item.orderID}</p>
                                        <p><b>Phương thức thanh toán:</b> {item.paymentMethod}</p>
                                    </div>

                                    <div className="flex flex-col flex-wrap gap-4">
                                        <p><b>Số tiền:</b> {item.totalPrice} VND</p>
                                        <p><b>Tình trạng:</b> {(item.isProcessed === 0)?"Đang xử lý":"Đã hoàn thành"}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                :
                <div className="flex flex-col text-center justify-center items-center gap-y-8 pt-20">
                        <p className="font-primary text-primary_color text-3xl text-bold">Đơn hàng của bạn</p>
                        <p>Hiện bạn đang chưa có đơn hàng nào</p>
                        <img className="ml-8 max-w-[200px]" src={wishlist} alt="list"/>
                        <p>Xem qua các mặt hàng và mua ngay nào!</p>
                        <button className="text-white font-semibold bg-primary_color w-fit rounded-xl p-2 px-6" onClick={()=>{navigate('/pet')}}>Mua hàng ngay</button>
                </div>
            }

            <Hotline />
            <Footer />
        </>
    )
}

export default Order;