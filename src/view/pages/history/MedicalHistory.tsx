import type {AppDispatch} from "../../../store/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getDonationRecordByEmail} from "../../../slices/DonationSlice.ts";
import type {RootReducerState} from "../../../slices/RootReducer.ts";

export function MedicalHistory() {

    const dispatch = useDispatch<AppDispatch>();

    const records = useSelector((state: RootReducerState) => state.donation.list);

    useEffect(() => {
        const userEmail = localStorage.getItem("username");;
        if (userEmail) {
            dispatch(getDonationRecordByEmail(userEmail));
        }
    }, [dispatch]);


    return (
        <>
            <div className="max-w-3xl mt-40 mx-auto p-4 bg-white rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4 text-red-600">Medical Donation History</h2>

                <div className="space-y-4">

                    {records.length > 0 ? (
                        records.map((record , index ) => (
                            <div key={index} className="p-2 border rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="font-semibold text-gray-700 text-sm leading-snug">
                                    Date: <span className="font-normal">{new Date(record.donationDate).toLocaleDateString()}</span>
                                </p>
                                <p className="font-semibold text-gray-700 text-sm leading-snug">
                                    Hospital: <span className="font-normal">{record.hospitalEmail}</span>
                                </p>
                                <p className="font-semibold text-gray-700 text-sm leading-snug">
                                    Blood Group: <span className="font-normal">{record.bloodGroup}</span>
                                </p>
                                <p className="font-semibold text-gray-700 text-sm leading-snug">
                                    Units Donated: <span className="font-normal">{record.unitsDonated}</span>
                                </p>
                                <p className="font-semibold text-gray-700 text-sm leading-snug">
                                    Status: <span className="font-normal text-green-600">Successful</span>
                                </p>
                            </div>
                        ))
                        ):(
                        <p className="text-gray-500">No donation records found.</p>
                    )}
                </div>
            </div>

        </>
    );
}

