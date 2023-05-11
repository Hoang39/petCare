import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { useNavigate } from 'react-router-dom'

import logo from '../img/logo.png'
import { useEffect, useState } from 'react'
import { signUp } from '../api/userApi'

const SignUpForm = () => {
    const navigate=useNavigate();
    const [state,setState] = useState(true)
    const [formValue, setformValue] = useState({
        email:'',
        password:'',
        fullName:'',
        phoneNumber:'',
        sex:'M',
    });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        (async () => {
            const res = await signUp(formValue);

            if(res === undefined) {
                return
            }

            else if (res.msg) {
                Store.addNotification({
                    title: "Signup failure",
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
            }

            else {
                Store.addNotification({
                    title: "SignUp successful",
                    message: "Welcome to Home page",
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
                localStorage.setItem("user",res.token);
                navigate('/')
            }
        })()
    }, [state])

    return (
        <>
            <ReactNotifications/>
            <section className="flex flex-col items-center justify-center px-6 h-screen lg:py-0 ">
                <div className="z-[100] w-full bg-rose-50 rounded-lg shadow shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 rounded-full bg-rose-50 space-y-4 md:space-y-0 sm:p-8">
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Tạo tài khoản
                            </h1>   
                            <div onClick={()=>(navigate('/'))} className='w-32 cursor-pointer'>
                                <img src={logo} alt="logo"/>
                            </div>                        
                        </div>
                            
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">Họ và tên</label>
                                <input onChange={handleChange} type="fullName" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Tên của bạn là?" required=""/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ email</label>
                                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Số điện thoại</label>
                                <input onChange={handleChange} type="phoneNumber" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="số điện thoại" required=""/>
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">Tối chấp nhận <a className="font-medium text-primary-600 hover:underline" href="/#">các chính sách và điều khoản</a></label>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => setState(!state)}
                                type="submit" 
                                className="w-full text-white bg-primary_color  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >Đăng Ký</button>
                            <p className="text-sm font-light text-gray-500">
                                Đã có tài khoản? <span onClick={()=>{navigate('/signIn')}} className="font-medium text-primary_color hover:underline cursor-pointer">Đăng nhập ngay</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpForm