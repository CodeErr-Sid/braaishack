import React, { useState } from 'react'; // Import useState from React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './Product.css'; 
import { assets } from '../../assets/assets';

const ProductDetails = ({ productId }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1); // Use functional update to ensure correct value
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Ensure quantity doesn't go below 1
    };

    // State to track which items have been added to the cart
    const [addedItems, setAddedItems] = useState({});

    // Function to handle the add to cart click
    const handleAddToCart = (id) => {
        setAddedItems(prev => ({
            ...prev,
            [id]: !prev[id] // Toggle the 'added' state for this item
        }));
    };

    return (
        <section className="sb-p-90-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 width">
                        <div className="sb-gallery-item sb-gallery-square sb-mb-90">
                            <img src={assets.shop4} alt="photo" />
                            <div className="sb-badge sb-vegan"><i className="fas fa-leaf"></i> Vegan</div>
                            {/* button */}
                            <a data-fancybox="menu" data-no-swup href="img/menu/4.jpg" className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                <span className="sb-icon">
                                    <img src="img/ui/icons/zoom.svg" alt="icon" />
                                </span>
                            </a>
                            {/* button end */}
                        </div>
                    </div>
                    <div className="col-lg-6 width">
                        <div className="sb-product-description sb-mb-90">
                            <div className="sb-price-frame sb-mb-30">
                                <h3>Saumon Gravlax</h3>
                                <div className="sb-price"><sub>$</sub> 19</div>
                            </div>
                            <ul className="sb-stars sb-mb-25">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><span>(4 ratings)</span></li>
                            </ul>
                            <p className="sb-text sb-mb-30">
                                <span>tomatoes</span>, <span>nori</span>, <span>feta cheese</span>, <span>mushrooms</span>, <span>rice noodles</span>, <span>corn</span>, <span>shrimp</span>.
                            </p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                        <div className="sb-number">01</div>
                                        <div className="sb-feature-text">
                                            <h4 className="sb-mb-15 font-size">Add to the cart and place an order</h4>
                                            <p className="sb-text sb-text-sm">Porro comirton pera nemo veniam</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                        <div className="sb-number">02</div>
                                        <div className="sb-feature-text">
                                            <h4 className="sb-mb-15 font-size">Enter your phone number and address</h4>
                                            <p className="sb-text sb-text-sm">Eligendi adipisci numquam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sb-features-item sb-features-item-sm sb-mb-30">
                                        <div className="sb-number">03</div>
                                        <div className="sb-feature-text">
                                            <h4 className="sb-mb-15 font-size">Enjoy your favorite food at home!</h4>
                                            <p className="sb-text sb-text-sm">Nnecessitatibus praesentium</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sb-buttons-frame">
                                <div className="multi-select">
                                    <div className="minus" onClick={decrement}>
                                        -
                                    </div>
                                    <h1>{quantity}</h1>
                                    <div className="add" onClick={increment}>
                                        +
                                    </div>
                                </div>
                                {/* button */}
                                <a 
                                    href="#."
                                    className="sb-btn sb-atc"
                                    onClick={() => handleAddToCart(productId)}
                                >
                                    <span className="sb-icon">
                                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "black" }} />
                                    </span>
                                    <span className="sb-add-to-cart-text">
                                        {addedItems[productId] ? 'Added' : 'Add to cart'}
                                    </span>
                                    {addedItems[productId] && (
                                        <span className="sb-added-text"></span>
                                    )}
                                </a>
                                {/* button end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
