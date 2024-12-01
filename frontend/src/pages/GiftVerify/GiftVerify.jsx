import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './GiftVerify.module.css';
import { StoreContext } from '../../Context/StoreContext';
import { toast } from 'react-toastify';

const GiftVerify = () => {
    const [searchParams] = useSearchParams();  // Hook to access URL parameters
    const sessionId = searchParams.get('session_id');  // Extract sessionId from the query parameter
    const [paymentStatus, setPaymentStatus] = useState(null); // To show payment status


    const { url } = useContext(StoreContext);

    const navigate = useNavigate();

    // Function to verify the payment
    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/customercoupon/confirm-payment`, {
                sessionId,
            });

            if (response.data.success) {
                setPaymentStatus('Payment Verified');
                navigate('/gift-section', {
                    state: { message: response.data.message }, // Pass the message here
                });
                console.log("message : " + response.data.message);
            }
            else {
                setPaymentStatus('Payment Failed');
                // Handle failure if necessary
            }
        } catch (error) {
            console.error('Payment verification failed:', error);
            setPaymentStatus('Error verifying payment');
            navigate('/');
        }
    };

    useEffect(() => {
        if (sessionId) {
            verifyPayment();  // Call the verifyPayment function when the sessionId is available
        } else {
            setPaymentStatus('No session ID found');
            navigate('/');
        }
    }, [sessionId, navigate]);  // Dependencies to rerun if sessionId changes

    return (
        <div className={styles.verify}>
            {paymentStatus ? (
                <div>{paymentStatus}</div>
            ) : (
                <div className={styles.spinner}></div>  // Add spinner while verifying
            )}
        </div>
    );
};

export default GiftVerify;
