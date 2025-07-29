import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/Store.ts";
import { getAllRecipient, deleteUser } from "../../../slices/UserSlice.ts";

export function Patient() {
    const dispatch = useDispatch<AppDispatch>();
    const patients = useSelector((state: RootState) => state.user.list);

    useEffect(() => {
        dispatch(getAllRecipient());
    }, [dispatch]);

    const reversedPatients = [...patients].reverse();


    const handleDeleteDonor = (email: string) => {
        if (confirm("Are you sure you want to delete this donor?")) {
            dispatch(deleteUser(email));
        }
    };


    return (
        <div className="max-w-5xl mx-auto mt-40 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                All Registered Patients ({reversedPatients.length})
            </h2>

            {reversedPatients.length > 0 ? (
                reversedPatients.map((patient, index) => (
                    <div
                        key={index}
                        className="border-b py-4 flex justify-between items-center"
                    >
                        <div>
                            <p className="text-lg font-semibold text-gray-700">
                                {patient.firstname} ({patient.email})
                            </p>
                            <p className="text-gray-600">Phone: {patient.phone}</p>
                        </div>

                        <button
                            onClick={() => handleDeleteDonor(patient.email)}
                            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No patients found.</p>
            )}
        </div>
    );
}
