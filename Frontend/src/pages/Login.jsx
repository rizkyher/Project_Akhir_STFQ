import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHref } from "../css/login";
import axios from "axios";
import { API_SQL } from "../utils/constant";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    function setCookie(cookieName, cookieValue) {
        document.cookie = `${cookieName}=${cookieValue};path=/`;
    }

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    function getCookie(cookieName) {
        const name = `${cookieName}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_SQL}login`, { email, password });
            setCookie('token', response.data.token);
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const validasi = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is not valid';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validasi();
        if (Object.keys(errors).length === 0) {
            Auth(e);
        } else {
            setMsg(errors);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Colored half */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#29ADB2] items-center justify-center flex-col pb-20">
                <img src="assets/images/login.png" alt="Placeholder" className="w-90 h-80" />
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
                            {msg.email && <span className="error text-red-600">{msg.email}</span>}
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
                            {msg.password && <span className="error text-red-600">{msg.password}</span>}
                        </div>
                        {msg && !msg.email && !msg.password && <span className="error text-red-600">{msg}</span>}
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-[#0766AD] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline text-center"
                                type="submit"
                            >
                                Sign In
                            </button>
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
