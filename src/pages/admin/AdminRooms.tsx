import {Search } from 'lucide-react'
import { AdminDashboard } from '../../hooks/AdminDashboard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { useState } from 'react'

function AdminRooms() {
  const { data, isLoading, isError } = AdminDashboard()
  const [search, setSearch] = useState('')

  if (isLoading) return <Loading />
  if (isError) return <Error />

  const {
    allRooms
  } = data

  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Rooms</p>
          <p className="text-gray-600 text-sm font-semibold" >Manage all rooms in your hotel system</p>
        </div>
      </div>
      <div className="search flex items-center w-[80%] mx-auto mb-5  relative rounded-lg px-4  ">
        <Search size={20} className="inline absolute left-6 mr-2 text-gray-400" />
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by room name..." className="border text-sm font-semibold w-full border-gray-300 bg-white rounded-lg py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row ">
        {/* Bookings */}
        <div className="recent-users bg-white w-full rounded-xl  ">
          <div className="users mt-0 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-black uppercase bg-gray-100 ">
                <tr className=''>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">ROOM</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">LOCATION</th>
                  <th className="px-4 py-3">CAPACITY</th>
                  <th className="px-4 py-3">PRICE/NIGHT</th>
                  <th className="px-4 py-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {allRooms.filter((room) => (room.name || '').includes(search)).map((room, index) => (
                  <tr className='bg-white  font-semibold text-sm' key={room.id}>
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      <div>
                        {room.image && (
                          <img src={room.image} alt={room.name} className="w-15 h-15 rounded object-cover" />
                        )}
                      </div>
                      <div>
                        {room.square_feet}
                        {room.name && (
                          <p className="text-gray-500 text-xs">{room.name}</p>
                        )}

                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        {room.description && (
                          <p className="text-gray-500 text-sm">{room.description}</p>
                        )}

                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {room.location}
                    </td>
                    <td className="px-4 py-3">
                      {room.capacity}
                    </td>
                    <td className="px-4 py-3">
                      {room.price_per_hour} EGP
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Available</span>
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

export default AdminRooms

//                         {booking.profiles?.full_name}
//                         {booking.profiles?.email && (
//                           <p className="text-gray-500 text-xs">{booking.profiles.email}</p>
//                         )}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3">
//                       {booking?.room_id}
//                     </td>
//                     <td className="px-4 py-3">
//                       {booking.check_in}
//                     </td>
//                     <td className="px-4 py-3">
//                       {booking.check_out}
//                     </td>
//                     <td className="px-4 py-3 font-bold">
//                       {booking.total_price.toFixed(2)} EGP
//                     </td>
//                     <td className="px-4 py-3">
//                       <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default AdminRooms
