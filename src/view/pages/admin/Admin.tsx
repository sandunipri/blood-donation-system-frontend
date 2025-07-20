

export function Admin() {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md">
                    <div className="p-6 text-xl font-bold text-blue-800 border-b">Admin Panel</div>
                    <nav className="p-4 space-y-4 text-gray-700">
                        <a href="#" className="block hover:text-blue-600">Dashboard</a>
                        <a href="#" className="block hover:text-blue-600">Manage Users</a>
                        <a href="#" className="block hover:text-blue-600">Hospitals</a>
                        <a href="#" className="block hover:text-blue-600">Requests</a>
                        <a href="#" className="block hover:text-blue-600">Logout</a>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-6">
                    {/* Top navbar */}
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                        <div className="text-sm text-gray-600">Welcome, Admin</div>
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