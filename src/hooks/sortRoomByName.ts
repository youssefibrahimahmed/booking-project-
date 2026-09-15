import { useQuery } from "@tanstack/react-query"
import { RoomApi } from "../api/getRoom.api"

export const sortByName = () => {
    return useQuery({
        queryKey: ["sortByName"],
        queryFn: RoomApi.getRoomsOrderName
    })
}