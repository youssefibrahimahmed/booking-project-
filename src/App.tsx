import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/client/Home'
import Login from './pages/client/Login'
import Dashboard from './pages/admin/Dashboard'
import Register from './pages/client/Register'
import RoomDetails from './pages/client/RoomDetails'
import MainLayout from './layout/MainLayout'
import Rooms from './pages/client/Rooms'
import MyBookings from './pages/client/MyBookings'
import Users from './pages/admin/Users'
import Bookings from './pages/admin/Bookings'
import AddRooms from './pages/admin/AddRooms'
import EditRooms from './pages/admin/EditRooms'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* client page */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          {/* admin pages */}
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/bookings' element={<Bookings />} />
          <Route path='/admin/add-room' element={<AddRooms />} />
          <Route path='/admin/edit-room' element={<EditRooms />} />

        </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
