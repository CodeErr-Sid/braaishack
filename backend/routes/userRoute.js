import express from 'express';
import { loginUser,registerUser, logoutUser, checkLogin } from '../controllers/userController.js';
const userRouter = express.Router();
import authMiddleware from '../middleware/auth.js'

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/checklogin",checkLogin)
userRouter.post("/logout",authMiddleware,logoutUser);

export default userRouter;