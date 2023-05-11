import { useContext, useState } from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"
import { useNavigate } from "react-router-dom"

import { createOrder } from "../api/userApi"

import wishlist from '../img/wishlist.png'
import { CartContext } from "../App"

const Cart = () => {
    const navigate = useNavigate()
    const [payment, setPayment] = useState('')
    const [load, setLoad] = useState(true)

    const { cart, dltItem } = useContext(CartContext)

    const handleCart = async () => {
        const newCart = cart.map((item) => ({
            id: item.id,
            type: item.type,
            quantity: item.quantitySell
        }))
        const token = localStorage.getItem('user')
        const res = await createOrder(token, newCart, payment)
        
        if (res) {
            console.log(res)
        }
    }

    return (
        <>
            <Header />
            {
                cart && cart.length
                ?
                <div className="my-8 mx-20 flex flex-col items-center">
                    <p className="font-primary text-primary_color text-2xl font-bold">GIỎ HÀNG</p>
                    <div className="overflow-y-auto h-160 flex flex-col gap-4 gap-y-6 mt-8">
                        {
                            cart && cart.map((item)=>(
                                <div key={item.orderID} className="flex flex-row justify-between border-b-2 border-gray-100 pt-8">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <svg onClick={() => { dltItem(item); setLoad(!load) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <img className="w-32 h-32 rounded-lg" src={item.imageUrl} alt="list"/>
                                        <div className="flex flex-col gap-y-2 min-w-[320px]">
                                            <p className="text-lg">{item.name}</p>
                                            <p className="text-lg">{item.quantitySell * item.unitPrice} VND</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <button 
                                            onClick={() => { 
                                                item.quantitySell -= 1
                                                if(item.quantitySell<1) item.quantitySell = 1
                                                setLoad(!load)
                                            }
                                        }>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <div className="m-auto rounded-2xl px-2" >{item.quantitySell}</div>
                                        <button 
                                            onClick={() => { 
                                                item.quantitySell = parseInt(item.quantitySell) + 1;
                                                setLoad(!load)
                                            }
                                        }>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row gap-4 py-4">
                        <p className="font-bold text-lg">Phương thức thanh toán:</p>
                        <input onChange={() => setPayment('Momo')} type="radio" id="Momo" name="fav_language" value="Momo"/>
                        <label className="text-lg font-bold" htmlFor="Momo">Momo</label><br></br>

                        <input onChange={() => setPayment('Direct')} type="radio" id="direct" name="fav_language" value="direct"/>
                        <label className="text-lg font-bold" htmlFor="direct">Trực tiếp</label><br></br>
                    </div>

                    <button onClick={handleCart} className="text-white font-semibold bg-primary_color w-1/2 rounded-xl py-2 px-4" >
                        Đặt hàng ngay
                    </button>
                </div>
                :
                <div className="flex flex-col text-center justify-center items-center gap-y-8 pt-20">
                        <p className="font-primary text-primary_color text-3xl text-bold">Giỏ hàng của bạn</p>
                        <p>Hiện bạn đang chưa có món hàng nào</p>
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

export default Cart;