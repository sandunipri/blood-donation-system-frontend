import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { BloodRequestData } from "../../../model/BloodRequestData.ts";
import { sendBloodRequest } from "../../../slices/BloodRequestSlice.ts";
import type { AppDispatch } from "../../../store/Store.ts";
import Swal from "sweetalert2";

export function RequestBlood() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BloodRequestData>();

    const onSubmit = (data: BloodRequestData) => {
        dispatch(sendBloodRequest(data)).then((result) => {
            if (sendBloodRequest.fulfilled.match(result)) {
                Swal.fire("Success", "Blood request sent successfully", "success");
                navigate("/recipient");
            } else {
                Swal.fire("Error", "Blood request failed", "error");
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mt-50  mx-auto p-6 bg-white rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold mb-4">Blood Request Form</h2>

            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    {...register("requesterName", { required: true })}
                    className="w-full border p-2 rounded"
                />
                {errors.requesterName && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    {...register("requesterEmail", { required: true })}
                    className="w-full border p-2 rounded"
                />
                {errors.requesterEmail && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Hospital Email</label>
                <input
                    type="email"
                    {...register("hospitalEmail", { required: true })}
                    className="w-full border p-2 rounded"
                />
                {errors.hospitalEmail && <p className="text-red-500 text-sm">Hospital email is required</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Blood Group</label>
                <select
                    {...register("bloodGroup", { required: true })}
                    className="w-full border p-2 rounded"
                >
                    <option value="">Select</option>
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                {errors.bloodGroup && <p className="text-red-500 text-sm">Select a blood group</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Units Needed</label>
                <input
                    type="number"
                    min={1}
                    {...register("unitsNeeded", { required: true })}
                    className="w-full border p-2 rounded"
                />
                {errors.unitsNeeded && <p className="text-red-500 text-sm">Enter units needed</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Reason</label>
                <textarea
                    {...register("reason", { required: true })}
                    className="w-full border p-2 rounded"
                ></textarea>
                {errors.reason && <p className="text-red-500 text-sm">Reason is required</p>}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Needed Date</label>
                <input
                    type="date"
                    {...register("neededDate", { required: true })}
                    className="w-full border p-2 rounded"
                />
                {errors.neededDate && <p className="text-red-500 text-sm">Select a date</p>}
            </div>

            <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Submit Request
            </button>
        </form>
    );
}
