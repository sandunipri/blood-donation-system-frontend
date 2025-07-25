import {Link} from "react-router-dom";
import {FaEnvelope, FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
// import bgImage from "../../../assets/images/navbar/blood-g4e28dcb97_1920.jpg";
import {useEffect, useState} from "react";


export function NavBar() {

    const [userEmail, setUsername] = useState<string|null>(null);
    const [role,setrole] = useState<string|null>(null)


    useEffect(()=>{
        const storageUserName= localStorage.getItem("username")
        const storageRole = localStorage.getItem("role")
        setUsername(storageUserName)
        setrole(storageRole)
    },[])


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
                        ):(
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
                    <ul className="flex space-x-4">
                        {
                            role === "admin" && (
                                <>
                                    <li><Link to="/admin/donors" className="hover:underline">DONORS</Link></li>
                                    <li><Link to="/admin/hospitals" className="hover:underline">HOSPITALS</Link></li>
                                    <li><Link to="/admin/patients" className="font-bold hover:underline">PATIENTS</Link></li>
                                    <li><Link to="/admin/reports" className="hover:underline">REPORTS</Link></li>
                                    <li><Link to="/admin/settings" className="hover:underline">SETTINGS</Link></li>
                                </>
                            )
                        }
                        {
                            role === "donor" && (
                                <>
                                    <li><Link to="/donor/profile" className="hover:underline">PROFILE</Link></li>
                                    <li><Link to="/donor/contacts" className="hover:underline">CONTACTS</Link></li>
                                    <li><Link to="/donor/donors" className="font-bold hover:underline">DONORS</Link></li>
                                    <li><Link to="/donor/blood-basics" className="hover:underline">BLOOD BASICS</Link></li>
                                    <li><Link to="/donor/blood-bank" className="hover:underline">BLOOD BANKING AND DONATION</Link></li>
                                </>
                            )
                        }
                        {
                            role === "recipient" && (
                                <>
                                    <li><Link to="/hospital/about" className="hover:underline">ABOUT</Link></li>
                                    <li><Link to="/hospital/contacts" className="hover:underline">CONTACTS</Link></li>
                                    <li><Link to="/hospital/request" className="hover:underline">REQUEST</Link></li>
                                    <li><Link to="/hospital/blood-basics" className="hover:underline">BLOOD BASICS</Link></li>
                                    <li><Link to="/hospital/blood-bank" className="hover:underline">BLOOD BANKING AND DONATION</Link></li>
                                </>
                            )
                        }
                    </ul >


                </div>
            </div>

         {/*   <div
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
            </div>*/}

            ,
        </div>
    );
}