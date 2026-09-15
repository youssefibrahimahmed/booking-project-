import { MapPin, Clock, Users, Ruler, CalendarCheck, ArrowRight, Smartphone } from "lucide-react";
import {
    Projector,
    Plug,
    AirVent,
    ClipboardPenLine,
    Tv,
    Wifi
} from "lucide-react";
import { NavLink, useParams } from 'react-router-dom';
import { useRoomById } from '../hooks/useRoomById';
import Loading from './Loading';
import Error from './Error';


function GetRoomDetails() {

    const { id } = useParams();

    const roomId = Number(id)

    const { data: room, isLoading, isError } = useRoomById(roomId);

    if (isLoading) return <Loading />

    if (isError) return <Error />

    return (
        <>
            <div className='max-w-6xl h-fit mx-auto p-5 bg-white mb-10 rounded-2xl  md:flex'>
                <div className="picSection md:w-1/2 shrink-0 pr-5">
                    <img className='w-full object-cover rounded-2xl' src={room.image} alt="" />
                </div>
                <div className="dataSection md:w-1/2 min-w-0">
                    <div className="header mb-5 flex justify-between items-center">
                        <p className='font-bold text-2xl'>{room.name}</p>
                        <div className='text-center items-center rounded-2xl py-2 px-3 bg-blue-400/15'>
                            <p className='font-bold text-blue-600'>{room.price_per_hour}</p>
                            <p className='text-[10px] text-gray-500'>per hour</p>
                        </div>
                    </div>
                    <div className="basics ">
                        <p className='flex mb-5 items-strat'>
                            <span className='w-35 shrink-0 font-semibold items-center'> <MapPin className='inline mr-2' size={18} />Address</span>
                            <span className=' text-gray-500 font-semibold text-sm'>{room.address}</span>
                        </p>
                        <p className='flex  mb-5 items-strat items-center'>
                            <span className='w-35 shrink-0 font-semibold'> <Clock className='inline mr-2' size={18} />Description</span>
                            <span className=' text-gray-500 font-semibold text-sm'>{room.description}</span>

                        </p>
                        <p className='flex mb-5 items-strat'>
                            <span className='w-35 shrink-0 font-semibold'> <CalendarCheck className='inline mr-2' size={18} />Availability</span>
                            <span className=' text-gray-500 font-semibold text-sm'>{room.available}</span>
                        </p>
                        <p className='flex mb-5 items-strat'>
                            <span className='w-35 shrink-0 font-semibold'> <Users className='inline mr-2' size={18} />Capacity</span>
                            <span className=' text-gray-500 font-semibold text-sm'>{room.capacity}</span>
                        </p>
                        <p className='flex mb-5 items-strat'>
                            <span className='w-35 shrink-0 font-semibold'><Ruler className='inline mr-2' size={18} />Square Feet</span>
                            <span className=' text-gray-500 font-semibold text-sm'>{room.square_feet}</span>
                        </p>

                    </div>
                    <div className="button rounded py-3 text-white text-center bg-blue-600 hover:bg-blue-700 transition duration-300 ">
                        <NavLink to={`/book-room/${id}`}>Book This Room    <ArrowRight className='inline' size={20} /></NavLink>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl h-fit mx-auto p-5 bg-white mb-10 rounded-2xl '>
                <p className='font-bold'>Amenties</p>
                <div className="facilities md:flex p-5 justify-between text-xs text-gray-400 font-semibold">
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <Wifi className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Wi-Fi</p>
                    </div>
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <Tv className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Smart TV</p>
                    </div>
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <ClipboardPenLine className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Whiteboard</p>
                    </div>
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <AirVent className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Air Conditioning</p>
                    </div>
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <Plug className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Power Outlets</p>
                    </div>
                    <div className='items-center text-center gap-2 flex flex-col'>
                        <Projector className='text-blue-500 bg-blue-400/15 p-2 rounded-[50%] font-bold' size={40} />
                        <p>Projector</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetRoomDetails