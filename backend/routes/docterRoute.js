import express from 'express';
import { appointmentCancel, appointmentCompleted, appointmentsDoctor, doctorDashborad, doctorProfile, doctorslist ,loginDoctor, updateDoctorProfile} from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list', doctorslist);
doctorRouter.post('/login',loginDoctor);
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor);
doctorRouter.post('/complete-appointment',authDoctor,appointmentCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashborad)
doctorRouter.get('/profile',authDoctor,doctorProfile);
doctorRouter.post('/update-profile',authDoctor, updateDoctorProfile)

export default doctorRouter;
