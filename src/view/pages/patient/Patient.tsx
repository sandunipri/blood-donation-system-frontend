import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/Store.ts";
import { getAllRecipient } from "../../../slices/UserSlice.ts";

export function Patient() {
    const dispatch = useDispatch<AppDispatch>();
    const patients = useSelector((state: RootState) => state.user.list);

    useEffect(() => {
        dispatch(getAllRecipient());
    }, [dispatch]);

    const reversedPatients = [...patients].reverse();

    return (
        <div className="max-w-5xl mx-auto mt-40 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                All Registered Patients ({reversedPatients.length})
            </h2>

            {reversedPatients.length > 0 ? (
                reversedPatients.map((patient, index) => (
                    <div key={index} className="border-b py-4">
                        <p className="text-lg font-semibold text-gray-700">
                            {patient.firstname} ({patient.email})
                        </p>
                        <p className="text-gray-600">Phone: {patient.phone}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No patients found.</p>
            )}
        </div>
    );
}
