import React, { useContext, useState } from 'react';
import { assets, food_list } from '../../assets/assets';
import './ShopCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContexts'; // Adjust the import path if necessary
import { StoreContext } from '../../Context/StoreContext';
import MenuData from "../../data/shopdata.json"

export default function ShopCards({ shopCardData, selectedMenu, isLoggedin, setShowLogin }) {
    const [addedItems, setAddedItems] = useState({});
    const [quantities, setQuantities] = useState({}); // State for quantities per item
    const { addItemToCart } = useCart();

    const { addToCart } = useContext(StoreContext)



    const handleAddToCart = (item) => {
        // addItemToCart({ ...item, quantity: quantities[item._id] || 1 }); // Include quantity in cart
        if (isLoggedin) {
            addToCart(item._id)
            // // console.log(item._id)
            setAddedItems(prev => ({
                ...prev,
                [item._id]: !prev[item._id]
            }));
        } else {
            setShowLogin(true)
        }
    };

    const increment = (item) => {
        setQuantities(prev => ({
            ...prev,
            [item._id]: (prev[item._id] || 1) + 1
        }));
    };

    const decrement = (item) => {
        setQuantities(prev => ({
            ...prev,
            [item._id]: Math.max((prev[item._id] || 1) - 1, 1) // Ensure quantity doesn't go below 1
        }));

    };

    const groupedItems = (shopCardData?.length ? shopCardData : MenuData).reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <section className="sb-menu-section sb-p-90-60">
            <div className="container">
                <div className="row">
                    {Object.entries(groupedItems).map(([category, items], index) => (
                        <div key={index} className="col-lg-12">
                            {/* Render the category heading */}
                            {selectedMenu.length === 0 || selectedMenu.includes(category) ? (
                                <div className="category-heading">
                                    <h3 className='categoryname'>{category}</h3>
                                    <div className="row">
                                        {items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="col-lg-3">
                                                <div className="sb-menu-item sb-mb-30">
                                                    <div className="sb-cover-frame">
                                                        <img src={item.image} alt={item.name} className='cards-img' />
                                                    </div>
                                                    <div className="sb-card-tp">
                                                        <h4 className="sb-card-title">{item.name}</h4>
                                                        <div className="sb-price">
                                                            <sub>$</sub> {item.price}
                                                        </div>
                                                    </div>
                                                    <div className="sb-description">
                                                        <p className="sb-text sb-mb-15">{item.description}</p>
                                                    </div>
                                                    <div className="sb-card-buttons-frame">
                                                        <a
                                                            href="#."
                                                            className="sb-btn sb-atc"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                // handleAddToCart(item);
                                                            }}
                                                        >
                                                            <span className="sb-icon">
                                                                <FontAwesomeIcon icon={faCartShopping} style={{ color: "black" }} />
                                                            </span>
                                                            <span className="sb-add-to-cart-text">
                                                                {addedItems[item._id] ? 'Added' : 'Add to cart'}
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
