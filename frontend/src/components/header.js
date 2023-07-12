import { memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import 'swiper/css';
import 'swiper/css/pagination';

import { userAvatar, userInfo } from '../api/userApi';

import logo from '../img/logo.png'
import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import useScrollDirection from '../hooks/useScrollDirection';

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

const userList = [
    {
        name: 'Tài khoản',
        path: '/profile'
    },
    {
        name: 'Đổi mật khẩu',
        path: '/changePassword'
    },
    {
        name: 'Đơn hàng',
        path: '/order'
    },
    {
        name: 'Phản hồi',
        path: '/feedback'
    }
]

const loginList = [
    {
        name: 'Đăng nhập',
        path: '/signIn'
    },
    {
        name: 'Đăng ký',
        path: '/signUp'
    }
]

const appNavBarList = NavBarList.concat([{ name: 'Giỏ hàng', path: '/cart' }])
const adminList = userList.concat([{ name: 'Admin', path: '/admin' }])


const Header = ({ cartLen }) => {
    SwiperCore.use([Autoplay])
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [info, setInfo] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [keySearch, setkeySearch] = useState('')
    const scrollDirection = useScrollDirection();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const openUser = Boolean(anchorElUser);
    const openNav = Boolean(anchorElNav);

    const handleClickUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleClickNav = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    const handleCloseNav = () => {
        setAnchorElNav(null);
    };

    const handleChange = (event) => {
        setkeySearch(event.target.value)
    }

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        handleCloseUser();
        setToken(null); 
        navigate('/');
        Store.addNotification({
            title: "Log out successful",
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
    }

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
    },[token])

    return (
        <>
            <ReactNotifications/>
            {/* mobile */}
            <div className={`sm:hidden border-b-2 border-primary_color pb-6 sticky ${ scrollDirection === "down" ? "-top-64" : "top-0"} left-0 w-screen z-50 bg-white transition-all duration-500`}>
                {/* swipper */}
                <div className='w-full'>
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

                <div className='flex flex-row items-center justify-between mx-4 h-36'>
                    <Button
                        id="basic-button"
                        aria-controls={openUser ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUser ? 'true' : undefined}
                        onClick={handleClickUser}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElUser}
                        open={openUser}
                        onClose={handleCloseUser}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                    {
                        token
                        ?
                        info && info.isAdmin
                        ?
                        adminList.map(item => (
                            <MenuItem onClick={handleCloseUser} key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) => 
                                        isActive
                                        ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                        : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </MenuItem>
                        ))
                        :
                        userList.map(item => (
                            <MenuItem onClick={handleCloseUser} key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) => 
                                        isActive
                                        ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                        : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </MenuItem>
                        ))
                        :
                        loginList.map(item => (
                            <MenuItem onClick={handleCloseUser} key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) => 
                                        isActive
                                        ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                        : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </MenuItem>
                        ))
                    }
                    {
                        token
                        &&
                        <div
                            className='font-bold text-sm tracking-tighter mx-4 py-1 bg-primary_color rounded-lg text-white my-2'
                            onClick={handleLogout}
                        >
                            <p className='text-center'>Đăng xuất</p>
                        </div>
                    }
                    </Menu>

                    <div onClick={() => navigate('/')}>
                        <img src={logo} alt='logo' className='w-52 h-40'></img>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={openNav ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openNav ? 'true' : undefined}
                        onClick={handleClickNav}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElNav}
                        open={openNav}
                        onClose={handleCloseNav}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                    {
                        appNavBarList.map(item => (
                            <MenuItem onClick={handleCloseNav} key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) => 
                                        isActive
                                        ? 'font-semibold text-sm tracking-tighter px-6 py-2 rounded bg-primary_color text-white'
                                        : 'font-semibold text-sm tracking-tighter px-6 py-2 rounded bg-white'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </MenuItem>
                        ))
                    }
                    </Menu>
                </div>

                <div className='flex flex-row-reverse items-center mx-8'>
                    <div onClick={() => navigate(`search/${keySearch}`)} className='cursor-pointer bg-[#333] py-3 px-3 border-2 border-[#333] rounded'>
                        <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg>
                    </div>
                    <input onChange={handleChange} type="text" name='search' placeholder='Tìm kiếm...' className='border-t-2 border-b-2 border-l-2 rounded-l py-2 px-3 w-full'/>
                </div>
            </div>

            {/* tablet, PC */}
            <div className="hidden sm:flex flex-row border-b-2 border-primary_color pb-6">
                <div className="w-1/3 flex flex-col items-center mt-6">
                    {token
                        ?
                        <Popover className='relative'>
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
                                {
                                    userList.map(item => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({isActive}) => 
                                                isActive
                                                ? 'font-semibold text-sm tracking-tighter px-3 py-2 bg-primary_color text-white'
                                                : 'font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-t-2 border-l-2 border-r-2 rounded-t-lg'
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))
                                }
                                    <div
                                        className='cursor-pointer font-semibold text-sm tracking-tighter px-3 py-2 bg-white hover:text-primary_color duration-300 border-2 rounded-b-lg'
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                            
                        :
                        <div className='flex flex-row items-center justify-between gap-x-2'>
                        {
                            loginList.map((item, index) => (
                                <Link 
                                    key={index}
                                    to={item.path}
                                    className={`font-semibold text-sm tracking-tighter px-3 py-2 rounded-md hover:text-primary_color duration-300 border-2 ${index? 'bg-primary_color/30' : 'bg-white'}`}
                                >
                                    {item.name.toUpperCase()}
                                </Link>
                            ))
                        }
                        </div>
                    }
                    <img src={logo} alt='logo'></img>
                    
                    {
                        info && info.isAdmin 
                        &&
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
                    }

                </div>
                <div className="w-2/3 mt-2 lg:mt-0">
                    {/* tab */}
                    <div className='flex flex-row my-4 items-center space-x-8'>
                        <div className='grid grid-cols-3 gap-4 w-2/3 lg:flex lg:flex-row lg:justify-between lg:w-3/4'>
                        {
                            NavBarList.map((item) => (
                                <div key={item.name}>
                                    <NavLink 
                                        to={item.path}
                                        className={({isActive}) => 
                                            isActive
                                            ? 'font-semibold text-sm tracking-tighter px-1 xl:px-4 py-2 rounded-md bg-primary_color text-white'
                                            : 'font-semibold text-sm tracking-tighter px-1 xl:px-4 py-2 rounded-md text-[#333] hover:text-primary_color duration-300'
                                        }
                                    >
                                        {item.name.toUpperCase()}
                                    </NavLink>
                                </div>
                            ))
                        }
                        </div>
                        <div> 
                            <NavLink 
                                to={token? '/cart': '/signIn'}
                                className='flex flex-row rounded-xl items-center gap-x-2 bg-primary_color py-1 px-2 border-2 border-dashed'
                            >
                                <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
                                <div>
                                    <p className='font-bold text-white leading-tight'>Giỏ hàng</p>
                                    <p className='text-white leading-tight'>{cartLen} sản phẩm</p>
                                </div>

                            </NavLink>
                        </div>
                    </div>

                    {/* swipper */}
                    <div className='mb-6 mr-12 lg:mt-12 lg:mr-44'>
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
                    <div className='flex flex-row-reverse items-center mr-12 lg:mr-44'>
                        <div onClick={() => navigate(`search/${keySearch}`)} className='cursor-pointer bg-[#333] py-3 px-3 border-2 border-[#333] rounded'>
                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg>
                        </div>
                        <input onChange={handleChange} type="text" name='search' placeholder='Tìm kiếm...' className='border-t-2 border-b-2 border-l-2 rounded-l py-2 px-3 w-full lg:w-1/2'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header)