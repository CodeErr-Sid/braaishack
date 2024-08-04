// src/components/MiniCart.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../../Context/CartContexts'
import './MiniCart.css'; // Ensure this path is correct
import { assets } from '../../assets/assets';

export default function MiniCart() {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Since `setCartItems` is not available here, you need to handle loading data
        // by setting cartItems directly or via another approach.
    }, []);

    // Save cart items to localStorage on change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };
    const handleViewOrder = () => {
      navigate('/cart'); // Navigate to the checkout page
  };

    return (
        <div className="sb-minicart">
            <div className="sb-minicart-content">
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Your order</h4>
                    <i className="fas fa-arrow-down"></i>
                </div>
                {cartItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    cartItems.map((item) => (
                        <a href={`product/${item.id}`} key={item.id} className="sb-menu-item sb-menu-item-sm sb-mb-15">
                            <div className="sb-cover-frame">
                                <img src={assets[item.image]} alt={item.title || item.name} />
                            </div>
                            <div className="sb-card-tp">
                                <h4 className="sb-card-title">{item.title || item.name}</h4>
                                <div className="sb-price"><sub>$</sub> {item.price}</div>
                            </div>
                        </a>
                    ))
                )}
            </div>
            <div className="sb-minicart-footer">
                <button onClick={handleViewOrder} className="sb-btn sb-btn-gray sb-btn-text">
                    <span>View order</span>
                </button>
                <button onClick={handleCheckout} className="sb-btn sb-btn-text">
                    <span>Checkout</span>
                </button>
            </div>
        </div>
    );
}
