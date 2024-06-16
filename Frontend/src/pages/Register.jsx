import React, { useState } from "react";
import { StyledHref } from "../css/login";
import { API_SQL } from "../utils/constant";
import axios from "axios";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confPassword: '',
    })
    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_SQL + 'register', {
                Username: username,
                Email: email,
                Password: password,
                confPassword: confPassword
            })
            alert('Register Success')
        } catch (error) {
            if (error.response) {
                console.log(error.response.data)
            }
        }
    }
    return (
        <div className="flex h-screen">
            {/* Colored half */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#29ADB2] items-center justify-center flex-col pb-20">
                <img src="assets/images/register.png" alt="Placeholder" className=" w-90 h-80 " />
                <p className="mt-4 font-bold text-3xl">Register</p>
            </div>
            {/* Non-colored half (Login form) */}
            <div className="flex w-full lg:w-1/2 items-center justify-center">
                <div className="max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-gray-700 text-center pb-20">FIQIH <span className="text-[#29ADB2]">KELUARGA</span></h2>
                    <form className="space-y-3" onSubmit={handleSubmit}>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Example@gmail.com"
                                onChange={handleChange}

                            />

                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                value={formData.username}
                                placeholder="Username"
                                onChange={handleChange}

                            />

                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="**********"
                                onChange={handleChange}

                            />

                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                                Konfirmasi password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                type="password"
                                name="confPassword"
                                value={formData.confPassword}
                                placeholder="**********"
                                onChange={handleChange}

                            />

                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-[#0766AD] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline text-center"
                                type="button"
                            >
                                Daftar
                            </button>
                            {/* <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a> */}
                        </div>
                        <div className="text-center">
                            Sudah punya akun? <StyledHref href="">Masuk!</StyledHref>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;