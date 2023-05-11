import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import AdminTab from "../components/adminTab"
import { getAllOrder } from '../api/adminApi'
import { useEffect, useState } from "react"
import { updateOrderStatus } from "../api/adminApi"

const AdminOrder = () => {
    const [orders, setorders] = useState([])
    const [state, setState] = useState(true)

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('user')
            const res = await getAllOrder(token)
            if (res) setorders(res)
        })()
    },[state])

    const handleConfirm = async (id) => {
        const token = localStorage.getItem('user')
        const res = await updateOrderStatus(token, id)
        if (res && res.msg !== 'success') 
            Store.addNotification({
                title: "Confirm failure",
                message: res.msg,
                type: 'danger',
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }
            });
        else if(res) {
            setState(!state)
            Store.addNotification({
                title: "Confirm success",
                message: res.msg,
                type: 'success',
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }
            });
        }
    }

    return (
        <>
            <ReactNotifications/>
            <div className="flex flex-row">
                <AdminTab />

                <div className="bg-primary_color/10 h-screen w-[85%] px-20 py-8">
                    <div className="bg-white drop-shadow-lg rounded p-8">
                        <p className="font-bold font-primary text-primary_color text-xl py-4 border-b-2 px-4">Các đơn hàng</p>
                        <div className="grid grid-cols-5 text-sm border-b-2 py-2">
                            <p className="px-4 font-semibold py-3">OrderID</p>
                            <p className="px-4 font-semibold text-primary_color py-3">UserID</p>
                            <p className="px-4 font-semibold text-gray-800 py-3">Price</p>
                            <p className="px-4 font-semibold text-primary_color py-3">Payment method</p>
                            <p className="px-4 font-semibold text-gray-800 py-3">Confirm</p>
                        </div>
                    {
                        orders.map((order)=>(
                            <div key={order.orderID} className="grid grid-cols-5 text-sm border-b-2 py-2 hover:translate-x-2 transition group">
                                <p className="px-4 font-semibold py-3">{order.orderID}</p>
                                <p className="px-4 text-primary_color py-3">{order.userID}</p>
                                <p className="px-4 text-gray-800 py-3">{order.totalPrice} VND</p>
                                <p className="px-4 text-primary_color py-3">{order.paymentMethod}</p>
                                <p className="px-4 text-gray-800 py-3">{order.isPaid? 'Yes':'No'}</p>
                                <div onClick={() => handleConfirm(order.orderID)} className="invisible cursor-pointer absolute right-0 rounded border-2 self-center group-hover:visible transition group/link">
                                    <p className="px-2 py-1 group-hover/link:text-primary_color transition">Update</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminOrder