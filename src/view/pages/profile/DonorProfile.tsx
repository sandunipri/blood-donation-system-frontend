import { FaUser, FaAddressBook, FaCopy } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/Store";
import { useEffect } from "react";
import { getUserProfile } from "../../../slices/UserSlice";

export default function ProfilePage() {
    const dispatch = useDispatch<AppDispatch>();
    const userProfile = useSelector((state: RootState) => state.user.profile);
    const error = useSelector((state: RootState) => state.user.error);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert(`Copied "${text}" to clipboard!`);
    };

    if (!userProfile && !error) {
        return <div className="text-center mt-40 text-lg">Loading profile...</div>;
    }

    if (error) {
        return <div className="text-center mt-40 text-red-500">Error: {error}</div>;
    }

    const personalInfo = [
        { label: "First Name", value: userProfile?.firstname || "-" },
        { label: "Last Name", value: userProfile?.lastname || "-" },
        { label: "Gender", value: userProfile?.gender || "-" },
        { label: "NIC", value: userProfile?.nic || "-" },
        { label: "Blood Group", value: userProfile?.bloodGroup || "-" },
        { label: "Role", value: userProfile?.role || "-" },
        { label: "Date of Birth", value: userProfile?.dateOfBirth?.split("T")[0] || "-" },
    ];

    const contactInfo = [
        { label: "Email", value: userProfile?.email || "-" },
        { label: "Phone", value: userProfile?.phone || "-" },
        { label: "Address", value: userProfile?.address || "-" },
    ];

    return (
        <div className="min-h-screen mt-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-8">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-indigo-600 tracking-wide">
                        {userProfile?.firstname} {userProfile?.lastname}
                    </h1>
                    <p className="text-gray-500 mt-1 uppercase tracking-widest font-medium">
                        Member since in 2025
                    </p>
                </header>

                {/* Personal Information Section */}
                <section className="mb-10">
                    <h2 className="flex items-center text-2xl font-semibold text-purple-700 mb-6 gap-3">
                        <FaUser className="text-purple-500 animate-pulse" />
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {personalInfo.map(({ label, value }) => (
                            <div
                                key={label}
                                className="flex justify-between p-4 bg-purple-50 rounded-lg cursor-default hover:bg-purple-100 transition"
                            >
                                <span className="font-medium text-purple-800">{label}</span>
                                <span className="text-purple-900 font-semibold">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Information Section */}
                <section>
                    <h2 className="flex items-center text-2xl font-semibold text-pink-700 mb-6 gap-3">
                        <FaAddressBook className="text-pink-500 animate-pulse" />
                        Contact Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contactInfo.map(({ label, value }) => (
                            <div
                                key={label}
                                className="flex justify-between items-center p-4 bg-pink-50 rounded-lg cursor-default hover:bg-pink-100 transition"
                            >
                                <span className="font-medium text-pink-800">{label}</span>
                                <div className="flex items-center gap-2 text-pink-900 font-semibold select-all">
                                    <span>{value}</span>
                                    {(label === "Email" || label === "Phone") && value !== "-" && (
                                        <button
                                            onClick={() => copyToClipboard(value)}
                                            aria-label={`Copy ${label}`}
                                            className="hover:text-pink-600 transition"
                                        >
                                            <FaCopy />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Action Buttons */}
                <div className="mt-12 flex justify-center gap-6">
                    <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition">
                        Update Profile
                    </button>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transform hover:scale-105 transition">
                        Delete Profile
                    </button>
                </div>
            </div>
        </div>
    );
}
