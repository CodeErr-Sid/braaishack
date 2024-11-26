import axios from 'axios';

const redeemCoupon = async () => {
    try {
        const secretCode = 'COUPON-HTPFYM6JJ'; // Example secret code (replace with real one)

        const response = await axios.post('http://localhost:4000/api/customercoupon/redeem', { secretCode });
        console.log('Coupon redeemed successfully:', response.data);
    } catch (error) {
        console.error('Error redeeming coupon:', error.message);
    }
};

redeemCoupon();
