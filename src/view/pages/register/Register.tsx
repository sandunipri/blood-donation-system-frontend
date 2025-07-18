import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/images/login/background.jpg";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../slices/UserSlice.ts";
import {useForm} from "react-hook-form";
import type {UserData} from "../../../model/UserData.ts";

type UserProps = {
    data : UserData
}

export function Register({data}: UserProps) {

    const dispatch = useDispatch<AppDispatch>();
    const { handleSubmit, register } = useForm<UserData>();

    const user = useSelector((state:RootState)=> state.user);

    const  onSubmit = (data : UserData) => {
        dispatch(registerUser(data));
        console.log("User registered:", user);
    }

    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-end items-center bg-cover bg-center"
             style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="transform w-[900px] p-6 rounded-md shadow-md ">
            <div className="">
                <div>
                    <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                        Create an account
                    </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            {...register("firstname")}
                            id="firstname"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                        <input
                            {...register("lastname")}
                            id="lastname"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        /></div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            {...register("email")}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                        <input
                            {...register("password")}
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            {...register("nic")}
                            id="nic"
                            type="text"
                            name="nic"
                            placeholder="NIC Number"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                        <input
                            {...register("phone")}
                            id = "phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />

                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            {...register("bloodGroup")}
                            id="bloodGroup"
                            type="text"
                            name="bloodGroup"
                            placeholder="Blood Group (e.g. A+)"
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                        <select
                            {...register("role")}
                            id="role"
                            name="role"
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        >
                            <option value="donor">Donor</option>
                            <option value="recipient">Recipient</option>
                            <option value="hospital">Hospital</option>
                        </select>

                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <select
                            {...register("gender")}
                            id="gender"
                            name="gender"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <input
                            {...register("dateOfBirth")}
                            id="dateOfBirth"
                            type="date"
                            name="dateOfBirth"
                            required
                            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                        />
                    </div>

                    <textarea
                        {...register("address")}
                        id="address"
                        name="address"
                        placeholder="Address"
                        required
                        className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-900"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-red-900 px-4 py-2 text-white font-semibold hover:bg-red-800 transition"
                    >
                        Register
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full mt-2 rounded-md border border-red-900 px-4 py-2 text-red-900 font-semibold hover:bg-red-100 transition"
                    >
                        Back to Home
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}