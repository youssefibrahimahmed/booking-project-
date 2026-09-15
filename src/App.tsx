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
import BookRooms from './pages/client/BookRooms'
import ProfileLayout from './layout/ProfileLayout'
import ProfileDetails from './components/ProfileDetails'
import ChangePassword from './components/ChangePassword'
import AdminLayout from './layout/AdminLayout'
import AdminRooms from './pages/admin/AdminRooms'
import AddNewUser from './pages/admin/AddNewUser'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* client page */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/book-room/:id' element={<BookRooms />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          <Route path="/profile-details/" element={<ProfileLayout />}>

            <Route index element={<ProfileDetails />} />


            <Route path="change-password/" element={<ChangePassword />} />


          </Route>

        </Route >

          {/* admin pages */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/bookings' element={<Bookings />} />
            <Route path='/admin/rooms' element={<AdminRooms />} />
            <Route path='/admin/add-room' element={<AddRooms />} />
            <Route path='/admin/add-user' element={<AddNewUser />} />

          </Route >


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
