import { Link } from 'react-router-dom';
import { UserData } from '../User_Interface';
export default function Nav(props: { formData: UserData }) {
    return (
        <nav className="bg-gray-800 p-4 flex items-center">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </li>
                <li>
                    <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                </li>
            </ul>
            {props.formData.IsloggedIn ?
            <div className="ml-auto flex space-x-4">
                <p className="text-white">Welcome,{props.formData.username}</p>
                <a href="/logout" className="text-white hover:text-gray-300">Logout</a>
            </div>
            :
            <div className="ml-auto flex space-x-4">
                <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
            </div>
            }
        </nav>
    );
};

