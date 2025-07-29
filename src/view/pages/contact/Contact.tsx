import bgImg from "../../../assets/images/home/360_F_137309034_4oK5BoYqUc7sUoNor1ltGW0PAYNzExK9.jpg";

export function Contact() {

    return (
        <div
            className="max-w-8xl mx-auto mt-40 p-6 rounded-lg flex flex-col md:flex-row gap-10 bg-cover bg-center bg-no-repeat shadow-lg"
            style={{
                backgroundImage: `url(${bgImg})`,
            }}
        >
            {/* Add a semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-opacity-40 rounded-lg pointer-events-none"></div>

            {/* Instructions section */}
            <div className="md:w-1/2 flex flex-col justify-center px-4">
            </div>

            {/* Contact form section */}
            <div className="md:w-1/2 text-white px-30">
                <h2 className="text-3xl font-bold text-red-700 mb-6 text-white text-center md:text-left">Contact Us</h2>
                <form  className="space-y-6">
                    <div>
                        <label className="block mb-1 font-medium ">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium ">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium ">Message</label>
                        <textarea
                            name="message"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                            rows={5}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black hover:bg-red-800 text-white font-semibold px-6 mx-10 py-2 rounded-md transition"
                    >
                        Send Message
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        type="submit"
                        className="bg-black hover:bg-red-800 text-white font-semibold px-6 py-2 rounded-md transition"
                    >
                        Back to Home

                    </button>

                </form>
            </div>
        </div>
    );
}
