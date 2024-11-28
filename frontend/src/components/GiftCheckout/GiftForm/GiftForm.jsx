import React, { useState } from 'react';
import styles from './GiftForm.module.css';

const GiftForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        giftNotes: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            const numericValue = value.replace(/\D/g, ''); // Allow only numbers
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const formErrors = { name: '', email: '', phoneNumber: '' };

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.phoneNumber) {
            formErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData); // Pass formData to the parent component
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                giftNotes: '',
            }); // Clear the form
            setErrors({
                name: '',
                email: '',
                phoneNumber: '',
            }); // Clear errors
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}

            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}

            <input
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="text"
            />
            {errors.phoneNumber && (
                <span className={styles.error}>{errors.phoneNumber}</span>
            )}

            <textarea
                name="giftNotes"
                placeholder="Gift Notes (Optional)"
                value={formData.giftNotes}
                onChange={handleChange}
            />

            <button type="submit">Place Order</button>
        </form>
    );
};

export default GiftForm;
