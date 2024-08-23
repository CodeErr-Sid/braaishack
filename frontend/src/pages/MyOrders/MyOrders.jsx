import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency, isLoggedin, setShowMiniCart, setShowLogin } = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to generate a random 5-digit order ID
  const generateOrderId = () => {
    return Math.floor(10000 + Math.random() * 90000); // Generates a 5-digit number
  };

  // Function to fetch orders and assign a permanent order ID
  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    const orders = response.data.data;

    // Retrieve stored order IDs from localStorage
    const storedOrderIds = JSON.parse(localStorage.getItem('orderIds')) || {};

    console.log(orders)

    // Assign a random order ID to each order if not already assigned


    // Save the updated order IDs back to localStorage
    localStorage.setItem('orderIds', JSON.stringify(storedOrderIds));

    setData(orders);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // Retrieve stored order IDs for display
  const orderIds = JSON.parse(localStorage.getItem('orderIds')) || {};

  return (
    <div className='my-orders'>
      <h2 className='tittle1'>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt="" />
              <ul>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (<li>{item.name + " x " + item.quantity}</li>);
                } else {
                  return (<li>{item.name + " x " + item.quantity + ", "}</li>);
                }
              })}</ul>
              <p>{currency}{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span> <b>{order.status}</b></p>
              {/* Display the permanent order ID */}
              <p>Order ID: {order._id}</p>
              <button onClick={() => navigate(`/TrackOrder/${order._id}`)}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
