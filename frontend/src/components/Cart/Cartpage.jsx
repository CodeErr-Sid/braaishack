import React, { useState } from 'react';
import './Cart.css'; // Import CSS for styling
import { assets } from '../../assets/assets';

// Dummy data to simulate cart items
const cartItems = [
  {
    id: 1,
    imgSrc: assets.shop1,
    title: 'Chevrefrit au miel',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 14.00,
    total: 14.00,
  },
  {
    id: 2,
    imgSrc: assets.shop2,
    title: 'Carpaccio de daurade',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 7.99,
    total: 7.99,
  },
  {
    id: 3,
    imgSrc: assets.shop3,
    title: 'Stracciatella',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 11.00,
    total: 11.00,
  },
];
const CartItem = ({ item, onQuantityChange, onRemove }) => {
    const handleIncrement = () => {
      onQuantityChange(item.id, 1);
    };
  
    const handleDecrement = () => {
      onQuantityChange(item.id, -1);
    };
  
    return (
      <div className="sb-cart-item">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <a className="sb-product" href="product.html">
              <div className="sb-cover-frame">
                <img src={item.imgSrc} alt="product" />
              </div>
              <div className="sb-prod-description">
                <h4 className="sb-mb-10">{item.title}</h4>
                <p className="sb-text sb-text-sm">{item.description}</p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <div className="multi-select">
              <div className="minus" onClick={handleDecrement}>-</div>
              <h1>{item.quantity}</h1>
              <div className="add" onClick={handleIncrement}>+</div>
            </div>
          </div>
          <div className="col-3 col-lg-1">
            <div className="sb-price-1"><span>Price: </span>${item.price.toFixed(2)}</div>
          </div>
          <div className="col-3 col-lg-1">
            <div className="sb-price-2"><span>Total: </span>${item.total.toFixed(2)}</div>
          </div>
          <div className="col-1">
            <a href="#." className="sb-remove" onClick={() => onRemove(item.id)}>Remove</a>
          </div>
        </div>
      </div>
    );
  };
  
  
  const CartComponent = () => {
    const [items, setItems] = useState(cartItems);
  
    const handleQuantityChange = (id, change) => {
      setItems(prevItems =>
        prevItems.map(item => {
          if (item.id === id) {
            const newQuantity = Math.max(1, item.quantity + change);
            return { 
              ...item, 
              quantity: newQuantity,
              total: (item.price * newQuantity).toFixed(2) // Update total based on new quantity
            };
          }
          return item;
        })
      );
    };
  
    const handleRemove = (id) => {
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    };
  
    const subtotal = items.reduce((acc, item) => acc + parseFloat(item.total), 0);
    const shipping = 5.00;
    const total = (subtotal + shipping).toFixed(2);
  
    return (
      <section className="sb-p-90-90">
        <div className="container">
          <div className="sb-cart-table">
            <div className="sb-cart-table-header">
              <div className="row">
                <div className="col-lg-6">Product</div>
                <div className="col-lg-3">Quantity</div>
                <div className="col-lg-1">Price</div>
                <div className="col-lg-1">Total</div>
                <div className="col-lg-1"></div>
              </div>
            </div>
            {items.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="sb-cart-total">
                  <div className="sb-sum">
                    <div className="row">
                      <div className="col-8">
                        <div className="sb-total-title">Subtotal:</div>
                      </div>
                      <div className="col-4">
                        <div className="sb-price-1 text-right">${subtotal.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="sb-sum">
                    <div className="row">
                      <div className="col-8">
                        <div className="sb-total-title">Estimated shipping:</div>
                      </div>
                      <div className="col-4">
                        <div className="sb-price-1 text-right">${shipping.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="sb-realy-sum">
                    <div className="row">
                      <div className="col-8">
                        <div className="sb-total-title">Total:</div>
                      </div>
                      <div className="col-4">
                        <div className="sb-price-2 text-right">${total}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-cart-btns-frame text-right">
                  <a href="shop-1.html" className="sb-btn sb-btn-2 sb-btn-gray">
                    <span className="sb-icon">
                      <img src={assets.arrow2} alt="icon" />
                    </span>
                    <span>Continue shopping</span>
                  </a>
                  <a href="checkout.html" className="sb-btn sb-m-0">
                    <span className="sb-icon">
                      <img src={assets.arrow} alt="icon" />
                    </span>
                    <span>Checkout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CartComponent;
  
