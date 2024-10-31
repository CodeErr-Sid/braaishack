import mongoose from "mongoose";

const customerCouponSchema = new mongoose.Schema({
    couponDataId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CouponData',
        required: true
    }, // Reference to the CouponData schema (the coupon plan)
    customerEmail: {
        type: String,
        required: true
    }, // The email of the customer who bought the coupons
    numberOfCoupons: {
        type: Number,
        required: true
    }, // Number of coupons purchased
    couponCodes: [{
        code: {
            type: String,
            unique: true,
            required: true
        }, // Unique coupon code for each purchased coupon
        redeemed: {
            type: Boolean,
            default: false
        }, // Status to check if the coupon has been redeemed
        redeemedAt: {
            type: Date,
            default: null
        }, // Date and time when the coupon was redeemed
    }],
    purchaseDate: {
        type: Date,
        default: Date.now
    }, // Date when the coupons were purchased
});

const CustomerCoupon = mongoose.models.CustomerCoupon || mongoose.model("CustomerCoupon", customerCouponSchema);
export default CustomerCoupon;

