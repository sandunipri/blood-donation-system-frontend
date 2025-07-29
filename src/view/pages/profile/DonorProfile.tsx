import { FaUser, FaAddressBook, FaCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/Store";
import {useEffect} from "react";
import {deleteUser, getUserProfile} from "../../../slices/UserSlice";
import {useNavigate} from "react-router-dom";

export default function ProfilePage() {
    const dispatch = useDispatch<AppDispatch>();
    const userProfile = useSelector((state: RootState) => state.user.profile);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert(`Copied "${text}" to clipboard!`);
    };

    /*user update*/


    /*user delete*/
    const handleDelete = () => {
        if (userProfile?.email && confirm("Are you sure you want to delete your profile?")) {
            dispatch(deleteUser(userProfile.email));
            navigate("/")
        }
    };

    return (
        <div className="min-h-screen mt-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center p-6">
            <div className="max-w-7xl w-full flex gap-10">
                {/* Left side - Profile display */}
                <div className="flex-1 bg-white rounded-xl shadow-xl p-8">
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl font-extrabold text-black tracking-wide">
                            {userProfile?.firstname} {userProfile?.lastname}
                        </h1>
                        <p className="text-gray-500 mt-1 uppercase tracking-widest font-medium">
                            Member since 2025
                        </p>
                    </header>

                    {/* Personal Information */}
                    <section className="mb-10">
                        <h2 className="flex items-center text-2xl font-semibold text-red-700 mb-6 gap-3">
                            <FaUser className="text-red-500 animate-pulse" />
                            Personal Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex justify-between p-4 bg-red-50 rounded-lg cursor-default hover:bg-red-100 transition">
                                <span className="font-medium text-red-800">First Name</span>
                                <span className="text-red-800 font-semibold">{userProfile?.firstname || "-"}</span>
                            </div>
                            <div className="flex justify-between p-4 bg-red-50 rounded-lg cursor-default hover:bg-red-100 transition">
                                <span className="font-medium text-red-800">Last Name</span>
                                <span className="text-red-800 font-semibold">{userProfile?.lastname || "-"}</span>
                            </div>
                            <div className="flex justify-between p-4 bg-red-50 rounded-lg cursor-default hover:bg-red-100 transition">
                                <span className="font-medium text-red-800">Blood Group</span>
                                <span className="text-red-800 font-semibold">{userProfile?.bloodGroup || "-"}</span>
                            </div>
                            <div className="flex justify-between p-4 bg-red-50 rounded-lg cursor-default hover:bg-red-100 transition">
                                <span className="font-medium text-red-800">BirthDay</span>
                                <span className="text-red-800 font-semibold">{userProfile?.dateOfBirth || "-"}</span>
                            </div>
                        </div>
                    </section>

                    {/* Contact Details */}
                    <section>
                        <h2 className="flex items-center text-2xl font-semibold text-red-700 mb-6 gap-3">
                            <FaAddressBook className="text-red-500 animate-pulse" />
                            Contact Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg cursor-default hover:bg-pink-100 transition">
                                <span className="font-medium text-pink-800">Email</span>
                                <div className="flex items-center gap-2 text-pink-900 font-semibold select-all">
                                    <span>{userProfile?.email || "-"}</span>
                                    {userProfile?.email && userProfile.email !== "-" && (
                                        <button
                                            onClick={() => copyToClipboard(userProfile.email)}
                                            aria-label="Copy Email"
                                            className="hover:text-pink-600 transition"
                                        >
                                            <FaCopy />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg cursor-default hover:bg-pink-100 transition">
                                <span className="font-medium text-pink-800">Phone</span>
                                <div className="flex items-center gap-2 text-pink-900 font-semibold select-all">
                                    <span>{userProfile?.phone || "-"}</span>
                                    {userProfile?.phone && userProfile.phone !== "-" && (
                                        <button
                                            onClick={() => copyToClipboard(userProfile.phone)}
                                            aria-label="Copy Phone"
                                            className="hover:text-pink-600 transition"
                                        >
                                            <FaCopy />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg cursor-default hover:bg-pink-100 transition">
                                <span className="font-medium text-pink-800">Address</span>
                                <span className="text-pink-900 font-semibold select-all">{userProfile?.address || "-"}</span>
                            </div>
                            <div className="mt-12 flex justify-center gap-6">
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transform hover:scale-105 transition">
                                    Delete Profile
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right side - Update Form */}
                <div className="w-96 bg-white rounded-xl shadow-xl p-8 sticky top-40 h-fit">
                    <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="firstname" className="block mb-1 font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                defaultValue={userProfile?.firstname || ""}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastname" className="block mb-1 font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                defaultValue={userProfile?.lastname || ""}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={userProfile?.email || ""}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                defaultValue={userProfile?.phone || ""}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                defaultValue={userProfile?.address || ""}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
