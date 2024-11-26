import express from 'express';
import { getAllCoupons, createCoupon } from '../controllers/couponController.js';

const couponRouter = express.Router();

// Route to fetch all coupons
couponRouter.get('/', getAllCoupons);

// Route to create a new coupon (Admin functionality)
couponRouter.post('/', createCoupon);

export default couponRouter;
