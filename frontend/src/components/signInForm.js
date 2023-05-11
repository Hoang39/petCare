import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { useNavigate } from 'react-router-dom'

import logo from '../img/logo.png'
import { useEffect, useState } from 'react'
import { signIn } from '../api/userApi'

const SignInForm = () => {
    const navigate=useNavigate();
    const [state,setState] = useState(true)
    const [formValue, setformValue] = useState({
        email:'',
        password:'', 
    });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        (async () => {
            const res = await signIn(formValue);

            if(res === undefined) {
                return
            }

            else if (res.msg) {
                Store.addNotification({
                    title: "Login failure",
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
                    title: "Login successful",
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
                    <div className="p-6 rounded-full bg-rose-50 space-y-4 md:space-y-6 sm:p-8">
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Đăng nhập
                            </h1>   
                            <div onClick={()=>(navigate('/'))} className='w-32 cursor-pointer'>
                                <img src={logo} alt="logo"/>
                            </div>                        
                        </div>
                            
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ email</label>
                                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                            </div>
                        
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            
                            <button 
                                onClick={() => setState(!state)}
                                type="submit" 
                                className="w-full text-white bg-primary_color  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >Đăng nhập</button>
                            <p className="text-sm font-light text-gray-500">
                                Chưa có tài khoản? <span onClick={()=>{navigate('/signUp')}} className="font-medium text-primary_color hover:underline cursor-pointer">Đăng ký ngay</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInForm