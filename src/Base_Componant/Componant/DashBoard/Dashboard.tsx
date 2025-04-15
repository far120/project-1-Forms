import { Link } from 'react-router-dom';
import Data from '../Data/Data';
import  { useState } from 'react';
export default function Dashboard() {
    const [data, setData] = useState(Data);

    const handleDelete = (id: string) => {
        const updatedData = data.filter((user) => user.id !== id);
        setData(updatedData);
        console.log("Updated Data:", updatedData);
    };

    const handleEdit = (id: string) => {
        const userToEdit = data.find((user) => user.id === id);
        if (userToEdit) {
            const newUsername = prompt("Enter new username:", userToEdit.username);
            const newEmail = prompt("Enter new email:", userToEdit.email);
            if (newUsername && newEmail) {
                const updatedData = data.map((user) =>
                    user.id === id ? { ...user, username: newUsername, email: newEmail } : user
                );
                setData(updatedData);
                console.log("Edited User:", { ...userToEdit, username: newUsername, email: newEmail });
            }
        }
    };

    const handleView = (id: string) => {
        const userToView = data.find((user) => user.id === id);
        if (userToView) {
            alert(`Viewing User:\n\nUsername: ${userToView.username}\nEmail: ${userToView.email}`);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>
            <div className="w-full max-w-6xl overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-4 px-6 border-b text-left">Username</th>
                            <th className="py-4 px-6 border-b text-left">Email</th>
                            <th className="py-4 px-6 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="py-4 px-6 border-b text-gray-800">{user.username}</td>
                                <td className="py-4 px-6 border-b text-gray-800">{user.email}</td>
                                <td className="py-4 px-6 border-b space-x-2 flex flex-wrap">
                                    <button
                                        onClick={() => handleView(user.id)}
                                        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/register">
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600 transition duration-200 shadow-md">
                        Add User
                    </button>
                </Link>
            </div>
        </div>
    );
};

