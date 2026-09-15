import { NavLink } from 'react-router-dom'
import { Calendar } from 'lucide-react'
interface RoomCardProps {
    imgUrl: string,
    roomName: string,
    roomID: number,
    checkIn: string,
    checkOut: string,
    totalPrice: number
}


function MyBookingCard({ imgUrl, roomName, roomID, checkIn, checkOut, totalPrice }: RoomCardProps) {

    return (
        <>
            <div className='
            mx-auto
           flex flex-col justify-around
            p-4 w-[80%] mt-8 border
             border-gray-100 rounded-xl mb-10
              shadow-xl hover:-translate-y-1
             hover:shadow-xl  transition-all duration-300 '>
                <div className="leftData flex flex-col sm:flex-row w-full gap-5">
                    <div className="img w-full sm:w-35 sm:h-35 ">
                        <img src={imgUrl} alt="" className='w-full  h-full object-cover rounded' />
                    </div>

                    <div className="RoomData flex flex-col justify-between w-full text-sm">
                        <h1 className='mb-3  font-bold'> {roomName}</h1>
                        <div className='flex flex-col   gap-3 my-3 sm:gap-10 sm:w-fit w-full sm:justify-between  sm:flex-row '>
                            <div className="checkIn   flex font-semibold text-gray-700 items-center gap-2">
                                <div className="icon">
                                    <Calendar
                                        size={25}
                                        className=" left-3 "
                                    />
                                </div>
                                <div className="data">
                                    <p>Check-In</p>
                                    <p>{checkIn}</p>
                                </div>
                            </div>
                            <div className="checkIn flex text-gray-700 font-semibold items-center gap-2">
                                <div className="icon">
                                    <Calendar
                                        size={25}
                                        className=" left-3 "
                                    />
                                </div>
                                <div className="data">
                                    <p>Check-Out</p>
                                    <p>{checkOut}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col  justify-between'>

                            <p className='mb-5 font-semibold'>Total :  <span className='text-xl  text-blue-600 font-bold'>${totalPrice}</span> </p>
                            <div className="rightData rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300">

                                <NavLink to={`/rooms/${roomID}`}>View Room</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBookingCard