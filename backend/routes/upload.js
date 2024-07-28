import express from "express";
const router = express.Router();
import fileUpload from "express-fileupload";
import cloudinaryConfig from "../config/cloudinaryConfig";

router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

router.post("/upload", async (req, res) => {
  try {
    const file = req.files.image;
    const result = await cloudinaryConfig.uploader.upload(file.tempFilePath);
    res.json({ success: true, url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Image upload failed" });
  }
});

export default uploadRoute;
