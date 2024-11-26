import axios from 'axios';

const confirmPayment = async () => {
    try {
        const paymentData = {
            sessionId: 'cs_test_a1i4rLQr0eZQxPV7xsDX8sg1jxlFU4dGqV6oAhPnyQDaeMjIdqrB79XHkY',  // Mock session ID
            couponId: '674598b8362d7a63074e9299',  // Example coupon ID (replace with a real one)
            name: 'John Doe',
            email: 'john.doe@example.com',
            phoneNumber: '1234567890',
            giftNotes: 'Enjoy the coupon!',
            quantity: 2,  // Number of coupons being purchased
        };

        const response = await axios.post('http://localhost:4000/api/customercoupon/confirm-payment', paymentData);

        console.log('Payment confirmed and coupon created:', response.data);
    } catch (error) {
        console.error('Error confirming payment:', error.message);
    }
};

confirmPayment();

