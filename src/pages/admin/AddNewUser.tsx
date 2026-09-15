import { ChevronLeft, Lock, Mail, Phone, UserCog, UserPlus } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

function AddNewUser() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('user')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("")
    if (password.length < 6) {
      setErrorMessage("Password Must be at Least 6 charcters")
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
          phone: phone,
          role: role,
          password: password
        }
      }
    });
    if (error) return console.log(error.message)
    setEmail("");
    setPhone("");
    setFullName("");
    setPassword("");
    navigate('/admin/users')
  }
  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Add New User</p>
          <p className="text-gray-600 text-sm font-semibold" >Create a new user account at your hotel system</p>
        </div>
        <div className="add-user w-fit items-center flex  px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-200/70 hover:text-blue-700 transition-all duration-300 text-sm">
          <NavLink to='/admin/users'> <p className='items-center flex text-blue-600 mb-3 font-semibold '><ChevronLeft className='inline' size={20} /> Back To Users</p></NavLink>
        </div>
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row ">
        {/* Bookings */}
        <div className="recent-users bg-white w-full rounded-xl  ">
          <div className="users p-5 mt-0 overflow-x-auto rounded-xl border border-gray-200">
            <div className="head flex items-center gap-3 mb-5">
              <UserPlus size={50} className='text-blue-600 bg-blue-100 p-2 rounded-full inline mr-2' />
              <div>
                <p className="text-2xl font-bold">User Information</p>
                <p className="text-gray-600 text-sm font-semibold" >Fill in the details for the new user</p>
              </div>
            </div>
            <form onSubmit={handleAddUser}>

              <div className="relative flex gap-5 flex-col w-full lg:flex-row">
                <div className='relative w-full'>

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="fullName" >Full Name</label>
                  <input  onChange={(e) => setFullName(e.target.value)} type="text" id="fullName" className='border border-gray-400/50  rounded w-full p-1 text-[15px] p-2  font-semibold' placeholder='Enter your full name' />
                </div>

                <div className='relative w-full'>
                  <Lock
                    size={18}
                    className="absolute left-3 top-[46%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Password</label>
                  <input  onChange={(e) => setPassword(e.target.value)} type="password" id="password" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your password' />
                  <p className='text-sm text-gray-400 mb-5 font-semibold '>Password must be at least 6 characters</p>
                </div>
              </div>
              {/* -------------------------------------------------------------- */}
              <div className="relative flex gap-5 flex-col w-full lg:flex-row">
                <div className='relative w-full'>
                  <Phone
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="phone" >Phone</label>
                  <input  onChange={(e) => setPhone(e.target.value)} type="text" id="phone" className='pl-10 border border-gray-400/50  rounded w-full  text-[15px] p-2  font-semibold' placeholder='Enter your phone number' />
                </div>

                <div className='relative w-full'>
                  <UserCog
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className='pl-10 border border-gray-400/50  rounded w-full  text-[15px] p-2   font-semibold' >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              {/* ------------------------------------------------------------- */}
              <div className="relative flex gap-5 flex-col w-full mt-10 lg:flex-row">


                <div className='relative w-full'>
                  <Mail
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="email" >Email</label>
                  <input  onChange={(e) => setEmail(e.target.value)} type="email" id="email" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your email' />
                </div>
              </div>

              <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
            </form></div>
        </div>
      </div>


    </div>

  )
}

export default AddNewUser