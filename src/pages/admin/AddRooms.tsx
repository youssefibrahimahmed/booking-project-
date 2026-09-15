import {  BedIcon, ChevronLeft, Dot, Highlighter, LocateIcon, LocationEditIcon, Notebook, SquareDashed, Users2Icon } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

function AddRooms() {
  const [roomName, setRoomName] = useState('')
  const [available, setAvailable] = useState('Available')
  const [roomImage, setRoomImage] = useState<File | null>(null)
  const [amenities, setAmenities] = useState('')
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [squareFeet, setSquareFeet] = useState('')
  const [capacity, setCapacity] = useState('')
  const [pricePerHour, setPricePerHour] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const handleAddRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!roomImage) {
        setErrorMessage("Please select a room image")
        return;
      }
      const fileName = `${Date.now()}_${roomImage.name}`;
      const { error: uploadError } = await supabase.storage
        .from('room-images')
        .upload(fileName, roomImage);

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data } = supabase
        .storage
        .from('room-images')
        .getPublicUrl(fileName);


      const { error } = await supabase
        .from('rooms')
        .insert({
          name: roomName,
          description: description,
          square_feet: squareFeet,
          capacity: capacity,
          price_per_hour: pricePerHour,
          address: address,
          location: location,
          amenities: amenities,
          image: data.publicUrl,
          available: available === "Available"
        })
      if (error) {
        throw new Error(errorMessage)
      }
      alert('Room added successfully!');
      navigate('/admin/rooms');
    } catch (error) {
      console.error(error)
      alert(error instanceof Error ? error.message : String(error))
    }

  }
  return (
    <div className='p-5 bg-gray-100 min-h-screen'  >
      <div className="header mb-10 flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Add New Room</p>
          <p className="text-gray-600 text-sm font-semibold" >Create a new room at your hotel system</p>
        </div>
        <div className="add-user w-fit items-center flex  px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-200/70 hover:text-blue-700 transition-all duration-300 text-sm">
          <NavLink to='/admin/rooms'> <p className='items-center flex text-blue-600 mb-3 font-semibold '><ChevronLeft className='inline' size={20} /> Back To Rooms</p></NavLink>
        </div>
      </div>
      <div className="tables flex mx-auto w-full justify-around gap-5 flex-col lg:flex-row ">
        {/* Bookings */}
        <div className="recent-users bg-white w-full rounded-xl  ">
          <div className="users p-5 mt-0 overflow-x-auto rounded-xl border border-gray-200">
            <div className="head flex items-center gap-3 mb-5">
              <BedIcon size={50} className='text-blue-600 bg-blue-100 p-2 rounded-full inline mr-2' />
              <div>
                <p className="text-2xl font-bold">Room Information</p>
                <p className="text-gray-600 text-sm font-semibold" >Fill in the details for the new room</p>
              </div>
            </div>
            <form onSubmit={handleAddRoom} >

              <div className="relative flex gap-5 flex-col w-full lg:flex-row">
                <div className='relative w-full'>
                  <BedIcon
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="roomName" >Room Name</label>
                  <input onChange={(e) => setRoomName(e.target.value)} type="text" id="roomName" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. Deluxe Room' />
                </div>

                <div className='relative w-full'>
                  <LocateIcon
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="address" >Address</label>
                  <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. Floor 3, Room 301' />
                </div>
                <div className='relative w-full'>
                  <LocationEditIcon
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="location" >Location</label>
                  <input onChange={(e) => setLocation(e.target.value)} type="text" id="location" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. Cairo, Egypt' />
                </div>
              </div>
              {/* -------------------------------------------------------------- */}
              <div className="relative flex gap-5 mt-5 flex-col w-full lg:flex-row">
                <div className='relative w-full'>
                  <Notebook
                    size={18}
                    className="absolute left-3 top-[28%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="description" >Description</label>
                  <textarea onChange={(e) => setDescription(e.target.value)} id="description" className='pl-10 border border-gray-400/50  rounded w-full  text-[15px] p-2  font-semibold h-35' placeholder='Enter a short description about the room...' />
                </div>
                <div className='relative w-full'>
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="room-image" >Room Image</label>
                  <input type="file" accept="image/*" onChange={(e) => setRoomImage(e.target.files?.[0] || null)} id="room-image" className='pl-10 border border-gray-400/50  rounded w-full  text-[15px] p-2  font-semibold h-35' />
                </div>
              </div>
              {/* ------------------------------------------------------------- */}
              <div className="relative flex gap-5 flex-col mt-5 w-full lg:flex-row">
                <div className='relative w-full'>
                  <Users2Icon
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="capacity" >Capacity</label>
                  <input onChange={(e) => setCapacity(e.target.value)} type="number" id="capacity" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. 2' />
                </div>
                <div className='relative w-full'>
                  <SquareDashed
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="squareFeet" >Size (square feet)</label>
                  <input onChange={(e) => setSquareFeet(e.target.value)} type="number" id="squareFeet" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. 200' />
                </div>

                <div className='relative w-full'>
                  <LocateIcon
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />

                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="pricePerHour" >Price per Hour (EGP)</label>
                  <input onChange={(e) => setPricePerHour(e.target.value)} type="number" id="pricePerHour" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='e.g. 500' />
                </div>
              </div>
              {/* ------------------------------------------------------------- */}
              <div className="relative flex gap-5 flex-col mt-5 w-full lg:flex-row">
                <div className='relative w-full'>
                  <Highlighter
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="amenities" >Amenities</label>
                  <input onChange={(e) => setAmenities(e.target.value)} type="text" id="amenities" className='border border-gray-400/50  rounded w-full text-[15px] p-2 pl-10 font-semibold' placeholder='WiFi, TV, etc.' />
                </div>
                <div className='relative w-full'>
                  <Dot
                    size={18}
                    className="absolute left-3 top-[70%] -translate-y-1/2 text-gray-400 "
                  />
                  <label className='block flex font-semibold text-[15px] mb-2 items-start' htmlFor="available" >Availability</label>
                  <select value={available} onChange={(e) => setAvailable(e.target.value)} id="available" className='pl-10 border border-gray-400/50  rounded w-full  text-[15px] p-2   font-semibold' >
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select></div>
              </div>

              <input type="submit" className='rounded p-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 w-full my-5' />
            </form></div>
        </div>
      </div>


    </div>

  )
}

export default AddRooms

// 20-[4]-[18]-[29]