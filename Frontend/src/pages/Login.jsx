import React from "react";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";

const Login = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row space-y-10 md:space-y-md:space-x-160  items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="h-full bg-[#29ADB2]">
                <img
                    src="assets/images/login.png"
                    alt="Sample image"
                />
            </div>

            <div className="md:w-1/3 max-w-sm">
                <div className="text-center md:text-center">
                    <label className="mr-1 ">FIQIH <span className="text-[#29ADB2]">KELUARGA</span></label>
                </div>
                {/* <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">

                </div> */}
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Password"
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <a
                        className=" hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-center">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-10 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don&apos;t have an account?{" "}
                    <a
                        className="text-red-600 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;