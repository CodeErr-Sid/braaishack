import React from 'react';
import styles from './GiftCart.module.css';

const GiftCart = ({ coupon, quantity, setQuantity }) => {
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const calculateGrandTotal = () => {
        return coupon.price * quantity;
    };

    return (
        <div className={styles.cart}>
            <h2>Your Gift Cart</h2>
            <div className={styles.cartItem}>
                <div className={styles.cartImageContainer}>
                    <img src={coupon.imgSrc} alt={coupon.title} className={styles.cartImage} />
                </div>
                <div className={styles.cartDetails}>
                    <h3>{coupon.title}</h3>
                    <p>Price: ${coupon.price}</p>
                    <div className={styles.quantityControls}>
                        <button onClick={decrement}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increment}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.grandTotal}>
                <h3>Grand Total: ${calculateGrandTotal()}</h3>
            </div>
        </div>
    );
};

export default GiftCart;
