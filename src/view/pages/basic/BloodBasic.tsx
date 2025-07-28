import donateImage from "../../../assets/images/user/img.png"
import bloodDropImage from "../../../assets/images/user/background-03.jpg";

export function BloodBasic() {
    return (
        <div className="bg-white py-16 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-700 mb-4">Why Donate Blood?</h2>
                    <p className="text-gray-600 text-lg">
                        Blood donation is a simple act that saves lives. Learn the importance, process, and facts behind it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Image */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src={donateImage} alt="Blood Donation" className="w-full h-80 object-cover" />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Lifesaving Impact</h3>
                        <p className="text-gray-700 text-base mb-4">
                            Every two seconds, someone needs blood. Donating blood ensures hospitals have enough supply for surgeries, cancer treatments, trauma care, and more.
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            A single donation can save up to three lives. It takes just 10–15 minutes of your time, but its effect is lifelong.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Content */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Donate?</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Age between 18–60 years</li>
                            <li>Weight above 50kg</li>
                            <li>Good general health at the time of donation</li>
                            <li>No major surgeries in the past 6 months</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src={bloodDropImage} alt="Eligibility to Donate Blood" className="w-full h-80 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
