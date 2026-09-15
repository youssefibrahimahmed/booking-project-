import { supabase } from "../lib/supabase";
import type { Room } from "../dto/room.dto";


export const RoomApi = {
    getRoomApi: async (): Promise<Room[]> => {
        const { data, error } = await supabase
            .from("rooms")
            .select("*")

        if (error) throw error;
        return data;

    },
    getRoomById: async (id: number): Promise<Room> => {
        const { data, error } = await supabase
            .from("rooms")
            .select("*")
            .eq("id", id)
            .single();
        if (error) throw error
        return data
    },
    getRoomsOrderName: async (): Promise<Room[]> => {
        const { data, error } = await supabase
            .from("rooms")
            .select("*")
            .order("name", { ascending: true })
        if (error) throw error
        return data
    },
    getRoomsOrderPrice: async (): Promise<Room[]> => {
        const { data, error } = await supabase
            .from("rooms")
            .select("*")
            .order("price_per_hour", { ascending: true })
        if (error) throw error
        return data
    },
    getRoomsOrderSpace: async (): Promise<Room[]> => {
        const { data, error } = await supabase
            .from("rooms")
            .select("*")
            .order("square_feet", { ascending: true })
        if (error) throw error
        return data
    }
}