import GetRoomDetails from '../../components/GetRoomDetails'
import { ChevronLeft } from "lucide-react";
import { NavLink } from 'react-router-dom';
function RoomDetails() {
  return (
    <div className='bg-blue-100/30 p-5 w-full h-full'>
      <div className="header max-w-6xl mx-auto my-5">
        <NavLink to={'/rooms'}> <p className='items-center flex text-blue-600 mb-3 font-semibold '>  <ChevronLeft className='inline' size={20} /> Back to Rooms</p></NavLink>
        <p className='text-3xl font-bold'>Room Details</p>
      </div>
      <GetRoomDetails />
      </div>
  )
    }

export default RoomDetails