import CustomerCoupon from "../models/customerCouponModel.js";

// Add customer coupon
export const addCustomerCoupon = async (req, res) => {
    try {
        const { couponDataId, customerEmail, numberOfCoupons, couponCodes } = req.body;

        const newCustomerCoupon = new CustomerCoupon({ couponDataId, customerEmail, numberOfCoupons, couponCodes });
        await newCustomerCoupon.save();


        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charge"
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${frontend_URL}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_URL}/verify?success=false&orderId=${newOrder._id}`,
            line_items: line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error adding customer coupon', error: error.message });
    }
};

// List all customer coupons
export const listCustomerCoupons = async (req, res) => {
    try {
        const customerCoupons = await CustomerCoupon.find().populate('couponDataId');
        return res.status(200).json({ message: 'Customer coupons retrieved successfully', data: customerCoupons });
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving customer coupons', error: error.message });
    }
};

// Redeem a coupon by coupon code
// Verify coupon code
export const verifyCoupon = async (req, res) => {
    try {
        const { couponCode } = req.body; // Get coupon code from request body

        // Find the coupon in the database
        const coupon = await CustomerCoupon.findOne({
            'couponCodes.code': couponCode
        });

        if (!coupon) {
            return res.status(404).json({ message: 'Coupon code not found' });
        }

        const couponToVerify = coupon.couponCodes.find(c => c.code === couponCode);

        // Check if the coupon is already redeemed
        if (couponToVerify.redeemed) {
            return res.status(400).json({ message: 'Coupon has already been redeemed' });
        }

        // Optionally check for expiration date if implemented
        // if (couponToVerify.expirationDate < new Date()) {
        //     return res.status(400).json({ message: 'Coupon has expired' });
        // }

        // Coupon is valid and not redeemed
        return res.status(200).json({ message: 'Coupon is valid', coupon: couponToVerify });
    } catch (error) {
        return res.status(500).json({ message: 'Error verifying coupon', error: error.message });
    }
};

