import { NavLink, useNavigate } from 'react-router-dom'
import type { User } from "@supabase/supabase-js";
import { HiMiniBars3 } from "react-icons/hi2";
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User2 } from "lucide-react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        getUser();
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        });
        return () => {
            subscription.unsubscribe();
        };

    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/")
    };

    return (
        <div className=' bg-gray-200 top-0 left-0 z-50 shadow-xl fixed w-full '>
            <div className='items-center py-2 flex  justify-between md:max-w-6xl mx-auto'>

                <div className='pl-4 '>
                    <NavLink to="/" ><img className='w-11 h-11  rounded-2xl' src={logo} alt="" /></NavLink>
                </div>
                <div className="links hidden sm:flex justify-between font-semibold">
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-blue-400/20 text-blue-600" : "mx-7 p-2 rounded  hover:bg-blue-400/20 transition duration-300 hover:text-blue-600"} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-blue-400/20 text-blue-600" : "mx-7 p-2 rounded  hover:bg-blue-400/20 transition duration-300 hover:text-blue-600 "} to='/rooms'>Rooms</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "gap-6 p-2 rounded  bg-blue-400/20 text-blue-600" : "mx-7 p-2 rounded  hover:bg-blue-400/20 transition duration-300 hover:text-blue-600 "} to='/my-bookings'>My Bookings</NavLink>
                </div>
                <div className="profile hidden md:flex justify-between font-semibold">
                    {!user ? (
                        <>
                            <NavLink to='/login' className='mx-1 p-2 rounded hover:bg-blue-400/20 transition duration-300 hover:text-blue-600' > Login</NavLink>
                            <span className='mx-1 p-2 rounded' >|</span>
                            <NavLink to='/register' className='mx-1 p-2 rounded hover:bg-blue-400/20 transition duration-300 hover:text-blue-600'  > Register</NavLink>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <User2 size={20} />
                                </div>
                                <span className="font-semibold">
                                    <NavLink to='/profile-details/'>  {user.user_metadata?.full_name?.split(" ")[0]}</NavLink>
                                </span>
                                <span className='mx-1 p-2 rounded' >|</span>

                                <button
                                    onClick={handleLogout}
                                    className="text-red-500 font-semibold hover:text-red-600 border rounded-xl py-1 px-2"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )
                    }
                </div>

                <div className="humborgerIcon sm:hidden pr-4">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <HiMiniBars3 size={28} />
                    </button>
                </div>
                {
                    isOpen && (
                        <div className='absolute top-full w-full left-0 bg-white  shadow-xl rounded-b-xl overflow-hidden flex flex-col p-3 font-semibold '>
                            <NavLink onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition" to='/'>Home</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition" to='/rooms'>Rooms</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition" to='/my-bookings'>My Bookings</NavLink>
                            {!user ? (
                                <>
                                    <NavLink onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition" to='/login'>Login</NavLink>
                                    <NavLink onClick={() => setIsOpen(false)} className="block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition" to='/register'>Register</NavLink>
                                </>

                            ) : (
                                <>
                                    <button className='text-red-500 font-semibold hover:text-red-600 block px-6 py-4 border-b border-gray-200 hover:bg-gray-100 transition' onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            )}


                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Nav