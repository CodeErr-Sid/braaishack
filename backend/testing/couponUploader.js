import axios from 'axios';

const createCoupon = async () => {
    try {
        const couponData = {
            title: "10% Off on Your First Order",
            description: "Get 10% off your first order at our restaurant. Valid for new customers only.",
            imgSrc: "https://via.placeholder.com/150",
            price: 10.00
        };

        const response = await axios.post('http://localhost:4000/api/coupon', couponData);
        console.log('Coupon created successfully:', response.data);
    } catch (error) {
        console.error('Error creating coupon:', error.message);
    }
};

createCoupon();
