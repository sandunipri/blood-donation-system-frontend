import {FaTint, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useEffect, useState} from "react";
import {getAllDonors} from "../../../slices/UserSlice.ts";

export function DonorManage() {
    const dispatch = useDispatch<AppDispatch>();
    const donors = useSelector((state: RootState) => state.user.list);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        console.log("Fetching all donors...");
        dispatch(getAllDonors());
    }, [dispatch]);

    return (
        <div className="max-w-4xl mx-auto p-6 mt-40 rounded-2xl bg-white shadow-xl border border-gray-200">
            {donors && donors.length > 0 ? (
                donors.map((donor, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 py-4"
                    >
                        {/* Donor Info */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {donor.firstname} {donor.lastname}
                            </h2>
                            <p className="text-gray-600 flex items-center gap-2 mt-1">
                                <FaEnvelope className="text-red-500"/> {donor.email}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2 mt-1">
                                <FaPhoneAlt className="text-green-500"/> {donor.phone}
                            </p>
                            <p className="mt-2">
            <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
              <FaTint/> Blood Group:{" "}
                <strong>{donor.bloodGroup}</strong>
            </span>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4 md:mt-0">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Update
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                                Delete
                            </button>
                            <button
                                onClick={() => setShowModal(true)}
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                                View Record
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                                Donate
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No donors found.</p>
            )}
            {/*model for the record*/}
            <>
                {showModal && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h3 className="text-xl font-semibold mb-4">Donation Record</h3>
                            <p className="text-gray-600">Details about the donation record will go here.</p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </>

        </div>

    );
}
