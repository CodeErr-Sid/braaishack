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

    // console.log(selectedMenu)


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

    return (
        <section className="sb-menu-section sb-p-90-60">
            <div className="sb-bg-1">
                <div></div>
            </div>
            <div className="container">
                <div className="row">
                    {(shopCardData?.length ? shopCardData : MenuData).map(item => (

                        <div key={item._id} className="col-lg-3"
                            style={{
                                display: selectedMenu.length !== 0 && selectedMenu.includes(item.category)
                                    ? "block"
                                    : "none",
                            }}>
                            <div className="sb-menu-item sb-mb-30">
                                <Link to={`/product/${item._id}`} className="sb-cover-frame">
                                    <img src={item.image} alt={item.name} className='cards-img' />
                                </Link>
                                <div className="sb-card-tp">
                                    <h4 className="sb-card-title">
                                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                                    </h4>
                                    {/* <div className="multi-select">
                                        <div className="minus" onClick={() => decrement(item)}>-</div>
                                        <h1>{quantities[item._id] || 1}</h1>
                                        <div className="add" onClick={() => increment(item)}>+</div>
                                    </div> */}
                                    <div className="sb-price">
                                        <sub>$</sub> {item.price}
                                    </div>
                                </div>
                                <div className="sb-description">
                                    <p className="sb-text sb-mb-15">{item.description}</p>
                                </div>
                                <div className="sb-card-buttons-frame">
                                    <Link to={`/product/${item._id}`} className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
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
                                            {addedItems[item._id] ? 'Added' : 'Add to cart'}
                                        </span>
                                        {addedItems[item._id] && (
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
