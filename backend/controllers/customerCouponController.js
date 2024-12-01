import Stripe from 'stripe';
import CustomerCoupon from '../models/customerCouponModel.js';
import Coupon from '../models/couponModel.js';
import generateSecretCode from '../utils/generateSecretCode.js';
import sendCouponEmail from '../utils/giftmail.js';
// import { v4 as uuidv4 } from 'uuid'; // Use UUID for part of unique code


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Replace with your Stripe secret key

// Purchase Coupon
export const purchaseCoupon = async (req, res) => {
    const { couponId, quantity, formData } = req.body;

    try {
        const coupon = await Coupon.findById(couponId);
        if (!coupon) return res.status(404).json({ error: 'Coupon not found' });

        const totalPrice = coupon.price * quantity;

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: coupon.title,
                            description: coupon.description,
                        },
                        unit_amount: coupon.price * 100, // Convert to cents
                    },
                    quantity,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            metadata: {
                ...formData, // Pass form data here (e.g., name, email, phoneNumber)
                couponId,
                quantity,
            },
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Error processing purchase:', error);
        res.status(500).json({ error: 'Failed to process purchase' });
    }
};


// Confirm Payment
export const confirmPayment = async (req, res) => {
    const { sessionId } = req.body;

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return res.status(400).json({ error: 'Payment not completed' });
        }

        // Extract metadata from the session
        const { name, email, phoneNumber, giftNotes, couponId, quantity } = session.metadata;

        const coupon = await Coupon.findById(couponId);
        if (!coupon) return res.status(404).json({ error: 'Coupon not found' });

        const codes = Array.from({ length: quantity }, async () => ({
            code: await generateSecretCode(),
            redeemed: false,
        }));

        const customerCoupon = new CustomerCoupon({
            couponId,
            name,
            email,
            phoneNumber,
            giftNotes,
            quantity,
            totalPrice: coupon.price * quantity,
            secretCodes: await Promise.all(codes),
            expiration: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        });

        await customerCoupon.save();

        sendCouponEmail(email, customerCoupon, coupon);

        // Send success response
        res.status(201).json({
            success: true,
            message: `The coupons have been sent to your email: ${email}.`,
            data: customerCoupon,
        });

    } catch (error) {
        console.error('Error confirming payment:', error);
        res.status(500).json({ error: 'Failed to confirm payment' });
    }
};


// Redeem Coupon
export const redeemCoupon = async (req, res) => {
    const { secretCode } = req.body;

    try {
        const customerCoupon = await CustomerCoupon.findOne({
            'secretCodes.code': secretCode
        });

        if (!customerCoupon) return res.status(404).json({ error: 'Coupon not found' });

        const codeObj = customerCoupon.secretCodes.find(codeObj => codeObj.code === secretCode);

        if (!codeObj) return res.status(404).json({ error: 'Code not found' });
        if (codeObj.redeemed) return res.status(400).json({ error: 'Coupon already redeemed' });

        codeObj.redeemed = true; // Mark the specific code as redeemed
        await customerCoupon.save();

        res.status(200).json({ message: 'Coupon redeemed successfully' });
    } catch (error) {
        console.error('Error redeeming coupon:', error);
        res.status(500).json({ error: 'Failed to redeem coupon' });
    }
};

