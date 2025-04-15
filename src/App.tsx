import { useState } from 'react';
import { UserData } from './Base_Componant/Componant/User_Interface'; 
import Nav from "./Base_Componant/Componant/Nav/Nav"
import Register from "./Base_Componant/Componant/Authantcation/Register"
import Login from "./Base_Componant/Componant/Authantcation/Login"
import { Route,  Routes } from "react-router-dom"
import Dashboard from './Base_Componant/Componant/DashBoard/Dashboard';
import Home from './Base_Componant/Other_project/pages/Home';
import About from './Base_Componant/Other_project/pages/About';
import Contact from './Base_Componant/Other_project/pages/Contact';
import Services from './Base_Componant/Other_project/pages/Services';

function App() {
 const [formData, setFormData] = useState<UserData>({
        id: crypto.randomUUID(),
        username: '', // Ensure username is always initialized as a string
        email: '',
        password: '',
        confirmPassword: '',
        IsloggedIn: false,
        isAdmin: false,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

  return (
    <>
    <Nav formData={formData} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Register formData={formData} setformData={setFormData} />} /> 
      <Route path="/login" element={<Login formData={formData} setformData={setFormData} />} />
      <Route path="/dashboard" element={<Dashboard   />} />
    </Routes>
    </>
  )
}

export default App
