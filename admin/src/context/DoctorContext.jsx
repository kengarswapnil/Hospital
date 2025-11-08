  import axios from "axios";
  import { useState } from "react";
  import { createContext } from "react";
  import { toast } from "react-toastify";
  // import { toast } from "react-hot-toast";

  export const DoctorContext = createContext();

  const DoctorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [dToken, setDToken] = useState(
      localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
    );
    const [appointments, setAppointments] = useState([]);
    const [dashData,setDashData] =  useState(false)
    const [profileData,setProfileData] = useState(false);


    const getAppointments = async () => {
      try {
        const { data } = await axios.get( backendUrl + "/api/doctor/appointments",{headers:{dtoken:dToken}});
        if (data.success) {
          setAppointments(data.appointments);
          console.log("Appointmetns",data.appointments);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };


    const completeAppointments = async(appointmentId)=>{
      try{
        const {data} = await axios.post(backendUrl + '/api/doctor/complete-appointment', {appointmentId},{headers:{dtoken:dToken}}) 
        if(data.success){
          toast.success(data.message);
          getAppointments();
        }else{
          toast.error(data.message);
        }
      }catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }

    const cancelAppointments = async(appointmentId)=>{
      try{
        const {data} = await axios.post(backendUrl + '/api/doctor/cancel-appointment',{appointmentId},{headers:{dtoken:dToken}}) 
        if(data.success){
          toast.success(data.message);
          getAppointments();
        }else{
          toast.error(data.message);
        }
      }catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }

   const getDashData = async (req , res)=>{
     try{
      const {data} = await axios.get(backendUrl + '/api/doctor/dashboard',{headers:{dtoken:dToken}})
      if(data.success){
        setDashData(data.dashData);
        console.log(data.dashData)
      }else{
        toast.error(data.message);
      }

     }catch(error){
      console.log(error);
      toast.error(error.message);
     }
   }


   const getProfileData =  async(req,res)=>{
    try{
      const {data} = await axios.get(backendUrl +'/api/doctor/profile',{headers:{dtoken:dToken}})
      if(data.success){
        setProfileData(data.profileData);
        console.log(data.profileData)
      }
    }catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
    }
   }


    const value = {
      dToken,
      setDToken,
      backendUrl,
      appointments,
      setAppointments,
      getAppointments,
      completeAppointments,cancelAppointments,
      dashData,setDashData,getDashData,
      getProfileData,setProfileData,profileData
    };

    return (
      <DoctorContext.Provider value={value}>
        {props.children}
      </DoctorContext.Provider>
    );
  };

  export default DoctorContextProvider;
