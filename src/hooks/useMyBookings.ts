import { useQuery } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'

export const useMyBookings = () => {
    return useQuery({
        queryKey: ['my-bookings'],
        queryFn: async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                throw new Error("User is not logged-in");
            }
            const { data, error } = await supabase
                .from("bookings")
                .select(`
            id,
            check_in,
            check_out,
            total_price,
            status,
            room_id,
            rooms(
            id,
            image,
            name
            )
            `)
                .eq("user_id", user.id)
                .order("created_at", { ascending: false })
            if (error) {
                throw error
            }
            console.log("BOOKINGS:", data);
            return data
        }

    });
}

export default useMyBookings