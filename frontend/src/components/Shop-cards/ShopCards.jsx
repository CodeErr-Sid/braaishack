import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './ShopCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContexts';

export default function ShopCards({ shopCardData, selectedMenu }) {
    const [addedItems, setAddedItems] = useState({});
    const { addItemToCart } = useCart();

    const handleAddToCart = (item) => {
        addItemToCart(item);
        setAddedItems(prev => ({
            ...prev,
            [item.id]: !prev[item.id]
        }));
    };

    return (
        <section className="sb-menu-sectiAon sb-p-90-60">
            <div className="sb-bg-1">
                <div></div>
            </div>
            <div className="container">
                <div className="row">
                    {shopCardData.map((item) => {
                        const shouldDisplay = selectedMenu === item.category || selectedMenu === "" || selectedMenu === "All";
                        return (
                            <div
                                id={`item-${item.id}`} // Ensure the id is unique
                                key={item.id} // Prefer unique id over index

                                style={{
                                    opacity: shouldDisplay ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                    display: shouldDisplay ? 'flex' : 'none',
                                }}
                                className="col"
                            >
                                <div className="sb-menu-item sb-mb-30">
                                    <a href="#" className="sb-cover-frame">
                                        <img src={assets[item.image]} alt={item.name} className='cards-img' />
                                    </a>
                                    <div className="sb-card-tp">
                                        <h4 className="sb-card-title">
                                            <a href="#">{item.name}</a>
                                        </h4>
                                        <div className="sb-price">
                                            <sub>$</sub> {item.price}
                                        </div>
                                    </div>
                                    <div className="sb-description">
                                        <p className="sb-text sb-mb-15">{item.description}</p>
                                    </div>
                                    <div className="sb-card-buttons-frame">
                                        <Link to={`/product`} className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                                            <span className="sb-icon">
                                                <img src={assets.arrow2} alt="icon" />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                        <a
                                            href="#."
                                            className="sb-btn sb-atc"
                                            onClick={() => handleAddToCart(item)}
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
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
