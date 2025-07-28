import {useRef} from "react";
import {Link} from "react-router-dom";
import {FaHandsHelping, FaHeartbeat, FaRegSmile, FaTint} from "react-icons/fa";
/*
import bgImage from "../../../assets/images/home/background-image-02.jpg";
*/
import bgImage from "../../../assets/images/home/img_1.png";
import bgAboutImage from "../../../assets/images/home/GBF-work2.jpg";
import saveLivesImg from "../../../assets/images/home/save-lives-img.jpg";
import bloodImg from "../../../assets/images/home/Blood-img.jpg";
import VolunteerImg from "../../../assets/images/home/Volunteer-Support-img.jpg";
import CommunityImg from "../../../assets/images/home/Community Impact.jpeg";
import {NavBar} from "../../common/navBar/NavBar.tsx";


export function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div>
            <NavBar scrollToAbout={scrollToAbout} scrollToHome={scrollToHome}/>

            {/* Home Section */}
            <div
                ref={homeRef}
                className="w-full bg-cover mt-30 bg-center bg-no-repeat relative scroll-mt-50"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    minHeight: "100vh",
                }}
            >
                <div className="font-sans absolute inset-0 flex items-center mt-50 justify-end px-4 z-10 text-center">
                    <div className="text-white space-y-5 max-w-2xl">
                        <h1 className="font-sans text-3xl md:text-5xl font-extrabold drop-shadow-lg">
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
            <div ref={aboutRef} className="relative scroll-mt-50">

                <div className="relative mt-20 w-full bg-white bg-opacity-60 py-16 px-4 text-center">
                    <div
                        className="absolute inset-0 bg-white bg-opacity-60 flex flex-col items-center justify-center text-center px-4 py-12">
                        <h1 className="font-robotoCondensed text-4xl md:text-5xl text-black font-bold drop-shadow-lg">
                            About Us
                        </h1>

                        <p className="text-black text-lg mt-10 max-w-7xl">
                            <span className="font-semibold">We are dedicated to</span><br/>
                            <span className="text-3xl text-black font-bold">“</span>
                            Creating a compassionate community where every blood donation becomes a lifeline.
                            Our mission is to ensure a safe, reliable, and accessible blood supply for those in critical
                            need.
                            Through education, outreach, and volunteer empowerment, we strive to inspire generosity,
                            save lives,
                            and build a healthier tomorrow—one drop at a time.
                            <span className="text-3xl text-black font-bold">”</span>
                        </p>
                    </div>
                </div>

                {/* 4 Feature Cards Section */}
                <div className=" max-w-7xl mx-auto py-16 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

                    <div
                        className="font-serif bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-r from-red-50 to-yellow-50">
                        <img
                            src={saveLivesImg}
                            alt="Donate Blood"
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-6 text-center">
                            <FaHeartbeat className="text-red-600 text-3xl mx-auto mb-4"/>
                            <h3 className="font-sans text-xl font-bold mb-2">Save Lives</h3>
                            <p className="font-serif text-gray-600">
                                Every blood donation has the incredible power to save up to three lives, bringing hope
                                and healing to families in need.
                            </p>
                        </div>
                    </div>

                    <div
                        className="font-serif bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-r from-red-50 to-yellow-50">
                        <img
                            src={bloodImg}
                            alt="Donate Blood"
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-6 text-center">
                            <FaTint className="text-blue-600 text-3xl mx-auto mb-4"/>
                            <h3 className="font-sans text-xl font-bold mb-2">Blood For All</h3>
                            <p className="font-serif text-gray-600">
                                We are committed to ensuring that safe, reliable, and accessible blood is available for
                                every patient, anytime and anywhere.
                            </p>
                        </div>
                    </div>

                    <div
                        className="font-serif bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-r from-red-50 to-yellow-50">
                        <img
                            src={VolunteerImg}
                            alt="Donate Blood"
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-6 text-center">
                            <FaHandsHelping className="text-green-600 text-3xl mx-auto mb-4"/>
                            <h3 className="font-sans text-xl font-bold mb-2">Volunteer Support</h3>
                            <p className="font-serif text-gray-600">
                                Become part of our passionate team of volunteers who work tirelessly to support donors
                                and recipients alike every single day.
                            </p>
                        </div>
                    </div>

                    <div
                        className="font-serif bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition bg-gradient-to-r from-red-50 to-yellow-50">
                        <img
                            src={CommunityImg}
                            alt="Donate Blood"
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-6 text-center">
                            <FaRegSmile className="text-yellow-500 text-3xl mx-auto mb-4"/>
                            <h3 className="font-sans text-xl font-bold mb-2">Community Impact</h3>
                            <p className="font-serif text-gray-600">
                                Together, we build healthier, stronger communities where generosity and care transform
                                lives and inspire lasting change.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/*describe with image*/}
            <div className="max-w-7xl mx-auto py-20 px-6 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl shadow-xl">
                <div
                    className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 mb-8 md:mb-0 align-center md:text-left">
                        <h1 className="font-robotoCondensed text-4xl md:text-5xl text-center md:text-left text-red-900 font-bold mb-4">
                            Why Donate Blood?
                        </h1>
                        <p className="font-roboto text-lg text-gray-700 mb-6">
                            Donating blood is a simple yet powerful act that can save lives. Every donation helps
                            patients in need, from accident victims to those undergoing surgeries or battling chronic
                            illnesses. Your contribution can make a real difference in our community.
                        </p>
                        <h2 className="font-inter text-red-900 text-3xl md:text-4xl font-bold mb-4">Join Our Blood
                            Donation
                            Campaign</h2>
                        <p className="font-roboto text-lg text-gray-700 mb-6">
                            Your blood donation can make a significant difference in the lives of those in need. Join us
                            in our mission to save lives and strengthen our community.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={bgAboutImage}
                            alt="Blood Donation"
                            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
