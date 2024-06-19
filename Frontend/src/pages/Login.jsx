import React, { useState } from "react";
import { StyledHref } from "../css/login";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')

    const validasi = () => {
        const error = {}
        if (!email) {
            error.email = 'Email is required'
        }
        if (!password) {
            error.password = 'Password is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = 'Email is not valid'
        } return error
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validasi()
        if (Object.keys(error).length === 0) {
            console.log('Form submitted successfully');
        } else {
            setError(error)
        }

    }
    return (
        <div className="flex h-screen">
            {/* Colored half */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#29ADB2] items-center justify-center flex-col pb-20">
                <img src="assets/images/login.png" alt="Placeholder" className=" w-90 h-80 " />
                <p className="mt-4 font-bold text-3xl">Login</p>
            </div>
            {/* Non-colored half (Login form) */}
            <div className="flex w-full lg:w-1/2 items-center justify-center">
                <div className="max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-gray-700 text-center pb-20">FIQIH <span className="text-[#29ADB2]">KELUARGA</span></h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {error.email && <span className="error">{error.email}</span>}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="**********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error.password && <span className="error text-red-600">{error.password}</span>}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-[#0766AD] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline text-center"
                                type="button"
                            >
                                Sign In
                            </button>
                            {/* <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a> */}
                        </div>
                        <div className="text-center">
                            Belum punya akun? <StyledHref href="Register">Daftar!</StyledHref>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;