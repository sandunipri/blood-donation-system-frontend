import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaHeartbeat, FaRegSmile, FaTint } from "react-icons/fa";
import bgImage from "../../../assets/images/home/background-image-02.jpg";
import bgAboutImage from "../../../assets/images/home/GBF-work2.jpg";
import {NavBar} from "../../common/navBar/NavBar.tsx";


export function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <NavBar scrollToAbout={scrollToAbout} scrollToHome={scrollToHome} />

            {/* Home Section */}
            <div
                ref={homeRef}
                className="w-full bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    minHeight: "100vh",
                }}
            >
                <div className="absolute inset-0 flex items-center mt-50 justify-end px-4 z-10 text-center">
                    <div className="text-white space-y-5 max-w-2xl">
                        <h1 className="font-inter text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                            Every Drop is a Gift of Life
                        </h1>
                        <p className="font-roboto text-lg md:text-xl font-medium drop-shadow">
                            Join our mission to save lives through blood donation in Sri Lanka.
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/register"
                                className="inline-block mt-4 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                            >
                                Become a Donor
                            </Link>
                            <button
                                onClick={scrollToAbout}
                                className="inline-block mt-4 bg-white text-red-700 hover:text-white hover:bg-red-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                            >
                                Learn About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div ref={aboutRef} className="relative">

                <div className="relative h-[10vh] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center text-center px-4">
                        <h1 className="font-robotoCondensed text-4xl md:text-5xl text-black font-bold drop-shadow-lg">
                            About Our Mission
                        </h1>
                    </div>
                </div>

                {/* 4 Feature Cards Section */}
                <div className="max-w-7xl mx-auto py-16 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <FaHeartbeat className="text-red-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Save Lives</h3>
                        <p className="text-gray-600">Every donation has the power to save up to 3 lives.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <FaTint className="text-blue-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Blood for All</h3>
                        <p className="text-gray-600">We aim to provide safe and accessible blood to everyone in need.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Volunteer Support</h3>
                        <p className="text-gray-600">Join our team of volunteers making a difference every day.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                        <FaRegSmile className="text-yellow-500 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                        <p className="text-gray-600">Together we build healthier and more caring communities.</p>
                    </div>
                </div>
            </div>

           {/*describe with image*/}
            <div>
                <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="font-inter text-3xl md:text-4xl font-bold mb-4">Join Our Blood Donation Campaign</h2>
                        <p className="font-roboto text-lg text-gray-700 mb-6">
                            Your blood donation can make a significant difference in the lives of those in need. Join us in our mission to save lives and strengthen our community.
                        </p>
                        <Link
                            to="/login"
                            className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                        >
                            Sign Up Now
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img src={bgAboutImage} alt="Blood Donation" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>

            </div>
        </div>
    );
}
