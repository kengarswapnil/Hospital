import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Contact from "./pages/Contact";
import Docter from "./pages/Docter";
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import Myprofile from './pages/Myprofile'
import { Routes, Route } from "react-router-dom"; 
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctors" element={<Docter />}></Route>
        <Route path="/doctors/:speciality" element={<Docter />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/my-profile" element={<Myprofile />}></Route>
        <Route path="/myappointment" element={<MyAppointment />}></Route>
        <Route path="/appointment/:docId" element={<Appointment />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
