import { ShoppingBag } from "lucide-react";
import { NavLink } from 'react-router-dom';
function NoRoomsCard() {
    return (
        <div className='text-center items-center mx-auto'>

            <ShoppingBag
                className='mx-auto text-gray-400'
                size={40}
            />
            <p className='text-xl font-bold my-2'>No bookings Yet</p>
            <p className='mb-2 font-semibold text-sm text-gray-400'>When you book a room ,it will apear here </p>
            <button className='hover:bg-blue-800 bg-blue-600 p-2 font-semibold rounded text-white transition duration-300'>
                <NavLink to='/rooms'>Book Now</NavLink>
            </button>

        </div>
    )
}

export default NoRoomsCard