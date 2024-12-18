import express from "express";
import {
  addFood,
  listFood,
  removeFood,
  getFoodDetails,
  getBulkFoods,
  uploadBulkFoods
} from "../controllers/foodController.js";
import multer from "multer";
import adminauthMiddleware from "../middleware/adminauth.js";

const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

foodRouter.get("/list", listFood);
foodRouter.post("/fooddetails",getFoodDetails);
foodRouter.post('/list/bulk',getBulkFoods)
foodRouter.post('/add/bulk',adminauthMiddleware,uploadBulkFoods)
foodRouter.post("/add",adminauthMiddleware, addFood);
foodRouter.post("/remove", adminauthMiddleware, removeFood);

export default foodRouter;
