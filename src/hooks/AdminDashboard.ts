import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

export const AdminDashboard = () => {
    return useQuery({
        queryKey: ['admin-dashboard'],
        queryFn: async () => {
            // total users
            const { count: totalUsers, error: usersError } = await supabase
                .from('profiles')
                .select('*', { count: 'exact', head: true })
            if (usersError) {
                throw new Error(usersError.message)
            }
            // total rooms
            const { count: totalRooms, error: roomsError } = await supabase
                .from('rooms')
                .select('*', { count: 'exact', head: true })
            if (roomsError) {
                throw new Error(roomsError.message)
            }

            // total bookings
            const { count: totalBookings, error: bookingsError } = await supabase
                .from('bookings')
                .select('*', { count: 'exact', head: true })
            if (bookingsError) {
                throw new Error(bookingsError.message)
            }


            // total checked-in bookings
            const { count: totalCheckedIns, error: checkedInsError } = await supabase
                .from('bookings')
                .select('*', { count: 'exact', head: true })
                .gte('check_in', new Date().toISOString())

            if (checkedInsError) {
                throw new Error(checkedInsError.message)
            }


            // recent bookings
            const { data: recentBookings, error: recentBookingsError } = await supabase
                .from('bookings')
                .select(`
                    id,
                    check_in,
                    check_out,
                    total_price,
                    status,
                    profiles (
                    full_name
                    ),
                    rooms (
                    name
                    )
                    `)
                .order('created_at', { ascending: false })
                .limit(5)
            if (recentBookingsError) {
                throw new Error(recentBookingsError.message)
            }

            //all bookings
            const { data: allBookings, error: allBookingsError } = await supabase
                .from('bookings')
                .select(`
                    id,
                    room_id,
                    check_in,
                    check_out,
                    total_price,
                    status,
                    profiles(
                    full_name,
                    email
                    ),
                    rooms (
                    name
                    )
                    `)
                .order('created_at', { ascending: false })
            if (allBookingsError) {
                throw new Error(allBookingsError.message)
            }
            const bookings = allBookings as any[]
            console.log('ALL BOOKINGS:', allBookings)
            console.log('FIRST PROFILE:', allBookings?.[0]?.profiles)

            // all Rooms 
            const { data: allRooms, error: allRoomsError } = await supabase
                .from('rooms')
                .select('*')
            if (allRoomsError) {
                throw new Error(allRoomsError.message)
            }
            // recent users
            const { data: recentUsers, error: recentUsersError } = await supabase
                .from('profiles')
                .select(`
                    id,
                    full_name,
                    role,
                    created_at
                    `)
                .order('created_at', { ascending: false })
                .limit(5)
            if (recentUsersError) {
                throw new Error(recentUsersError.message)
            }

            const { data: allUsers, error: allUsersError } = await supabase
                .from('profiles')
                .select('*')
            console.log("ALL USERS:", allUsers)
            if (allUsersError) {
                throw new Error(allUsersError.message)
            }
            return {
                allUsers: allUsers ?? [],
                totalUsers: totalUsers ?? 0,
                totalRooms: totalRooms ?? 0,
                totalBookings: totalBookings ?? 0,
                totalCheckedIns: totalCheckedIns ?? 0,
                recentBookings: recentBookings ?? [],
                allBookings: bookings ?? [],
                recentUsers: recentUsers ?? [],
                allRooms: allRooms ?? []
            }

        }

    })
}   