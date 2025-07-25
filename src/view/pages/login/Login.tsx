import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {backendApi} from "../../../api.ts";
import {getUserFromToken} from "../../../auth/auth.ts";
import type {UserData} from "../../../model/UserData.ts";
import type {AdminData} from "../../../model/AdminData.ts";

type FormData = {
    email: string;
    password: string;
    role: "admin" | "user";
};


export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmitLogin = async (data: FormData) => {
        try {
            const loginEndpoint = data.role === "admin" ? "/auth/loginAdmin" : "/auth/login";

            const response = await backendApi.post(loginEndpoint, {
                email: data.email,
                password: data.password,
            });

            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem("token", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            const user = getUserFromToken(accessToken) as UserData | AdminData;
            localStorage.setItem("username", user.email);
            localStorage.setItem("role", user.role);

            alert("Successfully logged in!");

            // Role-based navigation
            if (user.role === "donor") {
                navigate("/donor");
            } else if (user.role === "recipient") {
                navigate("/recipient");
            } else if (user.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/"); // fallback
            }

        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };
/*    const authenticateUser = async (data :FormData) => {
        try {
            const userCredentials = {
                email: data.email,
                password: data.password
            };
            const response = await backendApi.post('/auth/login', userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const user : UserData = getUserFromToken(accessToken);
            localStorage.setItem('username', user.email as string);
            localStorage.setItem('role', user.role as string);

            alert("Successfully logged in!");
        //     check the roles and navigate accordingly
            if (user.role === 'donor') {
                navigate('/donor');
            } else if (user.role === 'recipient') {
                navigate('/recipient');
            } else {
                navigate('/admin');
            }

        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
        };*/

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmitLogin)}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("email")}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-900 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-red-900 hover:text-red-800">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                {...register("password")}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-900 sm:text-sm/6"
                            />
                        </div>


                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Login as:
                            </label>
                            <div className="flex space-x-6">
                                <label className="inline-flex items-center">
                                    <input
                                        {...register("role")}
                                        type="radio"
                                        value="user"
                                        className="h-4 w-4 accent-red-900"
                                        defaultChecked
                                    />
                                    <span className="ml-2 text-gray-700 font-bold text-sm">User</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input
                                        {...register("role")}
                                        type="radio"
                                        value="admin"
                                        className="h-4 w-4 accent-red-900"
                                    />
                                    <span className="ml-2 text-gray-700 font-bold text-sm">Admin</span>
                                </label>
                            </div>
                        </div>



                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
                        >
                            Sign in
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="flex w-full justify-center rounded-md bg-red-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900 mt-3"
                        >
                            Back
                        </button>
                    </div>
                </form>

                <div className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <div className="font-semibold text-red-900 hover:text-red-800">
                        <Link to={"/register"}>Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
