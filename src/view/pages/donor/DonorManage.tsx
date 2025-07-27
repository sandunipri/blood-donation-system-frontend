import {FaTint, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useEffect, useState} from "react";
import {getAllDonors} from "../../../slices/UserSlice.ts";
import {getDonationRecordByEmail, saveDonationRecord} from "../../../slices/DonationSlice.ts";
import type {DonationData} from "../../../model/DonationData.ts";
import {useForm} from "react-hook-form";

export function DonorManage() {
    const dispatch = useDispatch<AppDispatch>();
    /*get donor list*/
    const donors = useSelector((state: RootState) => state.user.list);


    /*get donor record*/
    const [showModal, setShowModal] = useState(false);
    const donationRecords = useSelector((state: RootState) => state.donation.list);
    const [selectedDonorEmail, setSelectedDonorEmail] = useState("");
    const viewDonationRecord = async (email: string) => {
        setSelectedDonorEmail(email);
        setShowModal(true)
        await dispatch(getDonationRecordByEmail(email));
    };
    useEffect(() => {
        console.log("Fetching all donors...");
        dispatch(getAllDonors());
    }, [dispatch]);


    /*get donate*/
    const {handleSubmit, register} = useForm<DonationData>();
    const [showDonateModal, setShowDonateModal] = useState(false);
    const [selectedDonateDonor, setSelectedDonateDonor] = useState<any | null>(null);
    const onSubmit = async (data: DonationData) => {
        if (!selectedDonateDonor) return;

        const completeData: DonationData = {
            ...data,
            donorEmail: selectedDonateDonor.email,
            bloodGroup: selectedDonateDonor.bloodGroup,
        };

        try {
            await dispatch(saveDonationRecord(completeData)).unwrap(); // if using createAsyncThunk
            alert("Donation record saved successfully!");
            setShowDonateModal(false);
            setSelectedDonateDonor(null);
        } catch (error) {
            alert("Failed to save donation record. Please try again.");
        }
    };



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
                                onClick={() => viewDonationRecord(donor.email)}
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                                View Record
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedDonateDonor(donor);
                                    setShowDonateModal(true);
                                }}
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                                Donate
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No donors found.</p>
            )}
            {/*model for the record*/}
            <>{showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-2xl relative">
                        <h3 className="text-2xl font-bold text-red-600 mb-6 border-b pb-2">Donation History</h3>

                        <div className="max-h-96 overflow-y-auto">
                            {(() => {
                                const filteredRecords = donationRecords.filter(
                                    (record) => record.donorEmail === selectedDonorEmail
                                );
                                return filteredRecords.length > 0 ? (
                                    filteredRecords.map((record, index) => (
                                        <div
                                            key={index}
                                            className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-gray-50"
                                        >
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                                <p><span
                                                    className="font-semibold">Donor Email:</span> {record.donorEmail}
                                                </p>
                                                <p><span
                                                    className="font-semibold">Hospital Email:</span> {record.hospitalEmail}
                                                </p>
                                                <p><span
                                                    className="font-semibold">Blood Group:</span> {record.bloodGroup}
                                                </p>
                                                <p><span
                                                    className="font-semibold">Units Donated:</span> {record.unitsDonated} Units
                                                </p>
                                                <p><span
                                                    className="font-semibold">Donation Date:</span> {new Date(record.donationDate).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center">No donation records available.</p>
                                );
                            })()}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                            >
                                Close
                            </button>
                            <button
                                /* onClick={() => handleDownload()} */
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}

            </>

            {/*model for the donate*/}
            <>
                {showDonateModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg relative">
                            <h3 className="text-2xl font-bold text-green-600 mb-6 border-b pb-2">Make a Donation</h3>

                            <form onSubmit={handleSubmit(onSubmit)}
                                  className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hospital Email</label>
                                    <input
                                        {...register("hospitalEmail")}
                                        type="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Units to Donate</label>
                                    <input
                                        {...register("unitsDonated")}
                                        type="number"
                                        min="1"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Date</label>
                                    <input
                                        {...register("donationDate")}
                                        type="date"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    />
                                </div>

                                <div className="flex justify-end gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowDonateModal(false);
                                            setSelectedDonateDonor(null);
                                        }}
                                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button

                                        type="submit"
                                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </>

        </div>

    );
}
