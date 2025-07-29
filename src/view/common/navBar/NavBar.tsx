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
        <div className="font-sans fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div
                className="p-4 font-sans flex justify-between items-center shadow-md bg-cover bg-center"
                style={{backgroundImage: "url('')"}}
            >
                {/*set bg-image for the nave bar size*/}

                <div className="flex items-center space-x-4">
                    <div className="p-1 bg-red-100 rounded-full shadow-md">
                        <img
                            src="/src/assets/images/navbar/img.png"
                            alt="RedPulse Logo"
                            className="h-20 w-20 object-cover rounded-full border-4 border-white"
                        />
                    </div>
                    <div>
                        <h1 className="font-roboto text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow-sm">
                            RedPulse
                        </h1>
                        <p className="text-sm text-gray-600 font-medium tracking-wide">
                            Every heartbeat counts
                        </p>
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

                        {(location.pathname === "/") && (
                            <>
                                <li>
                                    <button
                                        onClick={() => scrollToHome?.()}
                                        className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent"
                                    >
                                        Home
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={scrollToAbout}
                                        className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent"
                                    >
                                        About
                                    </button>
                                </li>
                                <li>
                                    <Link to="/contact"
                                          className="text-gray-800 hover:text-red-700 font-medium text-lg transition bg-transparent">
                                        Contact
                                    </Link>
                                </li>
                            </>
                        )
                        }

                        {
                            role === "admin" && (
                                <>
                                    <li><Link to="/donors"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">DONORS</Link>
                                    </li>
                                    <li><Link to="/hospital"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">HOSPITALS</Link>
                                    </li>
                                    <li><Link to="/patient"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">PATIENTS</Link>
                                    </li>
                                    <li><Link to="/notification"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">NOTIFICATIONS</Link>
                                    </li>
                                    <li><Link to="/admin"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">PROFILE</Link>
                                    </li>

                                </>
                            )
                        }
                        {
                            role === "donor" && (
                                <>
                                    <li><Link to="/profile"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">PROFILE</Link>
                                    </li>
                                    <li><Link to="/contact"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">CONTACTS</Link>
                                    </li>
                                    <li><Link to="/blood-basic"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">BLOOD
                                        BASICS</Link></li>
                                    <li><Link to="/history"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">HISTORY</Link>
                                    </li>
                                    <li><Link to="/about"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">ABOUT</Link>
                                    </li>

                                </>
                            )
                        }
                        {
                            role === "recipient" && (
                                <>
                                    <li><Link to="/profile"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">PROFILE</Link>
                                    </li>
                                    <li><Link to="/contact"
                                              className="hover:underlinetext-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">CONTACTS</Link>
                                    </li>
                                    <li><Link to="/request"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">REQUEST</Link>
                                    </li>
                                    <li><Link to="/blood-basic"
                                              className="text-gray-800  hover:text-red-700 font-medium text-lg transition bg-transparent">BLOOD
                                        BASICS</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}