import { Lock, Mail, Phone, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase';
import Loading from './Loading';

function ProfileDetails() {

    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const getProfile = async () => {
            const {
                data: { user }
            } = await supabase.auth.getUser()
            if (!user) {
                setLoading(false)
                return
            }
            setEmail(user.email ?? '')
            const { data, error } = await supabase
                .from('profiles')
                .select('full_name,phone')
                .eq('id', user.id)
                .single()

            if (error) {
                console.log('error')
                setLoading(false)
                return
            }
            setFullName(data.full_name ?? '')
            setPhone(data.phone ?? '')
            setLoading(false)
        }
        getProfile()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/");
    };

    const handleUpdateDetails = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('')
        const {
            data: { user }
        } = await supabase.auth.getUser();
        if (!user) {
            setLoading(false)
            return
        }
        const { error } = await supabase
            .from('profiles')
            .update({
                full_name: fullName,
                phone
            })
            .eq('id', user.id)
        if (error) {
            console.log('error')
            setLoading(false)
            return
        }
        setMessage("Profile updated successfully")
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold mb-5 '>Personal Information</h1>
            <form onSubmit={handleUpdateDetails} >
                <div className="relative">
                    <User
                        size={18}
                        className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
                    />

                    <label className='block flex font-semibold text-[15px] mb-2 items-start ' htmlFor="name" >Full Name</label>
                    <input type="text" id="name" onChange={(e) => setFullName(e.target.value)} value={fullName} className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your full name' />
                </div>



                <div className="relative">
                    <Mail
                        size={18}
                        className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
                    />

                    <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="mail" >Email</label>
                    <input defaultValue={email} disabled type="email" id="mail" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold text-gray-400' placeholder='Enter your email' />
                </div>
                <div className="relative">
                    <Phone
                        size={18}
                        className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
                    />

                    <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="phone" >Phone Number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="phone" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your phone number' />
                </div>

                <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
            </form>
            {message && (
                <p className="text-blue-600 font-semibold text-sm mb-3">
                    {message}
                </p>
            )}
            <hr className='text-gray-400/40 my-3    ' />

            <div >
                <h1 className=' text-xl font-bold'>Account Actions</h1>
                <NavLink className="flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 justify-center  text-[15px] rounded mx-auto text-center relative border border-gray-400/70 border-2 items-center font-bold" to='/profile-details/change-password/'><Lock className='mr-3 font-bold' size={18} />  Change Password</NavLink>
                <button
                    onClick={handleLogout}
                    className="text-red-500 w-full font-semibold hover:text-red-600 border border-2 rounded py-1 px-2"
                >
                    Logout
                </button>
            </div>

        </div>
    )
}

export default ProfileDetails



// http://localhost:5173/profile-details/