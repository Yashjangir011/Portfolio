// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login_Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        alert(`username ${username} password ${password}`);
        setUsername('');
        setPassword('');
    };

    const navigate = useNavigate();

    function handleClick(){
        navigate('/');
    }

    function handleClick_2(){
        navigate('/signup');
    }
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            {/* Logo */}
            <div className="absolute top-6 left-6">
                <img 
                    src="/images/jordan_logo.png" 
                    alt="Jordan Logo" 
                    className="w-16 h-auto cursor-pointer"
                    onClick={handleClick}
                />
            </div>
            
            {/* Login Form Container */}
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-chakra font-bold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm font-playwrite text-gray-600">
                        Sign in to access your account
                    </p>
                </div>
                
                {/* Login Form */}
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {/* Remember me and Forgot password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-playwrite">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-black hover:text-gray-800 font-playwrite">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
                            text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                            transition-colors duration-200 font-chakra"
                        >
                            Sign in
                        </button>
                    </div>

                    {/* Sign up link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600 font-playwrite">
                            Don't have an account?{' '}
                            <a href="#" className="font-medium text-black hover:text-gray-800" onClick={handleClick_2}>
                                Sign up now
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login_Page;