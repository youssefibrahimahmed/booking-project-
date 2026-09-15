import React, { useState } from 'react'
import {
  AlertCircle,
  Calendar,
  Projector,
  Plug,
  AirVent,
  ClipboardPenLine,
  Tv,
  Wifi,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

import { supabase } from '../lib/supabase';


interface RoomCardProps {
  roomId: number,
  imgUrl: string,
  roomName: string,
  pricePerHour: number,
  description: string
}

function BookingCard({ roomId, imgUrl, roomName, pricePerHour, description }: RoomCardProps) {

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleBookRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!checkIn || !checkOut) {
      setErrorMessage("Please, select check-in and check-out first")
      return;
    }
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (nights <= 0) {
      setErrorMessage("check-out date must be fter check-in date");
      return;
    }


    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setErrorMessage("Please Log-in before booking")
      return;
    }

    const { data: existingBooking, error: bookingCheckError } = await supabase
      .from("bookings")
      .select('id')
      .eq('room_id', roomId)
      .neq("status", "cancelled")
      .lt("check_in", checkOut)
      .gt("check_out", checkIn)
      .limit(1)

    if (bookingCheckError) {
      setErrorMessage(bookingCheckError.message)
      return;

    }

    if (existingBooking && existingBooking.length > 0) {
      setErrorMessage("This room is Already booked for this date");
      return;
    }

    const roomTotal = pricePerHour * nights;
    const taxes = roomTotal * 0.1;
    const totalPrice = roomTotal + taxes;

    const { error } = await supabase
      .from("bookings")
      .insert({
        room_id: roomId,
        user_id: user.id,
        check_in: checkIn,
        check_out: checkOut,
        total_price: totalPrice,
        status: "pending"
      });

    if (error) {
      console.log(error)
      setErrorMessage(error.message)
      return;
    }

    setCheckIn("");
    setCheckOut("");
    navigate('/my-bookings')
  }

  const nights =
    checkIn && checkOut ?
      Math.ceil(
        (new Date(checkOut).getTime() -
          new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24))
      : 0
  const roomTotal = pricePerHour * nights;
  const taxes = roomTotal * 0.1;
  const totalPrice = roomTotal + taxes;

  return (

    <div className='Booking-card w-full lg:w-[80%] flex-col xl:flex-row flex  xl:justify-between '>

      {/* left side */}
      <div className="left   w-full p-0 lg:p-10  pt-0">

        {/* image section */}
        <div className="img rounded-xl">
          <img src={imgUrl} alt="" className='rounded-xl' />
        </div>

        {/* roomname & price  */}
        <div className="title-price bg-white py-5 flex justify-between items-center px-3 w-full text-sm">
          <h1 className='mb-3 font-bold text-3xl'>{roomName}</h1>
          <div className='text-center items-center rounded-2xl py-2 px-3 bg-blue-400/15'>
            <p className='font-bold text-xl text-blue-600'>{pricePerHour} / <span className='text-[15px] font-semibold  text-gray-500'>night</span></p>
          </div>
        </div>

        {/* description */}
        <div className="description  px-3 bg-white ">
          <h1 className='text-2xl font-semibold '>Description</h1>
          <p className='text-gray-400 font-semibold'>{description}</p>
        </div>

        {/* facilities */}
        <div className='facilities w-full lg:max-w-6xl h-fit mx-auto p-5 bg-white mb-10 rounded-br-2xl rounded-bl-2xl '>
          <p className='font-bold'>Amenties</p>
          <div className="facilities  md:flex p-5 justify-between text-xs text-gray-400 font-semibold">
            <div className='items-center text-center gap-2 flex flex-col '>
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


      </div>
      <div className="right h-fit w-full xl:w-[70%]  p-5 bg-white rounded-xl">
        <p className='text-2xl font-bold'>Book This Room </p>
        <p className='text-gray-600 font-semibold '>Fill in datails below to complete your booking </p>
        <form className='z-100 flex flex-col mt-5 justify-center ' onSubmit={handleBookRoom}   >

          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="mail" >Check-in Date</label>
            <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} type="date" id="mail" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your email' />
          </div>

          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 "
            />

            <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="password" >Check-out Date</label>
            <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type="date" id="password" className='border border-gray-400/50 mb-5 rounded w-full p-1 text-[15px] p-2 pl-10 font-semibold' placeholder='Enter your passwrd' />
          </div>
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm mb-3">
              {errorMessage}
            </p>
          )}

          <div className='price-details bg-blue-100/70 p-3 rounded-xl'>
            <h1 className='text-xl font-semibold'>Price Details </h1>
            <div className="title-price text-gray-600 font-semibold flex justify-between items-center  w-full text-sm">
              <h1 className='mb-0  text-[15px]'>${pricePerHour} x {nights} nights   </h1>
              <div className='text-center items-center rounded-2xl py-2 px-3 '>
                <p className='  text-[15px]'>$ {roomTotal}</p>
              </div>
            </div>
            <div className="title-price text-gray-600 font-semibold flex justify-between items-center  w-full text-sm">
              <h1 className='mb-3  text-[15px]'>Taxes & Fees (10%)   </h1>
              <div className='text-center items-center rounded-2xl py-2 px-3 '>
                <p className='  text-[15px]'>$ {taxes}</p>
              </div>
            </div>
            <div className="title-price border-t border-gray-300 flex justify-between items-center  w-full text-sm">
              <h1 className='mb-3 font-bold    text-[15px]'>Total</h1>
              <div className='text-center  items-center rounded-2xl py-2 px-3 '>
                <p className='font-bold text-xl  text-blue-600'>${totalPrice}</p>

              </div>
            </div>
          </div>

          <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
        </form>
        <div className="alert bg-blue-100/70 p-3 rounded-xl text-gray-600 font-semibold flex items-center  w-full text-sm">

          <AlertCircle
            size={18}
            className=" left-3  text-gray-400 "
          />

          <p className='ml-5 w-[80%] text-[15px]'>You Can Cancel your booking up to 24 hours before check-in</p>
        </div>
      </div>
    </div>

  )

}

export default BookingCard


// http://localhost:5173/book-room/:1