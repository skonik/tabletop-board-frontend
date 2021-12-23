
export default function Header() {
    return (
        <div className="header" >

            <nav className="py-2 md:py-4" style={{background: "#28293D", }}>
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <a href="#" className="font-bold text-xl text-indigo-600">TB</a>
                        <button
                            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                            id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Create Game Board</a>
                        <a href="#"
                           className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Find Game 🎲</a>
                        <a href="#"
                           className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About 🎩</a>
                        <a href="#"
                           className="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                        <a href="#"
                           className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                    </div>

                </div>

            </nav>

            <div className="py-6 md:py-12" style={{background: "#1C1C27"}}>
                <div className="container px-4 mx-auto">

                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="text-3xl md:text-2xl text-white font-medium mb-2">Find players for your tabletop game and meet new friends
                            </h1>
                        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get Started
                        </button>
                    </div>


                </div>
            </div>

        </div>

    )
}

