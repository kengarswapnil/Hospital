import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongdb.js";
import connectCloudinary from "./config/cloudinary.js";

import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/docterRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
console.log("🔑 Razorpay Key ID:", process.env.RAZORPAY_KEY_ID || "❌ Missing");
console.log("🔑 Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET ? "✅ Loaded" : "❌ Missing");
console.log("💰 Currency:", process.env.CURRENCY || "❌ Missing");

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <--- add this
app.use(cors());

// API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send(`Website is running`);
});

app.listen(port, () => {
  console.log("Server running at", port);
});
