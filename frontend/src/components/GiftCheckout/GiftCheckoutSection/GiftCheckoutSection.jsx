import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GiftForm from '../GiftForm/GiftForm';
import GiftCart from '../GiftCart/GiftCart';
import styles from './GiftCheckoutSection.module.css';
import axios from 'axios';
import { StoreContext } from '../../../Context/StoreContext';


const GiftCheckoutSection = () => {
  const location = useLocation();
  const { card } = location.state; // Get the coupon card passed from GiftCard
  const [quantity, setQuantity] = useState(1);

  const { url } = useContext(StoreContext)


  const handleFormSubmit = async (formData) => {
    const dataToSend = {
      couponId: card._id, // Assuming `card` has an `_id` field
      quantity,
      formData, // This will contain the user's form data (name, email, etc.)
    };

    console.log("Data to send:", dataToSend); // This will print the data you are sending

    try {
      const response = await axios.post(url + '/api/customercoupon/purchase', dataToSend);

      // Handle the response from the API which includes the session URL for Stripe
      if (response.data.url) {
        console.log('Order placed successfully. Redirecting to:', response.data.url);
        // Redirect to Stripe checkout page using the URL received from the server
        window.location.href = response.data.url;
      } else {
        console.error('Failed to get the Stripe session URL');
      }
    } catch (error) {
      console.error('Error placing order:', error.message);
    }
  };
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutInnerContainer}>
        <GiftCart coupon={card} quantity={quantity} setQuantity={setQuantity} />
        <GiftForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default GiftCheckoutSection;
