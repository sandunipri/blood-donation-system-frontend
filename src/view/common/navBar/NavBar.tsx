import {Link, useLocation} from "react-router-dom";
import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
// import bgImage from "../../../assets/images/navbar/blood-g4e28dcb97_1920.jpg";
import {useEffect, useState} from "react";

type NavBarProps = {
    scrollToAbout: () => void;
    scrollToHome?: () => void;
};

export function NavBar({scrollToAbout, scrollToHome}: NavBarProps) {
    const location = useLocation();

    const [userEmail, setUsername] = useState<string | null>(null);
    const [role, setrole] = useState<string | null>(null)


    useEffect(() => {
        const storageUserName = localStorage.getItem("username")
        const storageRole = localStorage.getItem("role")
        setUsername(storageUserName)
        setrole(storageRole)
    }, [])


    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="p-2 font-sans flex justify-between items-center shadow-md">
                <div className="flex items-center  ">
                    <div>
                        <img src="/src/assets/images/navbar/img.png" alt="Logo"
                             className="h-20 w-20 object-contain rounded-full"/>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-black-800 leading-tight">
                            Blood Banking & Donation in Sri Lanka
                        </h1>
                    </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-800">
                    <div>
                        {userEmail ? (
                            <button className="bg-red-900 w-30 h-10 rounded-3xl text-white"
                                    onClick={
                                        () => {
                                            localStorage.removeItem("username");
                                            localStorage.removeItem("role");
                                            localStorage.removeItem("token");
                                            localStorage.removeItem("refreshToken");
                                        }
                                    }>
                                <Link to="/login">LOG OUT </Link>
                            </button>
                        ) : (
                            <button className="bg-red-900 w-30 h-10 rounded-3xl text-white">
                                <Link to="/login"> SIGN IN </Link>
                            </button>
                        )}

                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <hr className="border-t-2 border-gray-300 "/>

            <div className="flex justify-between items-center px-6 py-2 bg-gray-200 text-lg">
                <div className="flex space-x-6 text-2xl text-black-600">
                    <a
                        href="mailto:info@example.com"
                        className="hover:text-red-800 transition transform hover:scale-110"
                        aria-label="Email"
                    >
                        <FaEnvelope/>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-800 transition transform hover:scale-110"
                        aria-label="Twitter"
                    >
                        <FaTwitter/>
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-800 transition transform hover:scale-110"
                        aria-label="Facebook"
                    >
                        <FaFacebookF/>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-800 transition transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <FaInstagram/>
                    </a>
                </div>


                <div className="flex space-x-4 text-blue-600">
                    <ul className="flex space-x-4">

                        {location.pathname === "/" && (
                            <>
                                <li>
                                    <button
                                        onClick={() => scrollToHome?.()}
                                        className="text-gray-800 hover:underline hover:text-red-700 font-medium text-lg transition bg-transparent"
                                    >
                                        Home
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={scrollToAbout}
                                        className="text-gray-800 hover:underline hover:text-red-700 font-medium text-lg transition bg-transparent"
                                    >
                                        About
                                    </button>
                                </li>
                            </>
                        )
                        }

                        {
                            role === "admin" && (
                                <>
                                    <li><Link to="/admin/donors" className="hover:underline">DONORS</Link></li>
                                    <li><Link to="/admin/hospitals" className="hover:underline">HOSPITALS</Link></li>
                                    <li><Link to="/admin/patients" className="font-bold hover:underline">PATIENTS</Link>
                                    </li>
                                    <li><Link to="/notification" className="hover:underline">NOTIFICATIONS</Link></li>
                                    <li><Link to="/admin/settings" className="hover:underline">SETTINGS</Link></li>
                                </>
                            )
                        }
                        {
                            role === "donor" && (
                                <>
                                    <li><Link to="/donor/profile" className="hover:underline">PROFILE</Link></li>
                                    <li><Link to="/donor/contacts" className="hover:underline">CONTACTS</Link></li>
                                    <li><Link to="/donor/donors" className="font-bold hover:underline"> BLOOD DONATE</Link></li>
                                    <li><Link to="/donor/blood-basics" className="hover:underline">BLOOD BASICS</Link></li>
                                    <li><Link to="/history" className="hover:underline">HISTORY</Link></li>
                                </>
                            )
                        }
                        {
                            role === "recipient" && (
                                <>
                                    <li><Link to="/recipient/about" className="hover:underline">ABOUT</Link></li>
                                    <li><Link to="/recipient/contacts" className="hover:underline">CONTACTS</Link></li>
                                    <li><Link to="/request" className="hover:underline">REQUEST</Link></li>
                                    <li><Link to="/recipient/blood-basics" className="hover:underline">BLOOD BASICS</Link>
                                    </li>
                                    <li><Link to="/recipient/blood-bank" className="hover:underline">BLOOD BANKING AND
                                        DONATION</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}