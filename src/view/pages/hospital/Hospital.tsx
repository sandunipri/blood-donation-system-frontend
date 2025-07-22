import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useForm} from "react-hook-form";
import type {HospitalData} from "../../../model/HospitalData.ts";
import {getAllHospitals, saveHospital} from "../../../slices/HospitalSlice.ts";

export function Hospital() {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getAllHospitals());
    }, [dispatch]);

    const {handleSubmit, register} = useForm<HospitalData>();

    const hospitals = useSelector((state: RootState) => state.hospital.list);

    const onSubmit = (data: HospitalData) => {
        dispatch(saveHospital(data));
        console.log("Hospital data saved:", hospitals);
        alert(
            `Hospital ${data.name} added successfully!`
        )
        setShowModal(false);
    }

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
                            <tr key={index}>
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{hospital.name}</td>
                                <td className="px-4 py-2 border">{hospital.location}</td>
                                <td className="px-4 py-2 border">{hospital.contact}</td>
                                <td className="px-4 py-2 border">
                                    {hospital.bloodStock?.map((stock, i) => (
                                        <div key={i}>{stock.bloodType}: {stock.quantity}</div>
                                    ))}
                                </td>
                                <td className="px-4 py-2 border">Actions here</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
                        <h3 className="text-lg font-bold mb-4">Add Hospital</h3>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Hospital Name"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                            <input
                                {...register("location")}
                                type="text"
                                name="location"
                                placeholder="Location"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                            <input
                                {...register("contact")}
                                type="text"
                                name="contact"
                                placeholder="Contact Number"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                            <input
                                {...register("email")}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Blood Stock
                                </label>

                                <div className="flex items-center space-x-2 mb-2">
                                    <select
                                        {...register("bloodStock.0.bloodType")}
                                        className="border border-gray-300 rounded px-2 py-1 w-32"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    <input
                                        {...register("bloodStock.0.quantity", {valueAsNumber: true})}
                                        type="number"
                                        min={0}
                                        placeholder="Quantity"
                                        className="border border-gray-300 rounded px-2 py-1 w-24"
                                    />
                                    <button
                                        type="button"
                                        className="text-sm text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:underline mt-1"
                                >
                                    + Add Blood Type
                                </button>
                            </div>

                            <div className="flex justify-end space-x-2 pt-4">
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
                </div>)}
        </div>
    );
}
