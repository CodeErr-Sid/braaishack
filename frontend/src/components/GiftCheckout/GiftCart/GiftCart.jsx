import React, { useState } from 'react';
import styles from './GiftCart.module.css';

const GiftCart = () => {
    // Assuming the price of the gift voucher is $25
    const pricePerItem = 25;
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const calculateGrandTotal = () => {
        return pricePerItem * quantity;
    };

    return (
        <div className={styles.cart}>
            <h2>Your Gift Cart</h2>
            <div className={styles.cartItem}>
                <h3>Gift Voucher</h3>
                <p>Price: ${pricePerItem}</p>
                <div className={styles.quantityControls}>
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <div className={styles.grandTotal}>
                <h3>Grand Total: ${calculateGrandTotal()}</h3>
            </div>
        </div>
    );
};

export default GiftCart;
