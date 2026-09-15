import React, { useState } from 'react'
import {
  Mail,
  Lock
} from "lucide-react";
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (password.length < 6) {
      setErrorMessage("Password Must be At Least 6 characters")
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setErrorMessage("Email or password is incorrect");
      return;
    }
    setEmail("");
    setPassword("");
    navigate('/')
  }

  return (
    <div className='bg-blue-100/30 overflow-hidden w-full overflow-x-hidden h-screen p-5 items-center flex relative'>
      <div className="form bg-white rounded-2xl w-[90%] lg:w-1/4 shadow-2xl mx-auto  items-center p-3 text-center  ">
        <p className='text-2xl font-bold'>Welcome Back</p>
        <p className='text-xs text-gray-600 mb-5 font-semibold'>Log in to continue booking your space</p>
        <form className='z-10 relative' onSubmit={handleLogIn} >

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="mail" >Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="mail" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your email' />
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your passwrd' />
          </div>
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm mb-3">
              {errorMessage}
            </p>
          )}
          <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
        </form>
        <div className="log">
          <p className='font-semibold text-sm'>Don't have an account? <NavLink className="items-center  text-blue-600 font-semibold" to={'/register'}> Register </NavLink> </p>

        </div>
      </div>
      <div className='absolute pointer-events-none w-50 h-50 z-[-1] bg-blue-100 top-[-50px] left-[-50px] rounded-[50%]'> </div>
      <div className='absolute pointer-events-none w-50 h-50 z-[-1] bg-blue-100 bottom-[-50px] right-[-50px] rounded-[50%]'></div>
      <div className='absolute pointer-events-none w-25 z-[-1] h-25 bg-blue-100 bottom-[10px] left-[50px] rounded-[50%]'></div>
      <div className='absolute pointer-events-none z-[-1] w-35 h-35 bg-blue-100 top-[110px] right-[150px] rounded-[50%]'></div>


    </div>

  )
}

export default Login