import { ArrowRight, Bed, Calendar, Clock, User, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { AdminDashboard } from '../../hooks/AdminDashboard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

function Dashboard() {
  const { data, isLoading, isError } = AdminDashboard()

  if (isLoading) return <Loading />
  if (isError) return <Error />

  const {
    totalUsers,
    totalRooms,
    totalBookings,
    totalCheckedIns,
    recentBookings,
    recentUsers,
  } = data

  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10">
        <p className="text-2xl font-bold">Dashboard</p>
        <p className="text-gray-600 text-sm font-semibold" >Welcome Back! Here's What's Happening With Your Hotel Today</p>
      </div>
      <div className="states grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <div className="box bg-blue-100/70 p-5 rounded-xl flex gap-5  w-fit pr-10">
          <div className="user bg-blue-300/30 p-2 w-fit h-fit rounded-xl">
            <Users className="text-blue-500" size={30} />
          </div>
          <div className="data">
            <p className="font-semibold text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-bold">{totalUsers}</p>
            <p className="text-xs my-2 text-gray-600 font-bold"><span className="text-green-500">+12%</span> from last month</p>
          </div>
        </div>
        <div className="box bg-green-100/70 p-5 rounded-xl flex gap-5  w-fit pr-10">
          <div className="user bg-green-300/30 p-2 w-fit h-fit rounded-xl">
            <Bed className="text-green-500" size={30} />
          </div>
          <div className="data">
            <p className="font-semibold text-sm text-gray-600">Total Rooms</p>
            <p className="text-2xl font-bold">{totalRooms}</p>
            <p className="text-xs my-2 text-gray-600 font-bold"><span className="text-green-500">+12%</span> from last month</p>
          </div>
        </div>
        <div className="box bg-purple-100/70 p-5 rounded-xl flex gap-5  w-fit pr-10">
          <div className="user bg-purple-300/30 p-2 w-fit h-fit rounded-xl">
            <Calendar className="text-purple-500" size={30} />
          </div>
          <div className="data">
            <p className="font-semibold text-sm text-gray-600">Total Bookings</p>
            <p className="text-2xl font-bold">{totalBookings}</p>
            <p className="text-xs my-2 text-gray-600 font-bold"><span className="text-green-500">+12%</span> from last month</p>
          </div>
        </div>
        <div className="box bg-orange-100/70 p-5 rounded-xl flex gap-5  w-fit pr-10">
          <div className="user bg-orange-300/30 p-2 w-fit h-fit rounded-xl">
            <Clock className="text-orange-500" size={30} />
          </div>
          <div className="data">
            <p className="font-semibold text-sm text-gray-600">Total Check-ins</p>
            <p className="text-2xl font-bold">{totalCheckedIns}</p>
            <p className="text-xs my-2 text-gray-600 font-bold"><span className="text-green-500">+12%</span> from last month</p>
          </div>
        </div>
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row mt-10 ">
        {/* Bookings */}
        <div className="recent-users bg-white rounded-xl p-5 mt-10">
          <div className="header flex justify-between items-center">
            <p className="text-xl font-bold">Recent Bookings</p>
            <NavLink to='/admin/bookings' className='text-blue-600 font-semibold text-sm'>View All <ArrowRight className="inline-block ml-1" size={16} /></NavLink>
          </div>
          <div className="users mt-5 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-black uppercase bg-gray-100 ">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Room</th>
                  <th className="px-4 py-3">Check-in</th>
                  <th className="px-4 py-3">Check-out</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking, index) => (
                  <tr className='bg-white  font-semibold text-sm' key={booking.id}>
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3">
                      {booking.profiles?.full_name}
                    </td>
                    <td className="px-4 py-3">
                      {booking.rooms?.name}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(booking.check_in).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(booking.check_out).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className='bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded'> {booking.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Users */}
        <div className="recent-users bg-white rounded-xl p-5 mt-10">
          <div className="header flex justify-between items-center">
            <p className="text-xl font-bold">Recent Users</p>
            <NavLink to='/admin/users' className='text-blue-600 font-semibold text-sm'>View All <ArrowRight className="inline-block ml-1" size={16} /></NavLink>
          </div>
          <div className="users mt-5 overflow-x-auto rounded-xl ">
            <table className="w-full text-sm text-left ">

              <tbody>

                {recentUsers.map((user, index) => (
                  <tr className="bg-white  font-semibold text-sm" key={index}>
                    <td className='px-4 py-3'> {user.full_name} </td>
                    <td className='px-4 py-3'> {new Date(user.created_at).toLocaleDateString()}</td>
                    <td className='px-4 py-3'>
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

export default Dashboard
