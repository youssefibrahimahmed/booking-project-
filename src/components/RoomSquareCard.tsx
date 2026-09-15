import { NavLink } from 'react-router-dom'

interface RoomCardProps {
    imgUrl: string,
    roomName: string,
    pricePerHour: number,
    description: string,
    roomID:number

}
function RoomSquareCard({ imgUrl, roomID,roomName, pricePerHour, description }:RoomCardProps) {
    return (
  <div className='flex flex-col justify-between pb-4 items-center border border-gray-100 rounded-xl mb-10 shadow-xl
        hover:-translate-y-1 hover:shadow-2xl transition-all duration-300
        '>
            <div className="leftData flex flex-col">
                <div className="img w-full h-64 overflow-hidden mb-5">
                    <img src={imgUrl} alt="" className='w-full h-full rounded-2xl object-cover rounded' />
                </div>
                <div className="RoomData flex justify-between items-center px-3 w-full text-sm">
                    <h1 className='mb-3 font-bold'> {roomName}</h1>
                    <div className='text-center items-center rounded-2xl py-2 px-3 bg-blue-400/15'>
                            <p className='font-bold text-blue-600'>{pricePerHour} / <span className='text-[10px] text-gray-500'>per hour</span></p>
                        </div>
                </div>
                    <p className='text-sm font-semibold pl-3 text-gray-500 my-3 flex items-start'> {description}  </p>
            </div>
            <div className="rightData rounded p-3 mt-5 text-white bg-blue-600  hover:bg-blue-700 transition duration-300">

                <NavLink  to={`/rooms/${roomID}`}>View Room</NavLink>
            </div>

        </div>    )
}

export default RoomSquareCard