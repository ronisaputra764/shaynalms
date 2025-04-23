import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SignUp() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const userData = { name, email, password };
        sessionStorage.setItem('user', JSON.stringify(userData));

        navigate('/sign-in');
    };

    return (
        <div className="relative flex flex-col flex-1 p-[10px]">
            <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
                <img
                    src="assets/images/backgrounds/background-glow.png"
                    className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
                    alt=""
                />
            </div>

            <Navbar buttonName={'Sign In'} link={'/sign-in'} />

            <div className="flex items-center justify-center gap-[109px] mt-44 my-auto">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[20px] bg-[#080A2A]"
                >
                    <div>
                        <h2 className="font-bold text-[26px] leading-[39px] text-white">Sign Up</h2>
                        <p className="text-[#6B6C7F]">Manage your employees easily</p>
                    </div>

                    <hr className="border-[#262A56]" />

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <img src="assets/images/icons/user-octagon-white.svg" className="w-6 h-6" alt="icon" />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                                placeholder="Write your complete name"
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <img src="assets/images/icons/sms-white.svg" className="w-6 h-6" alt="icon" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                                placeholder="Write your email address"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <img src="assets/images/icons/key-white.svg" className="w-6 h-6" alt="icon" />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="true"
                                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                                placeholder="Type your secure password"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <hr className="border-[#262A56]" />
                    <button
                        type="submit"
                        className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
                    >
                        Sign Up Now
                    </button>
                </form>

                <div className="flex flex-col gap-[30px]">
                    <h1 className="font-extrabold text-[46px] leading-[69px] text-white">
                        Sign Up &amp; Enhance <br /> Employees Skills
                    </h1>
                    <p className="text-lg leading-[32px] text-white">
                        We deliver robust features to anyone <br /> unconditionally so they can grow bigger.
                    </p>
                </div>
            </div>
        </div>
    );
}

