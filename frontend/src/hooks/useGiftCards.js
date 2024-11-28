import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../Context/StoreContext';

const useGiftCards = () => {

    const { url } = useContext(StoreContext)

    const [giftCards, setGiftCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get(`${url}/api/coupon`);
                setGiftCards(response.data); // Assuming the API returns an array of coupons
            } catch (error) {
                console.error('Error fetching coupons:', error.message);
                setError('Failed to fetch gift cards');
            } finally {
                setLoading(false);
            }
        };

        fetchCoupons();
    }, []); // Fetch only once on component mount

    return { giftCards, loading, error };
};

export default useGiftCards;
