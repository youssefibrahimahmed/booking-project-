

import { useQuery } from '@tanstack/react-query'
import { RoomApi } from '../api/getRoom.api'

export const useRooms = () => {
    return useQuery({
        queryKey: ['rooms'],
        queryFn: RoomApi.getRoomApi

    })
    
}
