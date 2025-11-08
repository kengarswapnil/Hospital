import express from "express";
import { addDoctor, loginadmin,allDoctors, appointmentAdmin, appointmentCancel, adminDashboard } from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import authadmin from "../middleware/authAdmin.js";
import { changeAvailablity } from "../controllers/doctorController.js";


const adminRouter = express.Router();

adminRouter.post("/add-doctor", authadmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginadmin);
adminRouter.post('/all-doctors',authadmin,allDoctors)
adminRouter.post('/change-availability', authadmin, changeAvailablity);
adminRouter.get('/appointments',authadmin,appointmentAdmin);
adminRouter.post('/cancel-appointment',authadmin,appointmentCancel);
adminRouter.get('/dashboard',authadmin,adminDashboard)

export default adminRouter;
