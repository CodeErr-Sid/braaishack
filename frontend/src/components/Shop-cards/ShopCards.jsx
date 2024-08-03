import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './ShopCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { id: 1, image: assets.shop1, title: 'Chevrefrit au miel', price: 14, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 2, image: assets.shop2, title: 'Saumon Gravlax', price: 9, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: 'Vegan' },
  { id: 3, image: assets.shop3, title: 'Stracciatella', price: 9, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 4, image: assets.shop4, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 5, image: assets.shop5, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 6, image: assets.shop6, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 7, image: assets.shop7, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 8, image: assets.shop8, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 9, image: assets.shop9, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 10, image: assets.shop10, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 14, image: assets.shop14, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
  { id: 15, image: assets.shop15, title: 'Croustillant de poisson', price: 4, description: 'Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', badge: null },
];

export default function ShopCards() {
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
    <section className="sb-menu-section sb-p-90-60">
      <div className="sb-bg-1">
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          {menuItems.map(item => (
            <div key={item.id} className="col-lg-4">
              <div className="sb-menu-item sb-mb-30">
                <a href="product.html" className="sb-cover-frame">
                  <img src={item.image} alt={item.title} className='cards-img'/>
                  {item.badge && (
                    <div className={`sb-badge ${item.badge.toLowerCase()}`}>
                      <i className="fas fa-leaf"></i> {item.badge}
                    </div>
                  )}
                </a>
                <div className="sb-card-tp">
                  <h4 className="sb-card-title">
                    <a href="product.html">{item.title}</a>
                  </h4>
                  <div className="sb-price">
                    <sub>$</sub> {item.price}
                  </div>
                </div>
                <div className="sb-description">
                  <p className="sb-text sb-mb-15">{item.description}</p>
                </div>
                <div className="sb-card-buttons-frame">
                  <a href="product.html" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
                    <span className="sb-icon">
                      <img src={assets.arrow2} alt="icon" />
                    </span>
                    <span>Details</span>
                  </a>
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
      <div>
        <ul className="sb-pagination">
          <li className="sb-active"><a href="#.">1</a></li>
          <li><a href="shop-list-2.html">2</a></li>
          <li><a href="shop-list-2.html">3</a></li>
          <li><a href="shop-list-2.html">4</a></li>
          <li><a href="shop-list-2.html">...</a></li>
        </ul>
      </div>
    </section>
  );
}
