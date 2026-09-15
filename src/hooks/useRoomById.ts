import { useQuery } from "@tanstack/react-query"
import { RoomApi } from "../api/getRoom.api"

export const useRoomById = (id: number) => {
    return useQuery({
        queryKey: ["room", id],
        queryFn: () => RoomApi.getRoomById(id),
        enabled: !!id
    });
}