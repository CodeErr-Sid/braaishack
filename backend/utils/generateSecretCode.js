import CustomerCoupon from "../models/customerCouponModel.js";


const generateSecretCode = async () => {
    const randomPart = Math.random().toString(36).slice(2, 11).toUpperCase();
    const timestamp = Date.now();
    const code = `COUPON-${randomPart}-${timestamp}`;

    // Check if code already exists in the database to avoid duplication
    const existingCode = await CustomerCoupon.findOne({ "secretCodes.code": code });
    if (existingCode) {
        return generateSecretCode(); // Recursively call to generate a unique code
    }

    return code;
};


export default generateSecretCode;