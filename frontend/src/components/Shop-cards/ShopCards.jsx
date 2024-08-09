import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './ShopCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContexts'; // Adjust the import path if necessary

export default function ShopCards({ shopCardData }) {
    const [addedItems, setAddedItems] = useState({});
    const [quantities, setQuantities] = useState({}); // State for quantities per item
    const { addItemToCart } = useCart();

    const handleAddToCart = (item) => {
        addItemToCart({ ...item, quantity: quantities[item.id] || 1 }); // Include quantity in cart
        setAddedItems(prev => ({
            ...prev,
            [item.id]: !prev[item.id]
        }));
    };

    const increment = (item) => {
        setQuantities(prev => ({
            ...prev,
            [item.id]: (prev[item.id] || 1) + 1
        }));
        console.log(increment);
        
    };

    const decrement = (item) => {
        setQuantities(prev => ({
            ...prev,
            [item.id]: Math.max((prev[item.id] || 1) - 1, 1) // Ensure quantity doesn't go below 1
        }));
        
    };

    return (
        <section className="sb-menu-section sb-p-90-60">
            <div className="sb-bg-1">
                <div></div>
            </div>
            <div className="container">
                <div className="row">
                    {shopCardData.map(item => (
                        <div key={item.id} className="col-lg-4">
                            <div className="sb-menu-item sb-mb-30">
                                <Link to={`/product/${item.id}`} className="sb-cover-frame">
                                    <img src={assets[item.image]} alt={item.name} className='cards-img'/>
                                </Link>
                                <div className="sb-card-tp">
                                    <h4 className="sb-card-title">
                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                    </h4>
                                    <div className="multi-select">
                                        <div className="minus" onClick={() => decrement(item)}>-</div>
                                        <h1>{quantities[item.id] || 1}</h1>
                                        <div className="add" onClick={() => increment(item)}>+</div>
                                    </div>
                                    <div className="sb-price">
                                        <sub>$</sub> {item.price}
                                    </div>
                                </div>
                                <div className="sb-description">
                                    <p className="sb-text sb-mb-15">{item.description}</p>
                                </div>
                                <div className="sb-card-buttons-frame">
                                    <Link to={`/product/${item.id}`} className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                        <span className="sb-icon">
                                            <img src={assets.arrow2} alt="icon" />
                                        </span>
                                        <span>Details</span>
                                    </Link>
                                    <a 
                                        href="#."
                                        className="sb-btn sb-atc"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default link behavior
                                            handleAddToCart(item);
                                        }}
                                    >
                                        <span className="sb-icon">
                                            <FontAwesomeIcon icon={faCartShopping} style={{ color: "black" }} />
                                        </span>
                                        <span className="sb-add-to-cart-text">
                                            {addedItems[item.id] ? 'Added' : 'Add to cart'}
                                        </span>
                                        {addedItems[item.id] && (
                                            <span className="sb-added-text"></span>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
