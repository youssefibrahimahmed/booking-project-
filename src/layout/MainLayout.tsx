import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <>
            <div className='flex flex-col min-h-screen'>

                <Nav />
                <main className='flex-1 pt-15'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}

export default MainLayout