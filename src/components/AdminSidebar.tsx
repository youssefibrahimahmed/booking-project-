import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { Bed, Calendar, PlusCircle, User } from 'lucide-react'
import { BsWindowSplit } from 'react-icons/bs'
function AdminSidebar() {
    return (
        <div className='bg-[#001f38] p-5 '>
            <div className="logo flex  gap-3">
                <img className='w-11 rounded-xl' src={logo} alt="" />
                <div className="logo-text ">
                    <p className='font-bold text-white'>RoomBook</p>
                    <p className='text-white text-xs'>Admin Panel</p>
                </div>
            </div>
            <div className="links flex text-sm text-white font-semibold mt-10  flex-col gap-3">
                <div className='flex gap-2 items-center   relative w-full  rounded '>

                    <NavLink end className={({ isActive }) => isActive ? "flex items-center gap-2 bg-blue-700 pl-3 pr-20 py-2 rounded w-full " : "flex items-center gap-2  pl-3 pr-20 py-2 rounded w-full "} to='/admin'><BsWindowSplit size={20} /> Dashboard</NavLink>
                </div>
                <div className='flex gap-2 items-center   relative w-full   rounded  '>

                    <NavLink end className={({ isActive }) => isActive ? "flex items-center gap-2 bg-blue-700 pl-3 pr-20 py-2 rounded w-full " : "flex items-center gap-2  pl-3 pr-20 py-2 rounded w-full "} to='/admin/users'> <User className="" size={20} /> Users</NavLink>
                </div>
                <div className='flex gap-2 items-center   relative w-full   rounded  '>

                    <NavLink end className={({ isActive }) => isActive ? "flex items-center gap-2 bg-blue-700 pl-3 pr-20 py-2 rounded w-full " : "flex items-center gap-2  pl-3 pr-20 py-2 rounded w-full "} to='/admin/bookings'><Calendar className="" size={20} /> Bookings</NavLink>
                </div>
                <div className='flex gap-2 items-center   relative w-full   rounded  '>

                    <NavLink end className={({ isActive }) => isActive ? "flex items-center gap-2 bg-blue-700 pl-3 pr-20 py-2 rounded w-full " : "flex items-center gap-2  pl-3 pr-20   py-2 rounded w-full "} to='/admin/rooms'>   <Bed className="" size={20} /> Rooms</NavLink>
                </div>
                <div className='flex gap-2 items-center   relative w-full   rounded  '>

                    <NavLink end className={({ isActive }) => isActive ? "flex items-center gap-2 bg-blue-700 pl-3 pr-20 py-2 rounded w-full " : "flex items-center gap-2  pl-3 pr-20 py-2 rounded w-full "} to='/admin/add-room'><PlusCircle className="" size={20} /> Add Room</NavLink>
                </div>

            </div>
        </div>
    )
}

export default AdminSidebar



// className={({ isActive }) => isActive ? "flex my-2 w-full text-blue-600 py-2 pr-3 pl-2 rounded-xl bg-blue-200/70 items-center font-bold" : "flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 rounded-xl  items-center font-bold"}