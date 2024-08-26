import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './TrackOrder.css';


const TrackOrder = () => {
  const { id } = useParams(); //  Get the order ID from the URL

  const location = useLocation();

  const { status } = location.state || {}; // Destructure the status from the state

  // Function to handle the call button click
  const handleCallClick = () => {
    window.open('tel:+1234567890');
  };

  // Function to handle the WhatsApp button click
  const handleMessageClick = () => {
    window.open('https://wa.me/1234567890');
  };
  const statusDotColor = (status) => {
    switch (status) {
      case 'Food Processing':
        return 'red';
      case 'Out for delivery':
        return 'yellow';
      case 'Delivered':
        return 'green';
      default:
        return 'gray'; // Fallback color for unknown status
    }
  };



  return (

    <div className='track-order'>

      <h2>Order Tracking: <span className='id-clr'>#{id}</span></h2>

      {/* Status Box */}
      <div className='status-box'>
        <span
          className={`status-dot ${statusDotColor(status)}`}
        ></span>
        <p>Status: {status}</p> {/* Replace with dynamic status from the backend */}
      </div>

      {/* Icons */}
      <div className='action-icons'>
        <i className='fas fa-phone' onClick={handleCallClick}></i>
        <i className='fas fa-comment-dots' onClick={handleMessageClick}></i>
      </div>
    </div>
  );
};

export default TrackOrder;
