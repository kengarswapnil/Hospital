import { useContext } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import AllAppointment from "./Admin/AllAppointment";
import Doctorlist from "./Admin/Doctorlist";
import AddDotors from "./Admin/AddDotors";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import DoctorAppointment from "./Doctor/DoctorAppointment";
import DoctorProfile from "./Doctor/DoctorProfile";

function App() {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);
  return aToken || dToken ? (
    <div className="bg -[#F8F9FD]">
      <ToastContainer></ToastContainer>
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          {/* Admin Router */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointment />} />
          <Route path="/add-doctor" element={<AddDotors />} />
          <Route path="/doctor-list" element={<Doctorlist />} />

          {/* Doctor Router */}
          <Route
            path="/doctor-dashboard"
            element={<DoctorDashboard></DoctorDashboard>}
          />
          <Route
            path="/doctor-appointments"
            element={<DoctorAppointment />}
          />
          <Route
            path="/doctor-profile"
            element={<DoctorProfile></DoctorProfile>}
          />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login></Login>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
