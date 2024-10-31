import CouponData from "../models/shopCouponModel.js";


// Add a new coupon data
export const addCouponData = async (req, res) => {
    try {
        const { couponName, description, couponPrice, expirationDate } = req.body;

        const newCouponData = new CouponData({ couponName, description, couponPrice, expirationDate });
        await newCouponData.save();

        return res.status(201).json({ message: 'Coupon data added successfully', data: newCouponData });
    } catch (error) {
        return res.status(500).json({ message: 'Error adding coupon data', error: error.message });
    }
};

// List all coupon data
export const listCouponData = async (req, res) => {
    try {
        const coupons = await CouponData.find();
        return res.status(200).json({ message: 'Coupons retrieved successfully', data: coupons });
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving coupons', error: error.message });
    }
};

// Delete a coupon data by ID
export const deleteCouponData = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCoupon = await CouponData.findByIdAndDelete(id);
        if (!deletedCoupon) {
            return res.status(404).json({ message: 'Coupon data not found' });
        }

        return res.status(200).json({ message: 'Coupon data deleted successfully', data: deletedCoupon });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting coupon data', error: error.message });
    }
};
