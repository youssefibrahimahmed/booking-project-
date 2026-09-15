
function Loading() {
    return (
        <div className="min-h-[60vh] flex flex-col justify-center items-center gap-4">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>

            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800">
                    Loading Rooms
                </h2>
                <p className="text-gray-500 mt-1">
                    Finding the best rooms for you...
                </p>
            </div>
        </div>
    )
}

export default Loading