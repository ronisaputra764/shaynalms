import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SignIn() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        const storedUser = sessionStorage.getItem("user");
        if (!storedUser) {
            setError("No registered user found. Please sign up first.");
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.email !== email || parsedUser.password !== password) {
            setError("Invalid email or password.");
            return;
        }

        // Jika berhasil
        setError("");
        navigate("/");
    };

    return (
        <div className="relative flex flex-col flex-1 p-[10px]">
            <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
                <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt="" />
            </div>

            <Navbar buttonName={'Sign Up'} link={'/sign-up'} />

            <form onSubmit={handleSubmit} className="flex flex-col w-[400px] mt-44 h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[20px] bg-[#080A2A] m-auto">
                <div>
                    <h1 className="font-bold text-[26px] leading-[39px] text-white">Welcome Back!</h1>
                    <p className="text-[#6B6C7F]">Manage your employees easily</p>
                </div>

                <hr className="border-[#262A56]" />

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                        <img src="/assets/images/icons/sms-white.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                            placeholder="Write your email address"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                        <img src="/assets/images/icons/key-white.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="true"
                            className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]"
                            placeholder="Type your secure password"
                        />
                    </div>
                    <div className="flex justify-end mt-[10px]">
                        <a href="#" className="text-sm leading-[21px] text-[#662FFF] hover:underline">Forgot Password</a>
                    </div>
                </div>

                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}

                <hr className="border-[#262A56]" />

                <button
                    type="submit"
                    className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
                >
                    Sign In to Manage
                </button>
            </form>
        </div>
    );
}
