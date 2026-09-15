import heroImage from '../assets/hero-image.png'
import { NavLink } from 'react-router-dom'

function HeroSection() {
    return (
        <div className='bg-cover h-screen  bg-center bg-no-repeat' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='bg-black/75 w-full h-full '>
                <div className="content flex p-15 flex-col justify-center  relative h-full">
                    <h1 className='text-white text-4xl mb-5 font-bold'>Book Your Perfect Stay</h1>
                    <p className='text-white text-lg'>Find luxury rooms with the best prices </p>
                    <p className='text-white text-lg'>and book in less then a minute </p>

                    <div className="buttons flex gap-6 mt-6">
                        <button className='hover:bg-blue-800 bg-blue-600 p-2 font-semibold rounded text-white transition duration-300'>
                            <NavLink to='/rooms'>Book Now</NavLink>
                        </button>
                        <button className='p-2 hover:bg-black text-white border rounded  transition duration-300'>
                            <NavLink to='/rooms'>Explore Rooms</NavLink>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection