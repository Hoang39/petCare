import { useContext, useEffect, useState } from "react"
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"
import { changePassword } from "../api/userApi"
import CartContext from "../store/cartContext"


const ChangePassword = () => {
    const [pass, setPass] = useState('')
    const [state, setState] = useState(true)
    const { cart } = useContext(CartContext)

    const handleChange = (event) => {
        setPass(event.target.value)
    }

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('user')
            const res = await changePassword(token, pass)

            if (res)
                Store.addNotification({
                    title: "Thay đổi mật khẩu",
                    message: "Thành công",
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

        })()
    }, [state])

    return (
        <>
            <ReactNotifications/>

            <Header cartLen={cart.length}/>

            <div className="my-8 mx-20 flex flex-col items-center">
                <p className="font-primary text-primary_color text-2xl font-bold">ĐỔI MẬT KHẨU</p>
                <form class="my-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Nhập mật khẩu mới
                        </label>
                        <input onChange={handleChange} class="shadow appearance-none border rounded w-full my-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" placeholder="••••••••"/>
                    </div>

                    <div class="flex items-center justify-between cursor-pointer">
                        <div onClick={() => setState(!state)} className="w-full flex flex-col items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-2 px-4 border-2 border-dashed transition focus:outline-none focus:shadow-outline">
                            <p className="text-white font-medium pr-1">Xác nhận</p>
                        </div>
                    </div>
                </form>
            </div>

            <Hotline />
            <Footer />
        </>
    )
}

export default ChangePassword