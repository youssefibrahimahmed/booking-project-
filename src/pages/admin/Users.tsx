import {  Search, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { AdminDashboard } from '../../hooks/AdminDashboard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { useState } from 'react'

function Users() {
  const { data, isLoading, isError } = AdminDashboard()
  const [search, setSearch] = useState('')

  if (isLoading) return <Loading />
  if (isError) return <Error />

  const {
    allUsers
  } = data

  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Users</p>
          <p className="text-gray-600 text-sm font-semibold" >Manage all registered users in your hotel system</p>
        </div>
        <div className="add-user w-fit items-center flex bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-200/70 hover:text-blue-700 transition-all duration-300 text-sm">
          <NavLink to='/admin/add-user'><User className='inline' size={20} /> Add new User</NavLink>
        </div>
      </div>
      <div className="search flex items-center w-[80%] mx-auto mb-5  relative rounded-lg px-4  ">
        <Search size={20} className="inline absolute left-6 mr-2 text-gray-400" />
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by name..." className="border text-sm font-semibold w-full border-gray-300 bg-white rounded-lg py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row ">
        {/* Bookings */}
        <div className="recent-users bg-white w-full rounded-xl  ">
          <div className="users mt-0 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-black uppercase bg-gray-100 ">
                <tr className=''>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">joined</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.filter((user) => (user.full_name||'').includes(search)).map((user, index) => (
                  <tr className='bg-white  font-semibold text-sm' key={user.id}>
                    <td className="px-4 py-3">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3">
                      {user.full_name}
                    </td>
                    <td className="px-4 py-3">
                      {user.email}
                    </td>
                    <td className="px-4 py-3">
                      {user.role}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(user.created_at).toLocaleDateString()}
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

export default Users
