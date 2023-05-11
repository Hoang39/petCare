import { NavLink } from "react-router-dom"
import AdminTab from "../components/adminTab"

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

const Admin = () => {
    return (
        <div className="flex flex-row">
            <AdminTab />

            <div className="bg-primary_color/10 h-screen w-[85%] p-20">
                <p className="text-primary_color text-3xl font-primary">All categories</p>
                <div className="grid grid-cols-3 gap-12 mt-10 mx-10">
                {
                    TabNav.slice(1).map((item) => (
                        <div key={item.name} className="rounded-xl bg-white drop-shadow-lg hover:-translate-y-2 transition">
                            <NavLink 
                                to={item.path}
                                className='flex flex-row items-center justify-between py-4 px-8'
                            >
                                <div className="flex flex-col gap-y-4">
                                    <p className="text-[#333] text-sm">Category</p>
                                    <p className="text-primary_color text-lg font-primary">{item.name}</p>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 bg-primary_color/50 border-2 rounded">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                </svg>

                            </NavLink>
                        </div>
                    ))
                } 
                </div>
            </div>
        </div>
    )
}

export default Admin