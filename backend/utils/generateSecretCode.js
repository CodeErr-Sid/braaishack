import CustomerCoupon from "../models/customerCouponModel.js";

const generateSecretCode = async () => {
    // Generate the random alpha part (2 characters)
    const randomAlpha = Math.random().toString(36).slice(2, 4).toUpperCase();

    // Extract parts from the timestamp
    const timestamp = Date.now().toString(); // Full timestamp as a string
    const dateNumbers = timestamp.slice(0, 3); // First 3 digits of the timestamp
    const remainingNumbers = timestamp.slice(3, 8); // Next 5 digits of the timestamp

    // Construct the code
    const code = `BRAAI-${randomAlpha}${dateNumbers}-${remainingNumbers}BA`;

    // Check if code already exists in the database to avoid duplication
    const existingCode = await CustomerCoupon.findOne({ "secretCodes.code": code });
    if (existingCode) {
        return generateSecretCode(); // Recursively call to generate a unique code
    }

    return code;
};

export default generateSecretCode;
