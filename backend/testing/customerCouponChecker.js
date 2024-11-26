import axios from 'axios';

const purchaseCoupon = async () => {
    try {
        const couponData = {
            couponId: '674598b8362d7a63074e9299', // Example coupon ID (replace with real one)
            quantity: 2
        };

        const response = await axios.post('http://localhost:4000/api/customercoupon/purchase', couponData);
        console.log('Redirect to payment URL:', response.data.url);
    } catch (error) {
        console.error('Error purchasing coupon:', error.message);
    }
};

purchaseCoupon();
