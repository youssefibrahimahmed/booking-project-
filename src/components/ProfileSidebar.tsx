import { Calendar, Lock, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Loading from './Loading'

function ProfileSidebar() {

    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')

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
                .select('full_name')
                .eq('id', user.id)
                .single()
            console.log(data)

            if (error) {
                console.log(error)
                setLoading(false)
                return
            }
            if (loading) {
                <Loading />
            }
            setFullName(data.full_name ?? '')
            setLoading(false)
        }
        getProfile()
    }, [])


    return (
        <div className='bg-blue-200/30 p-5 rounded-xl'>
            <div className="left items-center   flex flex-col ">
                <div className="id bg-blue-300 rounded-[50%]  w-fit">
                    <p className='text-8xl  text-center w-fit py-4 px-8 '> {fullName.charAt(0).toUpperCase()}</p>
                </div>
                <div className="details mb-10 text-center w-fit">
                    <p className='text-xl font-bold'>{fullName}</p>
                    <p className='text-gray-500 font-semibold'>{email}</p>
                </div>
                <div className="links mt-5">
                    <NavLink end className={({ isActive }) => isActive ? "flex my-2 w-full text-blue-600 py-2 pr-3 pl-2 rounded-xl bg-blue-200/70 items-center font-bold" : "flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 rounded-xl  items-center font-bold"} to='/profile-details'> <User size={22} className='mr-3' /> Profile  </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "flex my-2 w-full text-blue-600 py-2 pr-3 pl-2 rounded-xl bg-blue-200/70 items-center font-bold" : "flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 rounded-xl  items-center font-bold"} to='/profile-details/change-password/'><Lock className='mr-3' size={22} />  Change Password</NavLink>
                    <NavLink to='/my-bookings' end className={({ isActive }) => isActive ? "flex my-2 w-full text-blue-600 py-2 pr-3 pl-2 rounded-xl bg-blue-200/70 items-center font-bold" : "flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 rounded-xl  items-center font-bold"}><Calendar className='mr-3' size={22} />  My Bookings </NavLink>
                </div>
            </div>
            <div className="right"></div>
        </div>)
}

export default ProfileSidebar

//  className={({ isActive }) => isActive ? "flex my-2 w-full text-blue-600 py-2 pr-3 pl-2 rounded-xl bg-blue-200/70 items-center font-bold" : "flex my-2 w-full text-gray-500 py-2 pr-3 pl-2 rounded-xl  items-center font-bold"} 