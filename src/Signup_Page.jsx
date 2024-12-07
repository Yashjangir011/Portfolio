import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup_Page = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        alert('Account created successfully!');
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        });
    };

    const navigate = useNavigate();

    function handleClick(){
        navigate('/');
    }

    function handleClick_2(){
        navigate('/login');
    }
    
    return (
        <div>
            {/* Jordan logo header */}
            <div className="absolute top-6 left-6">
                <img 
                    src="/images/jordan_logo.png" 
                    alt="Jordan Logo" 
                    className="w-16 h-auto cursor-pointer"
                    onClick={handleClick}
                />
            </div>

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl">
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="mt-6 text-4xl font-chakra font-bold text-gray-900">
                            Create Account
                        </h2>
                        <p className="mt-2 text-sm font-playwrite text-gray-600">
                            Join our community of sneaker enthusiasts
                        </p>
                    </div>

                    {/* Signup Form */}
                    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div>
                            <input
                                name="fullName"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Full Name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Email Address"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <input
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Username"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <input
                                name="phoneNumber"
                                type="tel"
                                required
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Phone Number"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="appearance-none relative block w-full px-3 py-3 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                                focus:z-10 sm:text-sm font-chakra"
                                placeholder="Confirm Password"
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 font-playwrite">
                                I agree to the Terms and Conditions
                            </label>
                        </div>

                        {/* Signup Button */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
                                text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                                transition-colors duration-200 font-chakra"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Login link */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600 font-playwrite">
                                Already have an account?{' '}
                                <a href="#" className="font-medium text-black hover:text-gray-800" onClick={handleClick_2}>
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup_Page;
