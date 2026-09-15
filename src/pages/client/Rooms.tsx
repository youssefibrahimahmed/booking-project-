import { useRooms } from '../../hooks/useRooms'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import RoomSquareCard from '../../components/RoomSquareCard';
import { sortByName } from '../../hooks/sortRoomByName';
import { sortByPrice } from '../../hooks/sortRoomByPrice';
import { sortBySpace } from '../../hooks/sortRoomBySpace';
import { useState } from 'react';

function Rooms() {
  const { data: roomsData, isLoading, isError } = useRooms();

  const { data: sortWithName, isLoading: loadingNameSort, isError: errorNameSort } = sortByName();
  const { data: sortWithPrice, isLoading: loadingPriceSort, isError: errorPriceSort } = sortByPrice();
  const { data: sortWithSpace, isLoading: loadingSpaceSort, isError: errorSpaceSort } = sortBySpace();
  console.log(sortWithName)
  console.log(sortWithPrice)
  console.log(sortWithSpace)

  const [sortBy, setSortBy] = useState("name")

  if (isLoading || loadingNameSort || loadingPriceSort || loadingSpaceSort) {
    return <Loading />
  }
  if (isError || errorNameSort || errorPriceSort || errorSpaceSort) {
    return <Error />
  }



  let sortedRoomes = sortWithName
  if (sortBy === "square")
    sortedRoomes = sortWithSpace

  if (sortBy === "price")
    sortedRoomes = sortWithPrice





  return (
    <>
      <div className="header flex justify-between items-center mt-1 max-w-6xl mx-auto p-5">
        <div>

          <p className="font-bold text-2xl p-3 pb-1">Available Rooms</p>
          <p className="font-[500] text-sm p-3 pt-0 pb-0 text-gray-400   ">Browse All available rooms and choose the perfect one for your stay</p>
          <p className="font-[500] text-sm p-3 pt-0 text-gray-400   ">{roomsData.length} rooms found</p>
        </div>
        <div className=''>
          <span className='font-[500] text-sm p-3 pt-0 text-gray-400 '>sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='border border-gray-300 pr-7 pl-3 rounded text-xs font-semibold' name="" id="">
            <option value="name">Name</option>
            <option value="square">Square Feet</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div >
      <div className="featured mb-10 max-w-6xl  mx-auto border p-5 rounded-xl border-gray-100 shadow-2xl">
        <div className="rooms grid grid-cols-3 gap-6">
          {
            sortedRoomes?.map((room) => (
              <RoomSquareCard
                key={room.id}
                imgUrl={room.image}
                roomName={room.name}
                description={room.description}
                pricePerHour={room.price_per_hour}
                roomID={room.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Rooms