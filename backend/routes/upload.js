import express from "express";
const router = express.Router();
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadRoute = express.Router();

uploadRoute.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

uploadRoute.post("/upload", async (req, res) => {
  try {
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    res.json({ success: true, url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Image upload failed" });
  }
});

export default uploadRoute;
