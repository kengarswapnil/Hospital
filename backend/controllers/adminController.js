import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
// import { json } from "express";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";


//API for adding doctors
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      degree,
      speciality,
      experience,
      about,
      available,
      fees,
      address,
    } = req.body;
    
    const imageFile = req.file;

    //checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "missing Details" });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }

    //validating Strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter strong password",
      });
    }

    //hashing docter password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //upload image cloudinary
    const imageuplaod = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageurl = imageuplaod.secure_url;

    const doctorData = {
      name,
      email,
      available,
      image: imageurl,
      password: hashedpassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Docter Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

//API for admin login

const loginadmin = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: err.message });
  }
};

//Api to sdmin controllers list
const appointmentAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api to cancel appiontment
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    //releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e != slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//api to get admin dashboard data for admin panel
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointment = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      users: users.length,
      appointments: appointment.length, 
      patients: appointment.length,
      latestAppointments: appointment.reverse().slice(0, 5),
    };
    res.json({
      success: true,
      dashData
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};




export {
  addDoctor,
  loginadmin,
  allDoctors,
  appointmentAdmin,
  appointmentCancel,
  adminDashboard,
};
