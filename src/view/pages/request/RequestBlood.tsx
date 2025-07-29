import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import type {BloodRequestData} from "../../../model/BloodRequestData.ts";
import {sendBloodRequest} from "../../../slices/BloodRequestSlice.ts";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useEffect} from "react";
import {getAllHospitals} from "../../../slices/HospitalSlice.ts";

export function RequestBlood() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<BloodRequestData>();

    const onSubmit = (data: BloodRequestData) => {
        dispatch(sendBloodRequest(data)).then((result) => {
            if (sendBloodRequest.fulfilled.match(result)) {
                alert("Blood request sent successfully!");
                navigate("/recipient");
            } else {
                alert("Failed to send blood request. Please try again.");
                // Optionally log the error for debugging


                console.error(result.error.message);
            }
        });
    };

    const hospitals = useSelector((state: RootState) => state.hospital.list);
    useEffect(() => {
        dispatch(getAllHospitals());
    }, [dispatch]);

    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-center gap-12 p-6 mt-40 max-w-8xl mx-auto rounded-xl shadow-lg bg-cover bg-center relative"
            style={{
                backgroundImage: "url('src/assets/images/user/img_1.png')",
            }}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl  mx-auto bg-white shadow-xl rounded-2xl pt-5 px-10 py-10 pb-5 border border-gray-100"
            >
                <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
                    Blood Request Form
                </h2>

                <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
                    {/* Name */}
                    <div className="w-full md:w-1/2">
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input
                            {...register("requesterName", {required: true})}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your full name"
                        />
                        {errors.requesterName && (
                            <p className="text-red-500 text-sm mt-1">Name is required</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            {...register("requesterEmail", {required: true})}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your email"
                        />
                        {errors.requesterEmail && (
                            <p className="text-red-500 text-sm mt-1">Email is required</p>
                        )}
                    </div>
                </div>

                {/* Hospital */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Hospital</label>
                    <select
                        {...register("hospitalEmail")}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option value="">Select a hospital</option>
                        {hospitals &&
                            hospitals.map((hospital, index) => (
                                <option key={index} value={hospital.email}>
                                    {hospital.name} ({hospital.email})
                                </option>
                            ))}
                    </select>
                    {errors.hospitalEmail && (
                        <p className="text-red-500 text-sm mt-1">Hospital email is required</p>
                    )}
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
                    {/* Blood Group */}
                    <div className="w-full md:w-1/3">
                        <label className="block text-sm font-semibold mb-2">Blood Group</label>
                        <select
                            {...register("bloodGroup", {required: true})}
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Select blood group</option>
                            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        {errors.bloodGroup && (
                            <p className="text-red-500 text-sm mt-1">Select a blood group</p>
                        )}
                    </div>

                    {/* Units Needed */}
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <label className="block text-sm font-semibold mb-2">Units Needed</label>
                        <input
                            type="number"
                            min={1}
                            {...register("unitsNeeded", {required: true})}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter number of units"
                        />
                        {errors.unitsNeeded && (
                            <p className="text-red-500 text-sm mt-1">Enter units needed</p>
                        )}
                    </div>

                    {/* Needed Date */}
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <label className="block text-sm font-semibold mb-2">Date Needed</label>
                        <input
                            type="date"
                            {...register("neededDate", {required: true})}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        {errors.neededDate && (
                            <p className="text-red-500 text-sm mt-1">Select a date</p>
                        )}
                    </div>
                </div>

                {/* Reason */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Reason</label>
                    <textarea
                        {...register("reason", {required: true})}
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Explain the reason for the request"
                    />
                    {errors.reason && (
                        <p className="text-red-500 text-sm mt-1">Reason is required</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                    Submit Blood Request
                </button>
            </form>

        </div>


    );
}
