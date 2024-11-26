import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgSrc: { type: String, required: true },
    price: { type: Number, required: true }
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;
