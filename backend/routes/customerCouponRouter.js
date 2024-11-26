import express from 'express';
import { 
    purchaseCoupon, 
    confirmPayment, 
    redeemCoupon 
} from '../controllers/customerCouponController.js';

const customerCouponRouter = express.Router();

// Route to initiate a coupon purchase
customerCouponRouter.post('/purchase', purchaseCoupon);

// Route to confirm payment after Stripe checkout
customerCouponRouter.post('/confirm-payment', confirmPayment);

// Route to redeem a coupon using its secret code
customerCouponRouter.post('/redeem', redeemCoupon);

export default customerCouponRouter;
