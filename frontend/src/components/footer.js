import { Link, NavLink } from "react-router-dom";

import logo from '../img/logo.png'

const Footer = () => {
    return (
        <div className="w-full bg-fuchsia-100 sm:pt-10 sm:mt-10 sm:pb-4">
            <div className="hidden sm:flex w-full gap-x-16">
                <div className="hidden lg:block lg:w-1/4">
                    <img src={logo} alt='logo' className="cursor-pointer transition hover:-translate-y-1 hover:scale-110"></img>   
                </div>

                <div className="flex flex-row justify-between mx-12 w-screen lg:w-3/4">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-medium text-[#333] pb-2">QUICK LINKS</h1>
                        <Link to='/' className="text-sm text-[#333] hover:text-primary_color duration-300">Trang chủ</Link>
                        <Link to='/pet' className="text-sm text-[#333] hover:text-primary_color duration-300">Thú cưng</Link>
                        <Link to='/petFood' className="text-sm text-[#333] hover:text-primary_color duration-300">Thức ăn</Link>
                        <Link to='/petProduct' className="text-sm text-[#333] hover:text-primary_color duration-300">Phụ kiện</Link>
                        <Link to='/petService' className="text-sm text-[#333] hover:text-primary_color duration-300">Dịch vụ</Link>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-medium text-[#333] pb-2">COMPANY</h1>
                        <Link to='/' className="text-sm text-[#333] hover:text-primary_color duration-300">Privacy</Link>
                        <Link to='/' className="text-sm text-[#333] hover:text-primary_color duration-300">Terms of Service</Link>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-medium text-[#333] pb-2">FOLLOW US</h1>
                        <Link to='/' className="text-sm text-[#333] hover:text-primary_color duration-300">PetCare</Link>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-lg font-medium text-[#333] pb-2">SOCIAL MEDIA</h1>
                        <div className="flex flex-row gap-x-4">
                            <Link to="https://www.facebook.com/" className="cursor-pointer p-1 shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </Link>

                            <Link to="https://twitter.com/" className="cursor-pointer p-1 shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                </svg>
                            </Link>

                            <Link to="https://www.instagram.com/" className="cursor-pointer p-1 shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-col items-center mt-8">
                <p className="text-sm text-[#333]">© 2023 Company Co. All rights reserved.</p>
            </div>

            <div className="sm:hidden bg-fuchsia-100 flex flex-row justify-around w-screen fixed bottom-0 left-0">
                <NavLink
                    to={'/'}
                    className={({isActive}) => 
                        isActive
                        ? 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 bg-primary_color text-white'
                        : 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 text-[#333] hover:text-primary_color duration-300'
                    }
                >
                    <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="mx-auto">
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                    </svg>
                    <div className="flex items-center justify-center">
                        <p>Trang chủ</p>
                    </div>
                </NavLink>
                <NavLink
                    to={'/order'}
                    className={({isActive}) => 
                        isActive
                        ? 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 bg-primary_color text-white'
                        : 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 text-[#333] hover:text-primary_color duration-300'
                    }
                >
                    <svg fill="currentColor" viewBox="0 0 16 16" height="2em" width="2em" className="mx-auto">
                        <path d="M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    <div className="flex items-center justify-center">
                        <p>Giỏ hàng</p>
                    </div>
                </NavLink>
                <NavLink
                    to={'/profile'}
                    className={({isActive}) => 
                        isActive
                        ? 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 bg-primary_color text-white'
                        : 'font-semibold text-sm tracking-tighter py-1 w-1/3 space-y-1 text-[#333] hover:text-primary_color duration-300'
                    }
                >
                    <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em" className="mx-auto">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div className="flex items-center justify-center">
                        <p>Cá nhân</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer