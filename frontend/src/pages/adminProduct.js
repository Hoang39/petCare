import AdminDescription from "../components/adminDescription"
import AdminTab from "../components/adminTab"

const AdminProduct = () => {
    return (
        <div className="flex flex-row">
            <AdminTab />

            <div className="bg-primary_color/10 h-screen w-[85%] px-20 py-8">
                <AdminDescription href='product'/>  
            </div>
        </div>
    )
}

export default AdminProduct