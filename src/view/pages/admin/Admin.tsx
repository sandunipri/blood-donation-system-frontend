import { Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/Store.ts";
import {useForm} from "react-hook-form";
import type {AdminData} from "../../../model/AdminData.ts";
import { useNavigate } from "react-router-dom";
import {registerAdmin} from "../../../slices/AdminSlice.ts";
import {getBloodStockOneByOne} from "../../../slices/BloodStockSlice.ts";


export function Admin() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const { handleSubmit, register } = useForm<AdminData>();

    const admin = useSelector((state:RootState)=> state.admin);
    const navigate = useNavigate();

    const  onSubmit = (data : AdminData) => {

        dispatch(registerAdmin(data));
        console.log("DonorManage registered:", admin);
        alert("New Admin Resister in Successfull")
        setShowModal(false);
        navigate("/admin");
    }

    /*load blood stocks*/


    const bloodStock = useSelector((state: RootState) => state.bloodStock.list);

    useEffect(() => {
        dispatch(getBloodStockOneByOne());
    }, [dispatch]);



    return (
        <>
            <div className="flex h-screen mt-36 bg-gray-100">
                {/*Sidebar*/}
                <aside className="w-64 bg-white shadow-md">
                    <div className="p-6 text-xl font-bold text-red-800 border-b"></div>
                    <nav className="p-6 bg-white shadow-md h-full text-gray-900">
                        <ul className="space-y-4 text-base font-medium">
                            <li><Link to="#"
                                      className="block hover:text-red-600 transition duration-200">Dashboard</Link></li>
                            <li><Link to="/donor-manage" className="block hover:text-red-600 transition duration-200">Manage
                                Donors</Link></li>
                            <li><Link to="/patient" className="block hover:text-red-600 transition duration-200">Manage
                                Patients</Link></li>
                            <li><Link to="/hospital"
                                      className="block hover:text-red-600 transition duration-200">Hospitals</Link></li>
                            <li><Link to="/notification"
                                      className="block hover:text-red-600 transition duration-200">Requests</Link></li>

                            <button
                                className="flex items-center justify-center gap-2 text-red-900 font-semibold border border-red-900 px-4 py-2 rounded hover:bg-red-900 hover:text-white transition duration-300"
                                onClick={() => setShowModal(true)}
                            >
                                Add Admin
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </ul>
                    </nav>
                </aside>

                <main className="flex-1 p-6">
                    <header className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                            <div className="text-xl font-semibold">
                                {time.toLocaleTimeString()}
                            </div>
                        </div>

                        <div className="p-6 bg-gray-100 flex flex-row justify-between items-center rounded-lg shadow-md w-100 max-w-4xl">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Admin Page</h2>

                            <div className="flex gap-4">


                            </div>
                        </div>


                    </header>

                    {/* Stats Cards */}
                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-4 rounded-xl shadow">
                                <h2 className="text-gray-500 text-sm">Total Users</h2>
                                <p className="text-2xl font-bold text-blue-700">120</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <h2 className="text-gray-500 text-sm">Pending Requests</h2>
                                <p className="text-2xl font-bold text-red-600">8</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow">
                                <h2 className="text-gray-500 text-sm">Available Blood Units</h2>
                                <p className="text-2xl font-bold text-green-600">320</p>
                            </div>
                        </div>
                        {/*bloodStock*/}
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-red-800 mb-6">Blood Inventory</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {bloodStock.map(item => (
                                    <div
                                        key={item.bloodGroup ?? Math.random().toString()}
                                        className="bg-white shadow rounded-lg p-4 text-center border border-red-100"
                                    >
                                        <h2 className="text-xl font-semibold text-gray-700">{item.bloodGroup}</h2>
                                        <p className="text-3xl font-bold text-red-600 mt-2">{item.units}</p>
                                        <p className="text-sm text-gray-500">units available</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/*Add admin model*/}

                    {showModal && (
                        <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
                            <form
                                className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow space-y-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <h2 className="text-2xl font-bold mb-4 text-center text-red-800">Register Admin</h2>

                                <input
                                    {...register("name")}
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />

                                <input
                                    {...register("email")}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />

                                <input
                                    {...register("password")}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />

                                <input
                                    {...register("nic")}
                                    type="text"
                                    name="nic"
                                    placeholder="NIC Number"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />

                                <input
                                    {...register("phone")}
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />

                                <input {...register("role")} type="hidden" name="role" value="admin" />

                                <button
                                    type="submit"
                                    className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition"
                                >
                                    Register Admin
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="w-full mt-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    )}

                </main>

            </div>
        </>
    );
}