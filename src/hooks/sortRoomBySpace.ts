import { useQuery } from "@tanstack/react-query"
import { RoomApi } from "../api/getRoom.api"

export const sortBySpace = () => {
    return useQuery({
        queryKey: ["sortBySpace"],
        queryFn: RoomApi.getRoomsOrderSpace
    })
}