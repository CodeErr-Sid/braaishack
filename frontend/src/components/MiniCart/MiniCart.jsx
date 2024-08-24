import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { StoreContext } from "../../Context/StoreContext";
import './MiniCart.css'; // Ensure this path is correct

export default function MiniCart({ setShowMiniCart, showMiniCart, isLoggedin, setShowLogin }) {
    const { cartItems, loadProductData, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();
    const [productItems, setProductItems] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state
    const [error, setError] = useState(null); // Add error state

    const handleCheckout = () => {
        if (isLoggedin) {
            navigate('/checkout'); // Navigate to the checkout page
            setShowMiniCart(false);
        } else {
            setShowLogin(true);
        }
    };

    console.log(productItems)

    useEffect(() => {
        const fetchData = async () => {
            if (cartItems && Object.keys(cartItems).length > 0) {
                setLoading(true); // Start loading
                try {
                    const data = await loadProductData(cartItems);

                    if (data.success) {
                        const itemsArray = Object.values(data.data);
                        setProductItems(itemsArray);
                    } else {
                        setError('Failed to fetch product data.');
                        setProductItems([]);
                    }
                } catch (error) {
                    setError('Error fetching product data.');
                    setProductItems([]);
                } finally {
                    setLoading(false); // End loading
                }
            } else {
                setProductItems([]);
            }
        };

        fetchData();
    }, [cartItems, loadProductData]);

    

    const handleViewOrder = () => {
        if (isLoggedin) {
            navigate('/myorders'); // Navigate to the orders page
            setShowMiniCart(false);
        } else {
            setShowLogin(true);
        }
    };

    return (
        <div className={`sb-minicart ${showMiniCart ? 'sb-active' : ''}`}>
            <div className="sb-minicart-content">
                <button className="sb-close-btn" onClick={() => setShowMiniCart(false)}>
                    &times;
                </button>
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Your order</h4>
                    <i className="fas fa-arrow-down"></i>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p className="sb-error-message">{error}</p>}
                {productItems.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    productItems.map((item, index) => (
                        <a href={`/product/${item._id}`} key={index} className="sb-menu-item sb-menu-item-sm sb-mb-15">
                            <div className="sb-cover-frame">
                                <img src={item.image} alt={item.title || item.name} />
                                
                            </div>
                            <div className="sb-card-tp">
                                <h4 className="sb-card-title">{item.title || item.name}</h4>
                                <div className="sb-price"><sub>$</sub> {item.price}</div>
                                <button
                                    className="sb-remove-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeFromCart(item._id);
                                    }}
                                >
                                    &times;
                                </button>
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
