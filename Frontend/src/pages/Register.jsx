import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom'
import { API_SQL } from "../utils/constant";

const Register = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');

    const validate = () => {
        const errors = [];
        if (!Username && !Email && !Password && !confPassword) errors.push('Isi data dengan benar.');
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (errors.length > 0) {
            setMsg(errors.join(' '));
            return;
        }
        try {
            await axios.post(API_SQL + 'register', {
                Username,
                Email,
                Password,
                confPassword,
                userType
            });
            alert('Register Success');
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div className="flex h-screen">
            <div className="hidden lg:flex lg:w-1/2 bg-[#29ADB2] items-center justify-center flex-col pb-20">
                <img src="assets/images/register.png" alt="Placeholder" className=" w-90 h-80 " />
                <p className="mt-4 font-bold text-3xl">Register</p>
            </div>
            <div className="flex w-full lg:w-1/2 items-center justify-center">
                <div className="max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-gray-700 text-center pb-20">FIQIH <span className="text-[#29ADB2]">KELUARGA</span></h2>
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">Email</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={Email}
                                placeholder="Example@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">Username</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                name="username"
                                value={Username}
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">Password</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                value={Password}
                                placeholder="**********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confPassword">Konfirmasi password</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="confPassword"
                                type="password"
                                name="confPassword"
                                value={confPassword}
                                placeholder="**********"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="userType">User Type</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="userType"
                                type="text"
                                name="userType"
                                value={userType}
                                placeholder="User Type"
                                onChange={(e) => setUserType(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-[#0766AD] hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline text-center"
                                type="submit"
                            >
                                Daftar
                            </button>
                        </div>
                        <div className="text-center">
                            {msg && <p className="text-red-500">{msg}</p>}
                            Sudah punya akun? <a href="/login" className="text-blue-500 hover:text-blue-800">Masuk!</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
                                // const [formData, setFormData] = useState({
                                //     username: '',
                                //     email: '',
                                //     password: '',
                                //     confPassword: '',
                                //     userType: ''
                                // });
                            
                                // const handleChange = (e) => {
                                //     const { name, value } = e.target;
                                //     setFormData({
                                //         ...formData,
                                //         [name]: value
                                //     });
                                // };
