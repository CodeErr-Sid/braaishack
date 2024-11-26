import Coupon from '../models/couponModel.js';

// Get all coupons
export const getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        console.error('Error fetching coupons:', error);
        res.status(500).json({ error: 'Failed to fetch coupons' });
    }
};

// Create a new coupon
export const createCoupon = async (req, res) => {
    const { title, description, imgSrc, price } = req.body;
    try {
        const newCoupon = new Coupon({ title, description, imgSrc, price });
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        console.error('Error creating coupon:', error);
        res.status(500).json({ error: 'Failed to create coupon' });
    }
};
