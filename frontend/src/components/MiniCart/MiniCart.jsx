import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { StoreContext } from "../../Context/StoreContext";
import './MiniCart.css'; // Ensure this path is correct
import { assets } from '../../assets/assets';

export default function MiniCart( { showMiniCart }) {
    const { cartItems, loadProductData } = useContext(StoreContext);
    const navigate = useNavigate();
    const [productItems, setProductItems] = useState([]); // Initialize with an empty array or null

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    console.log('Cart Items:', cartItems);

    useEffect(() => {
        const fetchData = async () => {
            if (cartItems && Object.keys(cartItems).length > 0) {
                try {
                    const data = await loadProductData(cartItems);

                    if (data.success) {
                        // Assuming data.data is an object with product IDs as keys and product details as values
                        const itemsArray = Object.values(data.data); // Convert object to array
                        setProductItems(itemsArray);
                    } else {
                        console.error('Failed to fetch product data:', data.message);
                        setProductItems([]); // Handle case where API returns failure
                    }
                } catch (error) {
                    console.error('Error fetching product data:', error.message);
                    setProductItems([]); // Handle error case
                }
            } else {
                setProductItems([]); // Handle case where cartItems is empty
            }
        };

        fetchData(); // Call the async function
    }, [cartItems, loadProductData]);

    console.log('Product Items:', productItems);

    const handleViewOrder = () => {
        navigate('/cart'); // Navigate to the cart page
    };

    return (
        <div className={`sb-minicart ${showMiniCart ? 'sb-active' : ''}`}>
            <div className="sb-minicart-content">
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Your order</h4>
                    <i className="fas fa-arrow-down"></i>
                </div>
                {productItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    productItems.map((item, index) => (
                        <a href={`product/${item.id}`} key={index} className="sb-menu-item sb-menu-item-sm sb-mb-15">
                            <div className="sb-cover-frame">
                                <img src={item.image} alt={item.title || item.name} />
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
