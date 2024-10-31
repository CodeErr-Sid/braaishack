import express from 'express';
import adminauth from '../middleware/adminauth.js'
import { addCouponData, deleteCouponData, listCouponData } from '../controllers/couponDataController.js';
import { addCustomerCoupon, listCustomerCoupons, verifyCoupon } from '../controllers/customerCouponController.js';

const couponRouter = express.Router();

// coupon data
couponRouter.post("/create", adminauth, addCouponData);
couponRouter.get("/list", adminauth, listCouponData);
couponRouter.delete("/delete", adminauth, deleteCouponData);

// customer coupon
couponRouter.post("/customer/create", addCustomerCoupon);
couponRouter.get("/customer/get", listCustomerCoupons);
couponRouter.post("/customer/redeem", adminauth, verifyCoupon);




export default couponRouter;