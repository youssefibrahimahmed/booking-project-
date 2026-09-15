import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar'

function AdminLayout() {
    return (
        <div className="profile-container  flex    h-screen overflow-hidden">

            <AdminSidebar   />

            <main className="profile-content  flex-1 overflow-y-auto">
                <Outlet />
            </main>

        </div>
    )
}

export default AdminLayout