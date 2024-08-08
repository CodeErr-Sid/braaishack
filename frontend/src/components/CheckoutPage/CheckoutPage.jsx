import React from 'react';
import { useCart } from '../../Context/CartContexts'; // Import the useCart hook
import './Checkout.css'; // Import CSS for styling
import { assets } from '../../assets/assets';

// Reusable input component
const InputField = ({ type, label, required }) => (
  <div className="sb-group-input">
    <input type={type} required={required} />
    <span className="sb-bar"></span>
    <label>{label}</label>
  </div>
);
const CartItems = [
  {
    id: 1,
    image: assets.shop1,
    title: 'Chevrefrit au miel',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 14.00,
    total: 14.00,
  },
  {
    id: 2,
    image: assets.shop2,
    title: 'Carpaccio de daurade',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 7.99,
    total: 7.99,
  },
  {
    id: 3,
    image: assets.shop3,
    title: 'Stracciatella',
    description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp',
    quantity: 1,
    price: 11.00,
    total: 11.00,
  },
];

// Cart item component
const CartItem = ({ item }) => (
  <div className="sb-cart-item">
    <div className="row align-items-center">
      <div className="col-lg-9">
        <a className="sb-product">
          <div className="sb-cover-frame">
            <img src={assets[item.image]} alt={item.title} />
          </div>
          <div className="sb-prod-description">
            <h4 className="sb-mb-10">{item.title}</h4>
            <p className="sb-text sb-text-sm">Quantity: x{item.quantity}</p>
            <p className="sb-text sb-text-sm">{item.description}</p>
          </div>
        </a>
      </div>
      {/* <div className="col-lg-3 text-md-right">
        <div className="sb-price-2"><span>Total: </span>${item.total.toFixed(2)}</div>
      </div> */}
    </div>
  </div>
);
// Dummy data to simulate cart items

const CheckoutPage = () => {
    

  const { cartItems } = useCart();

  console.log(cartItems)

  const calculateTotal = () => {
    // Ensure cartItems is defined and is an array
    if (!Array.isArray(cartItems)) {
      return 0;
    }
  
    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => {
      // Safeguard against undefined item.price
      const price = item.price ? parseFloat(item.price) : 0;
      return acc + price * (item.quantity || 0);
    }, 0);
  
    return subtotal + 5.00; // Adding a fixed shipping cost of $5.00
  };
  

  return (
    <section className="sb-p-90-90">
      <div className="container" data-sticky-container>
        <div className="row">
          <div className="col-lg-8">
            <form className="sb-checkout-form">
              <div className="sb-mb-30">
                <h3>Billing details</h3>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <InputField type="text" label="First name" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="Last name" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="Company name" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="Country" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="City" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="State / Province" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="Street" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="text" label="Postcode" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="tel" label="Phone" required />
                </div>
                <div className="col-lg-6">
                  <InputField type="email" label="Email" required />
                </div>
              </div>
              <div className="sb-mb-30">
                <h3>Additional information</h3>
              </div>
              <div className="sb-group-input">
                <textarea name="name" required></textarea>
                <span className="sb-bar"></span>
                <label>Order notes</label>
              </div>
              <div className="sb-mb-30">
                <h3 className="sb-mb-30">Payment method</h3>
                <ul>
                  <li className="sb-radio">
                    <input type="radio" id="option-1" name="selector" defaultChecked />
                    <label htmlFor="option-1">Direct bank transfer</label>
                    <div className="sb-check"></div>
                  </li>
                  <li className="sb-radio">
                    <input type="radio" id="option-2" name="selector" />
                    <label htmlFor="option-2">Check payments</label>
                    <div className="sb-check"></div>
                  </li>
                  <li className="sb-radio">
                    <input type="radio" id="option-3" name="selector" />
                    <label htmlFor="option-3">Cash on delivery</label>
                    <div className="sb-check"></div>
                  </li>
                </ul>
              </div>
              <button type="submit" className="sb-btn sb-m-0">
                <span className="sb-icon">
                  <img src={assets.arrow} alt="icon" />
                </span>
                <span>Place order</span>
              </button>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="sb-pad-type-2 sb-sticky" data-margin-top="120">
              <div className="sb-co-cart-frame">
                <div className="sb-cart-table">
                  <div className="sb-cart-table-header">
                    <div className="row">
                      <div className="col-lg-9">Product</div>
                      <div className="col-lg-3 text-right">Total</div>
                    </div>
                  </div>
                  {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    cartItems.map((item) => (
                      <CartItem 
                        key={item.id}
                        item={item}
                      />
                    ))
                  )}
                  <div className="sb-cart-total sb-cart-total-2">
                    <div className="sb-sum">
                      <div className="row">
                        <div className="col-6">
                          <div className="sb-total-title">Subtotal:</div>
                        </div>
                        <div className="col-6">
                          {/* <div className="sb-price-1 text-right">
                            ${cartItems.reduce((acc, item) => {
                              const total = item.total ? parseFloat(item.total.slice(1)) : 0;
                              return acc + total * (item.quantity || 0);
                            }, 0).toFixed(2)}
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="sb-realy-sum">
                      <div className="row">
                        <div className="col-6">
                          <div className="sb-total-title">Total:</div>
                        </div>
                        <div className="col-6">
                          <div className="sb-price-2 text-right">${calculateTotal().toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
