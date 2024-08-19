import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/adminRoute.js";
import uploadRoute from "./routes/upload.js";

// app config

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173', 'https://braaishack.vercel.app'];

const corsOptions = {
  origin: "*",
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions))


// db connection
connectDB();

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api", uploadRoute);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
