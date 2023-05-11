import AdminDescription from "../components/adminDescription"
import AdminTab from "../components/adminTab"

const AdminService = () => {
    return (
        <div className="flex flex-row">
            <AdminTab />

            <div className="bg-primary_color/10 h-screen w-[85%] px-20 py-8">
                <AdminDescription href='service'/>
            </div>
        </div>
    )
}

export default AdminService