import mongoose from "mongoose";

const couponDataSchema = new mongoose.Schema({
    couponName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    couponPrice: {
        type: Number,
        required: true
    }, // Price or value of the coupon
    expirationDate: {
        type: Date,
        required: true
    }, // Expiration date of the coupon plan
});

const CouponData = mongoose.models.CouponData || mongoose.model("CouponData", couponDataSchema);
export default CouponData;
