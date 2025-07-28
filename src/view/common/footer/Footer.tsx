export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                {/* About Section */}
                <div className="space-y-3">
                    <h3 className="text-red-500 font-bold text-lg">ABOUT LIFE BLOOD</h3>
                    <p>
                        Welcome to <strong>RedPulse</strong>, where every donation saves lives.
                        Our mission is to connect donors with patients in need through a secure,
                        compassionate, and reliable platform. Whether you’re giving or receiving,
                        we ensure safety, dignity, and care every step of the way.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                    <h3 className="text-red-500 font-bold text-lg">CONTACT INFORMATION</h3>
                    <p>Operating Hours: Mon - Sat, 8AM - 6PM</p>
                    <p>Address: No 1/365, Mudduwa Rd, Rathnapura</p>
                    <p>Telephone: +94 76 2396 306</p>
                    <p>WhatsApp: +94 76 4389 984</p>
                    <p>Email: donationblood414@gmail.com</p>
                </div>

                {/* Overview Section */}
                <div className="space-y-3">
                    <h3 className="text-red-500 font-bold text-lg">OVERVIEW</h3>
                    <p>
                        RedPulse is more than a donation system—it's a movement of hope and
                        healing. We streamline the process of blood donation and requesting, ensuring
                        that lifesaving connections are made swiftly and securely. Join us to be a part
                        of something bigger—where compassion meets action.
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-gray-400 text-xs mt-10 border-t border-gray-700 pt-4">
                © 2025 Life Blood. All rights reserved.
            </p>
        </footer>
    );
}
