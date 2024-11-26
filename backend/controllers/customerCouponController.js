import Stripe from 'stripe';
import CustomerCoupon from '../models/customerCouponModel.js';
import Coupon from '../models/couponModel.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Replace with your Stripe secret key

// Purchase Coupon
export const purchaseCoupon = async (req, res) => {
    const { couponId, quantity } = req.body;
    try {
        const coupon = await Coupon.findById(couponId);
        if (!coupon) return res.status(404).json({ error: 'Coupon not found' });

        const totalPrice = coupon.price * quantity;

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: coupon.title, description: coupon.description },
                    unit_amount: coupon.price * 100
                },
                quantity
            }],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Error processing purchase:', error);
        res.status(500).json({ error: 'Failed to process purchase' });
    }
};

// Confirm Payment
export const confirmPayment = async (req, res) => {
    const { sessionId, couponId, name, email, phoneNumber, giftNotes, quantity } = req.body;

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return res.status(400).json({ error: 'Payment not completed' });
        }

        const coupon = await Coupon.findById(couponId);
        if (!coupon) return res.status(404).json({ error: 'Coupon not found' });

        const customerCoupon = new CustomerCoupon({
            couponId,
            name,
            email,
            phoneNumber,
            giftNotes,
            quantity,
            totalPrice: coupon.price * quantity,
            secretCode: `COUPON-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            redeemed: false
        });

        await customerCoupon.save();

        // TODO: Send Email Logic (use a library like nodemailer)
        // sendCouponEmail(email, customerCoupon);

        res.status(201).json(customerCoupon);
    } catch (error) {
        console.error('Error confirming payment:', error);
        res.status(500).json({ error: 'Failed to confirm payment' });
    }
};

// Redeem Coupon
export const redeemCoupon = async (req, res) => {
    const { secretCode } = req.body;
    try {
        const customerCoupon = await CustomerCoupon.findOne({ secretCode });
        if (!customerCoupon) return res.status(404).json({ error: 'Coupon not found' });
        if (customerCoupon.redeemed) return res.status(400).json({ error: 'Coupon already redeemed' });

        customerCoupon.redeemed = true;
        await customerCoupon.save();

        res.status(200).json({ message: 'Coupon redeemed successfully' });
    } catch (error) {
        console.error('Error redeeming coupon:', error);
        res.status(500).json({ error: 'Failed to redeem coupon' });
    }
};
