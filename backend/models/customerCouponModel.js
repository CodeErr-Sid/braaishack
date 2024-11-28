import mongoose from 'mongoose';

const secretCodeSchema = new mongoose.Schema({
    code: { type: String, required: true },
    redeemed: { type: Boolean, default: false },
});

const customerCouponSchema = new mongoose.Schema({
    couponId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    giftNotes: { type: String, default: 'Have a good Day' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    secretCodes: { type: [secretCodeSchema], required: true }, // Array of codes with redeemed status
    expiration: { type: Date, required: true },
});

const CustomerCoupon = mongoose.model('CustomerCoupon', customerCouponSchema);

export default CustomerCoupon;
