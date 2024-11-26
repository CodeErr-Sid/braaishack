import React, { useState } from 'react';
import styles from './GiftForm.module.css';

const GiftForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        giftNotes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
            />
            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
            />
            <input
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                value={formData.phoneNumber}
            />
            <textarea
                name="giftNotes"
                placeholder="Gift Notes"
                onChange={handleChange}
                value={formData.giftNotes}
            />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default GiftForm;
