import React from 'react'
import Home from '../pages/Home.jsx'
import Announcements from '../pages/Announcements.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import Clubs from '../pages/Clubs.jsx'
import Vision from '../pages/Vision.jsx'
import Faculty from '../pages/Faculty.jsx'
import Gallery from '../pages/Gallery.jsx'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (

        <nav className="bg-gray-800 rounded-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-semibold text-lg">
                            Department Of CSE
                        </Link>
                    </div>
                    <div className="flex">
                        <Link
                            to="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/clubs"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Clubs
                        </Link>
                        <Link
                            to="/vision"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Vision
                        </Link>
                        <Link
                            to="/faculty"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Faculty
                        </Link>


                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar