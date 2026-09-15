
// import RoomsCard from './RoomsCard';
import { NavLink } from 'react-router-dom'
import { useRooms } from "../hooks/useRooms"
import RoomCard from "./RoomCard";
import Loading from './Loading';
import Error from './Error';

function FeaturedRooms() {

    const { data: rooms, isLoading, isError } = useRooms();
    if (isLoading) {
        return <Loading />

    }
    if (isError) {
        return <Error/>
    }
    return (
        <div className="featured mt-20 max-w-6xl mx-auto border p-5 rounded-xl border-gray-100 shadow-2xl">
            <p className="font-bold text-xl p-3 border border-gray-100 rounded shadow-2xl mb-10 ">Featured Rooms</p>

            <div className="rooms">
                {
                    rooms?.slice(0, 3).map((room) => (
                        <RoomCard
                            key={room.id}
                            imgUrl={room.image}
                            roomName={room.name}
                            address={room.address}
                            availability={room.available}
                            pricePerHour={room.price_per_hour}
                            roomID={room.id}
                        />
                    ))

                }
            </div>
            <div className="viewRooms mb-10 text-center">
                <NavLink className='bg-blue-500 mx-auto px-8 py-4 text-white font-semibold rounded transition duration-300 hover:bg-blue-800' to='/rooms'>View All Rooms</NavLink>
            </div>
        </div>


    )
}

export default FeaturedRooms