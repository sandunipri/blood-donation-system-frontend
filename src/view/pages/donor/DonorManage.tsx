import { FaTint, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/Store.ts";
import { useEffect } from "react";
import { getAllDonors } from "../../../slices/UserSlice.ts";

export function DonorManage() {
    const dispatch = useDispatch<AppDispatch>();
    const donors = useSelector((state: RootState) => state.user.list);

    useEffect(() => {
        console.log("Fetching all donors...");
        dispatch(getAllDonors());
    }, [dispatch]);

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 mt-40 rounded-2xl bg-white shadow-xl border border-gray-200">
            {donors && donors.length > 0 ? (
                donors.map((donor, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row gap-6 items-center border-b border-gray-100 py-4"
                    >
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {donor.firstname} {donor.lastname}
                            </h2>
                            <p className="text-gray-600 flex items-center gap-2 mt-1">
                                <FaEnvelope className="text-red-500" /> {donor.email}
                            </p>
                            <p className="text-gray-600 flex items-center gap-2 mt-1">
                                <FaPhoneAlt className="text-green-500" /> {donor.phone}
                            </p>
                            <p className="mt-2">
                                <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                                    <FaTint /> Blood Group:{" "}
                                    <strong>{donor.bloodGroup}</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No donors found.</p>
            )}
        </div>
    );
}
