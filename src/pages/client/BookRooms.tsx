import BookingCard from '../../components/BookingCard'
import { NavLink, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useRoomById } from '../../hooks/useRoomById';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function BookRooms() {
    const { id } = useParams();
    const roomId = Number(id)
    const { data: roomData, isLoading, isError } = useRoomById(roomId)
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }
    return (
        <div className='bg-blue-100/70    min-h-screen p-15'>

            <div className="w-[75%] flex mx-auto ">

                <NavLink className='' to={'/rooms'}> <p className='items-center flex text-blue-600 mb-3 font-semibold '>  <ChevronLeft className='inline' size={20} /> Back to Rooms</p></NavLink>
            </div>
            <div className='flex justify-center'>

                <BookingCard
                    roomId={roomData.id}
                    imgUrl={roomData.image}
                    roomName={roomData.name}
                    pricePerHour={roomData.price_per_hour}
                    description={roomData.description}

                />
            </div>

        </div>

    )
}

export default BookRooms