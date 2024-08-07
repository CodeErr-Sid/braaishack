import express from 'express';
import { loginUser,registerUser, logoutUser } from '../controllers/userController.js';
const userRouter = express.Router();
import authMiddleware from '../middleware/auth.js'

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/logout",authMiddleware,logoutUser);

export default userRouter;