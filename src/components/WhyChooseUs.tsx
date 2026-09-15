import { FaBed, FaBolt, FaMoneyBillWave, FaStar } from "react-icons/fa";
import WhyChooseUsCards from './WhyChooseUsCards';
function WhyChooseUs() {
    const cardData = [
        {
            title: "Luxury Rooms",
            desc: "Modern rooms designed for comfort and relaxation.",
            icon: FaBed
        },
        {
            title: "Fast Booking",
            desc: "Book your room in less than a minute.",
            icon: FaBolt
        },
        {
            title: "Best Prices",
            desc: "Affordable prices with premium quality.",
            icon: FaMoneyBillWave
        },
        {
            title: "Top Rated",
            desc: "Trusted by hundreds of happy guests.",
            icon: FaStar
        }

    ]
    return (
        <div className='text-center max-w-6xl  p-3 mx-auto rounded-xl shadow-2xl my-20 border border-gray-100'>
            <p className='text-3xl font-bold mb-3 mt-5'>Why Choose RoomBook</p>
            <p className='text-gray-500 mb-15'>We provide the best experience for your comfortable stay.</p>

            <div className='grid grid-cols-1 items-center w-full md:grid-cols-4 gap-6 mb-10'>

                {
                    cardData.map((card) => (
                        <WhyChooseUsCards
                            title={card.title}
                            desc={card.desc}
                            icon={card.icon}

                        />
                    ))
                }

            </div>

        </div>
    )
}

export default WhyChooseUs