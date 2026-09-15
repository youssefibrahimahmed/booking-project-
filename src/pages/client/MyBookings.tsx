import MyBookingCard from '../../components/MyBookingCard'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useMyBookings from '../../hooks/useMyBookings';
import NoBookingsCard from '../../components/NoBookingsCard';

function MyBookings() {
  const { id } = useParams();
  const roomId = Number(id)
  const { data: bookings, isLoading, isError } = useMyBookings();

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }

  return (
    <div className='w-[90%] mx-auto p-5'>
      <p className='mx-auto text-2xl font-bold w-[80%]'>My Bookings</p>
      <p className='mx-auto w-[80%] text-gray-400 text-sm font-semibold'>Here You Can See All Your Reservation</p>
      {bookings && bookings.length === 0 ? (<NoBookingsCard />) : bookings.map((booking) => (
        <MyBookingCard
          key={booking.id}
          imgUrl={booking.rooms.image}
          roomName={booking.rooms.name}
          roomID={booking.room_id}
          checkIn={booking.check_in}
          checkOut={booking.check_out}
          totalPrice={booking.total_price}

        />
      ))

      }
    </div>
  )
}

export default MyBookings