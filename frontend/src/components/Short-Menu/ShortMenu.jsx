import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './ShortMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {frozenProducts} from '../../FrozenProductsData.json';  // Adjust import based on your file structure
import { Link } from 'react-router-dom';

export default function ShortMenu() {
  // State to track which items have been added to the cart
  const [addedItems, setAddedItems] = useState({});

  // Function to handle the add to cart click
  const handleAddToCart = (id) => {
    setAddedItems(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle the 'added' state for this item
    }));
  };

  // Get only the first 4 items from the menuItems array
  const displayedItems = frozenProducts.slice(0, 4);

  return (
    <section className="sb-menu-section sb-p-90-60">
      <div className="sb-bg-1">
        <div></div>
      </div>
      <div className="container">
        <div className="row">
        <div className="sb-group-title sb-mb-30">
              <div className="sb-left sb-mb-30">
                <h2 className="sb-cate-title sb-mb-30">
                  It is usually bought together with this product
                </h2>
                <p className="sb-text">
                  Consectetur numquam poro nemo veniam<br />eligendi rem
                  adipisci quo modi.
                </p>
              </div>
              <div className="sb-right sb-mb-30">
              
                <div className="sb-slider-nav">
                  <div className="sb-prev-btn sb-short-menu-prev">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="sb-next-btn sb-short-menu-next">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
            
              </div>
            </div>
          {displayedItems.map(item => (
            <div key={item.id} className="col-lg-3">
              <div className="sb-menu-item sb-mb-30">
                <a href="product.html" className="sb-cover-frame">
                  <img src={assets[item.image]} alt={item.name} className='cards-img'/>
                  {/* If you have badges, uncomment the code below */}
                  {/* {item.badge && (
                    <div className={`sb-badge ${item.badge.toLowerCase()}`}>
                      <i className="fas fa-leaf"></i> {item.badge}
                    </div>
                  )} */}
                </a>
                <div className="sb-card-tp">
                  <h4 className="sb-card-title">
                    <a href="product.html">{item.name}</a>
                  </h4>
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
                    onClick={() => handleAddToCart(item.id)}
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
