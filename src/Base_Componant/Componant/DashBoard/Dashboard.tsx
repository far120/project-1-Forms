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
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-3 px-4 border-b text-left">Username</th>
                        <th className="py-3 px-4 border-b text-left">Email</th>
                        <th className="py-3 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="py-3 px-4 border-b">{user.username}</td>
                            <td className="py-3 px-4 border-b">{user.email}</td>
                            <td className="py-3 px-4 border-b space-x-2">
                                <button
                                    onClick={() => handleView(user.id)}
                                    className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => handleEdit(user.id)}
                                    className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-200"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-6">
                <Link to="/register">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200">
                        Add User
                    </button>
                </Link>
            </div>
        </div>
    );
};

