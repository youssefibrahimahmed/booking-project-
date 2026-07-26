import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className=' bg-gray-200 top-0 left-0 z-50 shadow-xl fixed w-full '>
            <div className='items-center py-2 flex  justify-between max-w-6xl mx-auto'>

                <div>
                    <NavLink to="/" ><img className='w-11 h-11 rounded-2xl' src="../public/watermarked_img_16215557802731064264_edited.png" alt="" /></NavLink>
                </div>
                <div className="links flex justify-between font-semibold">
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-black text-white" : "mx-7 p-2 rounded  hover:bg-black transition duration-300 hover:text-white "} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-black text-white" : "mx-7 p-2 rounded  hover:bg-black transition duration-300 hover:text-white "} to='/rooms'>Rooms</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-black text-white" : "mx-7 p-2 rounded  hover:bg-black transition duration-300 hover:text-white "} to='/my-bookings'>My Bookings</NavLink>
                </div>
                <div className="profile flex justify-between font-semibold">
                    <NavLink to='/login' className='mx-1 p-2 rounded hover:bg-black transition duration-300 hover:text-white' > Login</NavLink>
                    <span className='mx-1 p-2 rounded' >|</span>
                    <NavLink to='/register' className='mx-1 p-2 rounded hover:bg-black transition duration-300 hover:text-white'  > Register</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Nav