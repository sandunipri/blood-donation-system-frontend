import {Link} from "react-router-dom";
import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import bgImage from "../../../assets/images/navbar/blood-g4e28dcb97_1920.jpg";


export function NavBar() {
    return (
        <div>
            <div className=" p-2 font-sans  flex justify-between items-center shadow-md">
                <div className="flex items-center  ">
                    <div>
                        <img src="/src/assets/images/navbar/img.png" alt="Logo"
                             className="h-20 w-20 object-contain rounded-full"/>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">BLOOD BANKING AND DONATION IN SRI LANKA</h1>
                    </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-800">
                    <div>
                        <button className="bg-red-900 w-30 h-10 rounded-3xl text-white">
                            <Link to="/login"> SIGN IN </Link>
                        </button>
                    </div>
                    <div>
                        <button className="bg-red-900 w-30 h-10 rounded-3xl text-white">
                            <Link to="/register"> REGISTER </Link>
                        </button>
                    </div>
                </div>


            </div>
            <hr className="border-t-2 border-gray-300 "/>

            <div className="flex justify-between items-center px-6 py-2 bg-gray-200 text-lg">
                <div className="flex space-x-4 text-blue-600 ">
                    <a href="mailto:info@example.com" className="hover:text-blue-600">
                        <FaEnvelope/>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">
                        <FaTwitter/>
                    </a>
                    <a href="https://facebook.com" target="_blank" className="hover:text-blue-700">
                        <FaFacebookF/>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
                        <FaInstagram/>
                    </a>
                </div>
                <div className="flex space-x-4 text-blue-600">
                    <span className="hover:underline cursor-pointer">EDUCATION</span>
                    <span className="font-bold hover:underline cursor-pointer">PATIENTS</span>
                    <span className="hover:underline cursor-pointer">BLOOD BASICS</span>
                    <span className="hover:underline cursor-pointer">BLOOD BANKING AND DONATION</span>
                </div>
            </div>
            {/*         <nav className="navbar bg-red-800 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-4">
                            <li className="hover:text-gray-400"><Link to="/">Home</Link></li>
                            <li className="hover:text-gray-400"><Link to="/about">About</Link></li>
                            <li className="hover:text-gray-400"><Link to="/contact">Contact</Link></li>
                            <li className="hover:text-gray-400"><Link to="/shoppingCart">ShoppingCart</Link></li>
                        </ul>

                    </div>

                </div>
            </nav>*/}

            <div
                className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-100 h-24 flex items-center px-8 z-10">
                    <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

                    <h2 className="relative text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-lg">
                        Patients
                    </h2>
                </div>
            </div>

            ,
        </div>
    );
}