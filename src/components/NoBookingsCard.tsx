import { CalendarX } from "lucide-react";
import { NavLink } from "react-router-dom";

function NoBookingsCard() {
    return (
        <div className="w-[80%] mx-auto mt-10 p-10 rounded-xl border border-gray-100 shadow-xl text-center">
            <CalendarX
                size={60}
                className="mx-auto mb-5 text-gray-400"
            />

            <h2 className="text-2xl font-bold mb-2">
                No Bookings Yet
            </h2>

            <p className="text-gray-500 font-semibold mb-5">
                You don't have any bookings yet.
            </p>

            <NavLink
                to="/rooms"
                className="inline-block rounded p-2 px-5 text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
                Browse Rooms
            </NavLink>
        </div>
    );
}

export default NoBookingsCard;