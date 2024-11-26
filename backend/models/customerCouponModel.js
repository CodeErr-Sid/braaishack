import mongoose from 'mongoose';

const customerCouponSchema = new mongoose.Schema({
    couponId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    giftNotes: { type: String },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    secretCode: { type: String, required: true },
    expiration: { type: Date, required: true },
    redeemed: { type: Boolean, default: false }
});

const CustomerCoupon = mongoose.model('CustomerCoupon', customerCouponSchema);

export default CustomerCoupon;
