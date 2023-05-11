import { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

import { userAvatar, userInfo } from '../api/userApi';

import logo from '../img/logo.png'
import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import { CartContext } from '../App';

const NavBarList = [
    {
        name: 'Trang chủ',
        path: '/'
    },
    {
        name: 'Thú cưng',
        path: '/pet'
    },
    {
        name: 'Thức ăn',
        path: '/petFood'
    },
    {
        name: 'Phụ kiện',
        path: '/petProduct'
    },
    {
        name: 'Dịch vụ',
        path: '/petService'
    },
    {
        name: 'Liên hệ',
        path: '/contact'
    }
]

const Header = () => {
    SwiperCore.use([Autoplay])
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [info, setInfo] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [keySearch, setkeySearch] = useState('')
    const reloadCount = useRef(0);
    const {cart} = useContext(CartContext)

    const handleChange = (event) => {
        setkeySearch(event.target.value)
    }

    useEffect(() => {
        reloadCount.current++;
    }, []);

    useEffect(() => {
        (async () => {
            setToken(localStorage.getItem('user'))
            const res = await userInfo(token)
            const ava = await userAvatar(token)
            if (res && ava) {
                setInfo(res)
                setAvatar(ava.avatar)
            }
        })()
    },[reloadCount.current])

    return (
        <div className="flex flex-row border-b-2 border-primary_color pb-6">
            <div className="w-1/3 flex flex-col items-center mt-6">
                {token
                    ?
                    <Popover className='relative'>
                        {({ open }) => (
                            <>
                                <Popover.Button className='group bg-white inline-flex items-center px-2 py-1 rounded border-2 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                    <img className='w-5 h-5' src={avatar} alt='avatar'></img>
                                    <p className='font-semibold text-medium tracking-tighter pl-2'>{info && info.fullName}</p>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="drop-shadow-xl absolute flex flex-col w-[150%] left-0 w-full z-10 mt-1 transform px-4 sm:px-0 lg:max-w-3xl">
                                        <NavLink
                                            to='/profile'
                                            className={({isActive}) => 
                                                isActive
                                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                                : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-t-2 border-l-2 border-r-2 rounded-t-lg'
                                            }
                                        >
                                            Tài khoản
                                        </NavLink>
                                        <NavLink
                                            to='/changePassword'
                                            className={({isActive}) => 
                                                isActive
                                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                                : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-t-2 border-l-2 border-r-2'
                                            }
                                        >
                                            Đổi mật khẩu
                                        </NavLink>
                                        <NavLink
                                            to='/order'
                                            className={({isActive}) => 
                                                isActive
                                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                                : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-t-2 border-l-2 border-r-2'
                                            }
                                        >
                                            Đơn hàng
                                        </NavLink>
                                        <NavLink
                                            to='/feedback'
                                            className={({isActive}) => 
                                                isActive
                                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                                : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-t-2 border-l-2 border-r-2'
                                            }
                                        >
                                            Phản hồi
                                        </NavLink>
                                        <div
                                            className='cursor-pointer font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-2 rounded-b-lg'
                                            onClick={() => {localStorage.removeItem('user'); window.location.reload(true); navigate('/')}}
                                        >
                                            Đăng xuất
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                        
                    :
                    <div className='flex flex-row items-center justify-between gap-x-2'>
                        <NavLink 
                            to='/signIn'
                            className={({isActive}) => 
                                isActive
                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md bg-primary_color text-white'
                                : 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md hover:text-primary_color duration-300 border-2 bg-primary_color/30'
                            }
                        >
                            ĐĂNG NHẬP
                        </NavLink>
                        <NavLink 
                            to='/signUp'
                            className={({isActive}) => 
                                isActive
                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md bg-primary_color text-white'
                                : 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md hover:text-primary_color duration-300 border-2'
                            }
                        >
                            ĐĂNG KÝ
                        </NavLink>
                    </div>
                }
                <img src={logo} alt='logo'></img>
                
                {info && info.isAdmin 
                    ?
                    <NavLink 
                        to='/admin'
                        className={({isActive}) => 
                            isActive
                            ? 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md bg-primary_color text-white'
                                : 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md hover:text-primary_color duration-300 border-2 bg-primary_color/30'
                        }
                    >
                        GO TO ADMIN PAGE
                    </NavLink>
                    :
                    null
                }

            </div>
            <div className="w-2/3">
                {/* tab */}
                <div className='flex flex-row my-4 items-center gap-x-3'>
                    {NavBarList.map((item) => (
                        <div key={item.name}>
                            <NavLink 
                                to={item.path}
                                className={({isActive}) => 
                                    isActive
                                    ? 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md bg-primary_color text-white'
                                    : 'font-semibold text-sm tracking-tighter px-3 py-2 rounded-md text-[#333] hover:text-primary_color duration-300'
                                }
                            >
                                {item.name.toUpperCase()}
                            </NavLink>
                        </div>
                    ))}
                    <div> 
                        <NavLink 
                            to={token? '/cart': '/signIn'}
                            className='flex flex-row rounded-xl items-center gap-x-2 bg-primary_color py-1 px-2 border-2 border-dashed'
                        >
                            <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
                            <div>
                                <p className='font-bold text-white leading-tight'>Giỏ hàng</p>
                                <p className='text-white leading-tight'>{cart.length} sản phẩm</p>
                            </div>

                        </NavLink>
                    </div>
                </div>

                {/* swipper */}
                <div className='mt-12 mb-6 mr-44'>
                    <Swiper
                        pagination={{ dynamicBullets: true }}
                        modules={[Pagination]}
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide><img src={slider1} alt='slider1'></img></SwiperSlide>
                        <SwiperSlide><img src={slider2} alt='slider2'></img></SwiperSlide>
                        <SwiperSlide><img src={slider3} alt='slider3'></img></SwiperSlide>
                    </Swiper>
                </div>

                {/* search */}
                <div className='flex flex-row-reverse items-center mr-44'>
                    <div onClick={() => navigate(`search/${keySearch}`)} className='cursor-pointer bg-[#333] py-3 px-3 border-2 border-[#333] rounded'>
                        <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg>
                    </div>
                    <input onChange={handleChange} type="text" name='search' placeholder='Tìm kiếm...' className='border-t-2 border-b-2 border-l-2 rounded-l py-2 px-3 w-1/2'/>
                </div>
            </div>
        </div>
    )
}

export default Header