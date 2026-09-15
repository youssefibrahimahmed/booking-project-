import ProfileSidebar from '../components/ProfileSidebar'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
    return (
        <>
            <div className='bg-blue-200/30 overflow-hidden p-5 min-h-screen items-center flex'>

                <div className="profile-container  flex w-[80%] justify-between p-10 mx-auto bg-white rounded-xl">
                    <ProfileSidebar />

                    <main className="profile-content ml-5 w-[70%]">
                        <Outlet />
                    </main>

                </div>
            </div>
        </>
    )
}

export default ProfileLayout