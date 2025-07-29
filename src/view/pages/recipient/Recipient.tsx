import {FaTint, FaHandsHelping, FaHeartbeat} from "react-icons/fa";
import donorImg from "../../../assets/images/user/images.jpeg";
import recipientImg from "../../../assets/images/user/images2.jpeg";

export default function DonorAbout() {
    return (
        <div className="min-h-screen bg-gradient-to-br mt-40 from-red-50 via-pink-50 to-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-extrabold text-red-600 mb-4">
                    Donate Blood, Save Lives !!
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Every drop of blood you donate can give someone another chance at life. Learn how to donate or
                    request blood and become a hero today!
                </p>
            </div>

            {/* Video Section */}
            <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg mb-12">
                <iframe
                    className="w-full h-96"
                    src="https://www.youtube.com/embed/y5PJs0_1aFU"
                    title="Blood Donation Awareness"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            {/* Sections for Donor and Recipient */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Donor Section */}
                <div
                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${recipientImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2 className="text-3xl font-bold text-red-500 mb-4 flex items-center gap-2">
                        <FaTint /> Become a Donor
                    </h2>
                    <ul className="text-left text-gray-700 space-y-3">
                        <li>Be at least 18 years old and in good health.</li>
                        <li>Eat a healthy meal before donating blood.</li>
                        <li>Stay hydrated before and after the donation.</li>
                        <li>You can donate every 56 days (8 weeks).</li>
                    </ul>
                </div>


                {/* Recipient Section */}
                <div
                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${donorImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2 className="text-3xl font-bold text-red-500 mb-4 flex items-center gap-2">
                        <FaHandsHelping /> Request Blood
                    </h2>
                    <ul className="text-left text-gray-700 space-y-3">
                        <li>Provide your name, hospital, and required blood type.</li>
                        <li>Contact nearby donors or hospitals immediately.</li>
                        <li>Use trusted blood bank services or platforms.</li>
                        <li>Keep emergency contacts ready for urgent needs.</li>
                    </ul>
                </div>

            </div>

            {/* Awareness Section */}
            <div
                className="mt-16 bg-gradient-to-r from-red-900 to-black text-white py-12 px-6 rounded-xl shadow-lg text-center">
                <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
                    <FaHeartbeat className="animate-pulse"/> Why Blood Donation Matters
                </h2>
                <p className="text-lg max-w-3xl mx-auto">
                    Every 2 seconds, someone needs blood. Your donation can save mothers during childbirth, children
                    with cancer, accident victims, and countless others in need of transfusions.
                    Together, we can make a difference!
                </p>
            </div>
        </div>
    );
}
