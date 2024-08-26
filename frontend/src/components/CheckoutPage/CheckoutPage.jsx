import React, { useContext, useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContexts'; // Import the useCart hook
import './Checkout.css'; // Import CSS for styling
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

// Reusable input component
// Reusable input component
const InputField = ({ type, label, required, name, value, onChange }) => (
  <div className="sb-group-input">
    <input
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    />
    <span className="sb-bar"></span>
    <label>{label}</label>
  </div>
);


// Cart item component
const CartItem = ({ item, currency }) => (
  <div className="sb-cart-item">
    <div className="row align-items-center">
      <div className="col-lg-9">
        <a className="sb-product">
          <div className="sb-cover-frame">
            <img src={item.image} alt={item.title} />
            <div className="quantity-red-circle">{item.quantity}</div>
          </div>
          <div className="sb-prod-description">
            <h4 className="sb-mb-10">{item.title}</h4>
            <p className="sb-text sb-text-sm">price: {currency + item.price}</p>
            <p className="sb-text sb-text-sm">{item.description}</p>
          </div>
        </a>
      </div>
      <div className="col-lg-3 text-md-right">
        <div className="sb-price-2"><span>Total: </span>{currency + (item.quantity * item.price).toFixed(2)}</div>
      </div>
    </div>
  </div>
);

const CheckoutPage = () => {
  const { cartItems, loadProductData, currency, token, url } = useContext(StoreContext);
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    street: '',
    postcode: '',
    orderNotes: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (cartItems && Object.keys(cartItems).length > 0) {
        try {
          const data = await loadProductData(cartItems);
          if (data.success) {
            const itemsArray = Object.values(data.data); // Convert object to array
            setItems(itemsArray);
          } else {
            console.error('Failed to fetch product data:', data.message);
            setItems([]); // Handle case where API returns failure
          }
        } catch (error) {
          console.error('Error fetching product data:', error.message);
          setItems([]); // Handle error case
        }
      } else {
        setItems([]); // Handle case where cartItems is empty
      }
    };

    fetchData(); // Call the async function
  }, [cartItems, loadProductData]);

  const shippingCharges = 5;

  const calculateTotal = () => {
    if (cartItems) {
      const productMap = new Map(items.map(item => [item._id, item]));
      const subtotal = Object.entries(cartItems).reduce((acc, [productId, quantity]) => {
        const product = productMap.get(productId);
        const price = product ? parseFloat(product.price) : 0;
        return acc + price * quantity;
      }, 0);
      return subtotal;
    }
    return 0
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assuming formData contains user information (e.g., address), 
    // items contain the cart items, and calculateTotal() gives the total amount
    const orderData = {
      items: items, // Array of cart items
      amount: calculateTotal(), // Total amount for the order
      address: formData, // User's address and contact info
    };

    if(token){
      try {
        // Send the order data to the server
        const response = await axios.post(url + '/api/order/place', orderData, {
          headers: {
            token
          }
        });
  
        // Handle the response from the server
        if (response.data.success) {
          // Redirect user to the Stripe checkout page
          window.location.href = response.data.session_url;
        } else {
          // Handle error from the server (e.g., show a message to the user)
          console.error('Order placement failed:', response.data.message);
          alert('Failed to place order. Please try again.');
        }
      } catch (error) {
        // Handle any errors during the Axios request
        console.error('Error placing order:', error.message);
        alert('An error occurred while placing the order. Please try again later.');
      }
    }else{
      console.log("No request made to server in the absence of token")
    }
    
  };



  return (
    <section className="sb-p-90-90">
      <div className="container" data-sticky-container>
        <div className="row">
          <div className="col-lg-8">
            <form className="sb-checkout-form" onSubmit={handleSubmit}>
              <div className="sb-mb-30">
                <h3>Billing details</h3>
              </div>
              <div className="row">
                {Object.keys(formData).map((key, index) => (
                  <div className="col-lg-6" key={index}>
                    <InputField
                      type={key === 'email' ? 'email' : 'text'}
                      label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      required
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <div className="sb-mb-30">
                <h3>Additional information</h3>
              </div>
              <div className="sb-group-input">
                <textarea
                  name="orderNotes"
                  required
                  value={formData.orderNotes}
                  onChange={handleChange}
                ></textarea>
                <span className="sb-bar"></span>
                <label>Order notes</label>
              </div>
              {/* <div className="sb-mb-30">
                <h3 className="sb-mb-30">Payment method</h3>
                <ul>
                  <li className="sb-radio">
                    <input type="radio" id="option-1" name="paymentMethod" defaultChecked />
                    <label htmlFor="option-1">Direct bank transfer</label>
                    <div className="sb-check"></div>
                  </li>
                  <li className="sb-radio">
                    <input type="radio" id="option-2" name="paymentMethod" />
                    <label htmlFor="option-2">Check payments</label>
                    <div className="sb-check"></div>
                  </li>
                  <li className="sb-radio">
                    <input type="radio" id="option-3" name="paymentMethod" />
                    <label htmlFor="option-3">Cash on delivery</label>
                    <div className="sb-check"></div>
                  </li>
                </ul>
              </div> */}
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
                  {items.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    items.map((item, index) => (
                      <CartItem key={index} item={item} currency={currency} />
                    ))
                  )}
                  <div className="sb-cart-total sb-cart-total-2">
                    <div className="sb-sum">
                      <div className="row">
                        <div className="col-6">
                          <div className="sb-total-title">Subtotal:</div>
                        </div>
                        <div className="col-6">
                          <div className="sb-price-1 text-right">
                            ${calculateTotal().toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sb-realy-sum">
                      <div className="row">
                        <div className="col-6">
                          <div className="sb-total-title">Total:</div>
                        </div>
                        <div className="col-6">
                          <div className="sb-price-2 text-right">${(calculateTotal() + shippingCharges).toFixed(2)}</div>
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
