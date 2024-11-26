import React from 'react';
import { useLocation } from 'react-router-dom';
import GiftForm from '../GiftForm/GiftForm';
import GiftCart from '../GiftCart/GiftCart';
import styles from './GiftCheckoutSection.module.css';

const GiftCheckoutSection = () => {
  const location = useLocation();
  const { card } = location.state; // Get the card data passed from the GiftCard component

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <GiftCart coupon={card} quantity={1} handleQuantityChange={() => {}} /> {/* Passing card data to GiftCart */}
        <GiftForm coupon={card} /> {/* Passing the selected card to GiftForm */}
      </div>
    </div>
  );
};

export default GiftCheckoutSection;
