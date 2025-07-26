import bgImage from "../../../assets/images/home/background.jpg";


export function Home() {
    return (
        <div>
            <div
                className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-100 h-24 flex items-center px-8 z-10">
                    <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

                    <h2 className="relative text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-lg">
                        Patients
                    </h2>
                </div>
            </div>
        </div>
    );
}