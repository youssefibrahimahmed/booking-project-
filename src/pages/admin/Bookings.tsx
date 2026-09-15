import { Search } from 'lucide-react'
import { AdminDashboard } from '../../hooks/AdminDashboard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { useState } from 'react'

function Bookings() {
  const { data, isLoading, isError } = AdminDashboard()
  const [search, setSearch] = useState('')

  if (isLoading) return <Loading />
  if (isError) return <Error />

  const {
    allBookings,
  } = data

  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Bookings</p>
          <p className="text-gray-600 text-sm font-semibold" >Manage all bookings in your hotel system</p>
        </div>
      </div>
      <div className="search flex items-center w-[80%] mx-auto mb-5  relative rounded-lg px-4  ">
        <Search size={20} className="inline absolute left-6 mr-2 text-gray-400" />
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by Guest name..." className="border text-sm font-semibold w-full border-gray-300 bg-white rounded-lg py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row ">
        {/* Bookings */}
        <div className="recent-users bg-white w-full rounded-xl  ">
          <div className="users mt-0 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-black uppercase bg-gray-100 ">
                <tr className=''>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Guest</th>
                  <th className="px-4 py-3">Room</th>
                  <th className="px-4 py-3">Check-in</th>
                  <th className="px-4 py-3">Check-out</th>
                  <th className="px-4 py-3">Total Price</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.filter((booking) => (booking.profiles?.full_name || '').includes(search)).map((booking, index) => (
                  <tr className='bg-white  font-semibold text-sm' key={booking.id}>
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      {booking.profiles?.full_name.split("")[0]&&(
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded-full">
                          {booking.profiles?.full_name.split("")[0]}
                        </span>
                      )}
                      <div>
                        {booking.profiles?.full_name}
                        {booking.profiles?.email && (
                          <p className="text-gray-500 text-xs">{booking.profiles.email}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {booking?.room_id}
                    </td>
                    <td className="px-4 py-3">
                      {booking.check_in}
                    </td>
                    <td className="px-4 py-3">
                      {booking.check_out}
                    </td>
                    <td className="px-4 py-3 font-bold">
                      {booking.total_price.toFixed(2)} EGP
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Bookings
