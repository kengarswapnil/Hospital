import axios from "axios";
import { createContext, useState } from "react";
import { data } from "react-router-dom";
import { toast } from "react-toastify";
export const AdminContext = createContext();

const AdmincontextProvider = (props) => {
  const [aToken, setToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );

  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashdata] = useState([]);

  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendurl + "/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        backendurl + "/api/admin/change-availability",
        { docId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      res.json({ sucess: false, message: error.message });
    }
  };

  const getAllappointment = async () => {
    try {
      const { data } = await axios.get(backendurl + "/api/admin/appointments", {
        headers: { aToken },
      });
      if (data.success) {
        setAppointments(data.appointments);
        console.log(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      res.json({ sucess: false, message: error.message });
    }
  };

  //cancel appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendurl + "/api/admin/cancel-appointment",
        { appointmentId: appointmentId },
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllappointment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  //admin dashboard
  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendurl + "/api/admin/dashboard", {
        headers:{ aToken},
      });
      if (data.success) {
        toast.success(data.message);
        setDashdata(data.dashData);
       console.log("Dashboard data:", data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setToken,
    backendurl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    getAllappointment,
    cancelAppointment,
    getDashData,
    dashData
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdmincontextProvider;
