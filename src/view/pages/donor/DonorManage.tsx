import { useState } from "react";

export function DonorManage() {
    const [donors] = useState([
        {
            id: 1,
            name: "Sanduni Priyadarshani",
            bloodGroup: "A+",
            city: "Colombo",
            contact: "076-4389984",
        },
        {
            id: 2,
            name: "Kasun Perera",
            bloodGroup: "O-",
            city: "Galle",
            contact: "071-3456789",
        },
    ]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Donor Management</h2>
                    <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800 transition">
                        Add Donor
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                        <tr className="bg-gray-100 text-left text-gray-700">
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Blood Group</th>
                            <th className="px-4 py-2 border">City</th>
                            <th className="px-4 py-2 border">Contact</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {donors.map((donor, index) => (
                            <tr key={donor.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{donor.name}</td>
                                <td className="px-4 py-2 border">{donor.bloodGroup}</td>
                                <td className="px-4 py-2 border">{donor.city}</td>
                                <td className="px-4 py-2 border">{donor.contact}</td>
                                <td className="px-4 py-2 border">
                                    <button className="text-blue-600 hover:underline mr-3">Edit</button>
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
