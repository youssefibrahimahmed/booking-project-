import { useQuery } from "@tanstack/react-query"
import { RoomApi } from "../api/getRoom.api"

export const sortByPrice = () => {
    return useQuery({
        queryKey: ["sortByPrice"],
        queryFn: RoomApi.getRoomsOrderPrice
    })
}