import { Lock } from 'lucide-react'
import React, { useState } from 'react'
import { supabase } from '../lib/supabase';

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword.length < 6) {
            setMessage("Password must be at least 6 characters")
            return;
        }
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || !user.email) {
            setMessage("You must login first")
            return;
        }
        const { error: loginError } =
            await supabase.auth.signInWithPassword({
                email: user.email,
                password: currentPassword
            });
        if (loginError) {
            setMessage("Current Password is Error")
            return;
        }
        const { error: updateError } = await supabase.auth.updateUser({
            password: newPassword
        })
        if (updateError) {
            setMessage(updateError.message)
        }
        await supabase
            .from("profiles")
            .update({
                password: newPassword
            })
            .eq('id', user.id);
        setCurrentPassword('');
        setNewPassword('');
        setMessage("Password updated Successfully");
    }
    return (
        <div className='w-full'>
            <h1 className='text-xl font-bold  '>Change Password</h1>
            <p className='text-gray-400 text-sm font-semibold mb-5'>Enter your current password and choose a new one </p>
            <form onSubmit={handleChangePassword}>
                <div className="relative">
                    <Lock
                        size={18}
                        className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
                    />

                    <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Current Password</label>
                    <input value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} type="password" id="currentPassword" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your passwrd' />
                </div>



                <div className="relative">
                    <Lock
                        size={18}
                        className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
                    />

                    <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >New Password</label>
                    <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" id="password" className='border border-gray-400/50  rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your passwrd' />
                    <p className='text-sm text-gray-400 mb-5 font-semibold '>Password must be at least 6 characters</p>
                </div>


                <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
            </form>
            {message && (
                <p className="text-blue-600 font-semibold text-sm mt-3">
                    {message}
                </p>
            )}

        </div>
    )
}

export default ChangePassword



// http://localhost:5173/profile-details/change-password