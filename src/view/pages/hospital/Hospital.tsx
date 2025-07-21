import { useState } from 'react';

export function Hospital() {
    const [showModal, setShowModal] = useState(false);

    const hospitals = [
        {
            id: 1,
            name: "National Hospital",
            location: "Colombo",
            contact: "011-1234567",
            bloodStock: {
                A_Positive: 10,
                B_Positive: 5,
                O_Negative: 2
            }
        },
        {
            id: 2,
            name: "Kandy General Hospital",
            location: "Kandy",
            contact: "081-7654321",
            bloodStock: {
                A_Positive: 3,
                B_Positive: 7,
                O_Negative: 4
            }
        }
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Hospital Management</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800 transition"
                    >
                        Add Hospital
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Location</th>
                            <th className="px-4 py-2 border">Contact</th>
                            <th className="px-4 py-2 border">Blood Stock</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {hospitals.map((hospital, index) => (
                            <tr key={hospital.id} className="text-gray-800">
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{hospital.name}</td>
                                <td className="px-4 py-2 border">{hospital.location}</td>
                                <td className="px-4 py-2 border">{hospital.contact}</td>
                                <td className="px-4 py-2 border text-sm">
                                    {Object.entries(hospital.bloodStock).map(([type, count]) => (
                                        <div key={type}>{type.replace("_", "+")}: {count}</div>
                                    ))}
                                </td>
                                <td className="px-4 py-2 border">
                                    <button className="text-sm text-red-900 border border-red-900 px-3 py-1 rounded hover:bg-red-900 hover:text-white transition">
                                        Update Stock
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Add Hospital</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Hospital Name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-800"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
