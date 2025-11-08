import express from 'express'
import {bookappiontment, cancelAppointment, getProfile, listAppointments, paymentRozorpay, registerUser ,updateProfile,userLogin, verifyRazorpay }from '../controllers/userController.js';
import authUser from '../middleware/authUser.js';
import upload from '../middleware/multer.js'


const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',userLogin);
userRouter.get('/get-profile',authUser,getProfile);
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookappiontment);
userRouter.get('/myappointment', authUser, listAppointments); 
userRouter.post('/cancel-appointment',authUser,cancelAppointment);
userRouter.post('/payment-razorpay',authUser,paymentRozorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)
export default userRouter;