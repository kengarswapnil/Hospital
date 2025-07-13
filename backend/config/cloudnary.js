import { v2 as cloudinary } from "cloudnary";

const connectCloudinary = (async = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secert_key: process.env.CLOUDINARY_SECRET_KEY,
  });
});

export default connectCloudinary;