import { NavLink, useNavigate } from "react-router-dom"

const TabNav = [
    {
        name: 'Trang chủ',
        path: '..'
    },
    {
        name: 'Thú cưng',
        path: '/admin/pet'
    },
    {
        name: 'Thức ăn',
        path: '/admin/food'
    },
    {
        name: 'Dịch vụ',
        path: '/admin/service'
    },
    {
        name: 'Phụ kiện',
        path: '/admin/product'
    },
    {
        name: 'Đơn hàng',
        path: '/admin/order'
    },
    {
        name: 'Tài khoản',
        path: '/admin/account'
    }
]

const AdminTab = () => {
    const navigate = useNavigate()

    return (
        <div className="w-[15%] border-r-2 h-screen bg-white drop-shadow-lg">
            <p onClick={() => navigate('/admin')} className="cursor-pointer text-primary_color font-primary font-bold text-xl py-4 text-center border-b-2">Dashboard</p>
            <div className="flex flex-col gap-y-4 my-4">
            {
                TabNav.map((item) => (
                    <div key={item.name} className="w-full">
                        <NavLink 
                            to={item.path}
                            className={({isActive}) => 
                                isActive
                                ? 'mx-2 px-8 py-2 font-semibold tracking-tighter rounded-md bg-primary_color text-white block'
                                : 'mx-2 px-8 py-2 font-semibold tracking-tighter rounded-md hover:text-primary_color hover:translate-x-2 duration-300 text-[#333] block'
                            }
                        >
                            {item.name}
                        </NavLink>
                    </div>
                ))
            }      
                <NavLink 
                    onClick={() => localStorage.removeItem('user')} 
                    to='/'
                    className='w-full cursor-pointer'
                >
                    <p className="mx-2 px-8 py-2 font-semibold tracking-tighter rounded-md hover:text-primary_color hover:translate-x-2 duration-300 text-[#333]">
                        Đăng xuất
                    </p>
                </NavLink>

            </div>
        </div>
    )
}

export default AdminTab