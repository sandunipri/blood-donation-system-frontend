import {Link} from "react-router-dom";

export function Admin() {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/*Sidebar*/}
                <aside className="w-64 bg-white shadow-md">
                    <div className="p-6 text-xl font-bold text-red-800 border-b">Admin Panel</div>
                    <nav className="p-6 bg-white shadow-md h-full text-gray-900">
                        <ul className="space-y-4 text-base font-medium">
                            <li><Link to="#"
                                      className="block hover:text-red-600 transition duration-200">Dashboard</Link></li>
                            <li><Link to="/donor-manage" className="block hover:text-red-600 transition duration-200">Manage
                                Donors</Link></li>
                            <li><Link to="#" className="block hover:text-red-600 transition duration-200">Manage
                                Patients</Link></li>
                            <li><Link to="/hospital"
                                      className="block hover:text-red-600 transition duration-200">Hospitals</Link></li>
                            <li><Link to="#"
                                      className="block hover:text-red-600 transition duration-200">Requests</Link></li>
                            <li><Link to="#" className="block hover:text-red-600 transition duration-200">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <main className="flex-1 p-6">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Admin</h2>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button
                                    className="flex items-center justify-center gap-2 text-red-900 font-semibold border border-red-900 px-4 py-2 rounded hover:bg-red-900 hover:text-white transition duration-300"
                                >
                                    View Profile
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>

                                <button
                                    className="flex items-center justify-center gap-2 text-red-900 font-semibold border border-red-900 px-4 py-2 rounded hover:bg-red-900 hover:text-white transition duration-300"
                                >
                                    Add Admin
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>

                        </div>

                    </header>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h2 className="text-gray-500 text-sm">Total Users</h2>
                            <p className="text-2xl font-bold text-blue-700">120</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h2 className="text-gray-500 text-sm">Pending Requests</h2>
                            <p className="text-2xl font-bold text-red-600">8</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h2 className="text-gray-500 text-sm">Available Blood Units</h2>
                            <p className="text-2xl font-bold text-green-600">320</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}