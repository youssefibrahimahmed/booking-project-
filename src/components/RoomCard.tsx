import { NavLink } from 'react-router-dom'

interface RoomCardProps {
    imgUrl: string,
    roomName: string,
    address: string,
    availability: boolean,
    pricePerHour: number,
    roomID:number

}


function RoomCard({ imgUrl, roomName, address, availability, pricePerHour,roomID }: RoomCardProps) {
    return (
        <div className='flex justify-between p-4 items-center border border-gray-100 rounded-xl mb-10 shadow-2xl
        hover:-translate-y-1 hover:shadow-2xl transition-all duration-300
        '>
            <div className="leftData flex items-center gap-5 ">
                <div className="img w-35 h-35 ">
                    <img src={imgUrl} alt="" className='w-full h-full object-cover rounded' />
                </div>
                <div className="RoomData text-sm">
                    <h1 className='mb-3 font-bold'> {roomName}</h1>
                    <p> <span className='font-semibold'> Address</span>: {address}</p>
                    <p><span className='font-semibold'> Availability</span>: {availability ? "Available" : "Not Available"}</p>
                    <p><span className='font-semibold'> Price</span>: ${pricePerHour} / hour</p>
                </div>
            </div>
            <div className="rightData rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300">

                <NavLink to={`/rooms/${roomID}`}>View Room</NavLink>
            </div>

        </div>
    )
}

export default RoomCard