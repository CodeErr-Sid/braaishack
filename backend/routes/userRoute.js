import express from 'express';
import { loginUser, registerUser, logoutUser, checkLogin, forgotPassword, verifyOtp, resetPassword } from '../controllers/userController.js';
const userRouter = express.Router();
import authMiddleware from '../middleware/auth.js'

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/checklogin", authMiddleware, checkLogin)
userRouter.post("/logout", authMiddleware, logoutUser);
userRouter.post("/forgotpassword", forgotPassword);
userRouter.post("/verifyotp", verifyOtp);
userRouter.post("/resetpassword", resetPassword)

export default userRouter;