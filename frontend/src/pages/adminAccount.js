import AdminTab from "../components/adminTab"
import { getUser } from '../api/adminApi'
import { useEffect, useState } from "react"

const AdminAccount = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('user')
            const res = await getUser(token)
            if (res) setusers(res)
        })()
    },[])

    return (
        <div className="flex flex-row">
            <AdminTab />

            <div className="bg-primary_color/10 h-screen w-[85%] px-20 py-8">
                <div className="bg-white drop-shadow-lg rounded p-8">
                    <p className="font-bold font-primary text-primary_color text-xl py-4 border-b-2 px-4">Tài khoản đã đăng ký</p>
                    <div className="grid grid-cols-5 text-sm border-b-2 py-2">
                        <p className="px-4 font-semibold py-3">UserID</p>
                        <p className="px-4 font-semibold text-gray-800 py-3">Email</p>
                        <p className="px-4 font-semibold text-primary_color py-3">Name</p>
                        <p className="px-4 font-semibold text-gray-800 py-3">Sex</p>
                        <p className="px-4 font-semibold text-primary_color py-3">PhoneNumber</p>
                    </div>
                {
                    users.map((user)=>(
                        <div key={user.userID} className="grid grid-cols-5 text-sm border-b-2 py-2">
                            <p className="px-4 font-semibold py-3">{user.userID}</p>
                            <p className="px-4 text-gray-800 py-3">{user.email}</p>
                            <p className="px-4 text-primary_color py-3">{user.fullName}</p>
                            <p className="px-4 text-gray-800 py-3">{user.sex}</p>
                            <p className="px-4 text-primary_color py-3">{user.phoneNumber}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default AdminAccount