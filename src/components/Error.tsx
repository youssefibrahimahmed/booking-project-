
function Error() {
    return (
        <div className="min-h-[60vh] flex flex-col justify-center items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-5">
                <span className="text-4xl">!</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Something went wrong
            </h2>

            <p className="text-gray-500 text-center max-w-md">
                We couldn't load the rooms right now. Please try again later.
            </p>
        </div>
    )
}

export default Error