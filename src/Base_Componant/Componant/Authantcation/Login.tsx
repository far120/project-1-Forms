import React, { useState } from 'react';
import { UserData } from '../User_Interface'; 
import { Props } from '../User_Interface';
import Data from '../Data/Data';
export default function Login(props: Props) {
    const { formData, setformData } = props;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors: string[] = [];
        if (!formData.email.trim()) {
            errors.push("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.push("Email is invalid.");
        }
        if (!formData.password) {
            errors.push("Password is required.");
        } else if (formData.password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }
        return errors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }
        if(Data.some(user => user.email === formData.email && user.password === formData.password)) {
            setformData((prevData) => ({
                ...prevData,
                IsloggedIn: true,
            }));
            alert("Login successful!");
        }
        else {
            alert("Invalid email or password.");
            return;
        }    
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>
            </form>
        </div>
    );
};
