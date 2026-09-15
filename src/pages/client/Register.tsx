import React, { useState } from 'react'
import {
  User,
  Phone,
  Mail,
  Lock
} from "lucide-react";
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
function Register() {
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e: React.FormEvent) => {
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
          role: 'user',
          password: password
        }
      }
    });
    if (error) return console.log(error.message)
    setEmail("");
    setPhone("");
    setFullname("");
    setPassword("");
    navigate('/login')
  }
  return (
    <div className='bg-blue-100/30 p-5 min-h-screen items-center flex'>
      <div className="form bg-white rounded-2xl w-[90%] lg:w-1/4 shadow-2xl mx-auto items-center p-3 text-center  ">
        <p className='text-2xl font-bold'>Create Account</p>
        <p className='text-xs text-gray-600 mb-5 font-semibold'>Sign up to start booking your space</p>
        <form onSubmit={handleRegister} >
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start ' htmlFor="name" >Full Name</label>
            <input onChange={(e) => setFullname(e.target.value)} type="text" id="name" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your full name' />
          </div>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="phone" >Phone Number</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" id="phone" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your phone number' />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="mail" >Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="mail" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your email' />
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your passwrd' />
          </div>

          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm mb-3">
              {errorMessage}
            </p>
          )}
          <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
        </form>
        <div className="log">
          <p className='font-semibold text-sm'>Already have an account? <NavLink className="items-center  text-blue-600 font-semibold" to={'/login'}> Log In </NavLink> </p>

        </div>
      </div>
    </div>
  )
}

export default Register