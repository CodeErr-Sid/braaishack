import React from 'react';
import { useParams } from 'react-router-dom';
import './TrackOrder.css'; // Assuming you have a CSS file for styling

const TrackOrder = () => {
  const { id } = useParams(); // Get the order ID from the URL

  // Function to handle the call button click
  const handleCallClick = () => {
    window.open('tel:+1234567890'); // Replace with your desired phone number
  };

  // Function to handle the WhatsApp button click
  const handleMessageClick = () => {
    window.open('https://wa.me/1234567890'); // Replace with your desired WhatsApp number
  };

  return (
    <div className='track-order'>
      <h2>Order Tracking: <span className='id-clr'>#{id}</span></h2>
      
      {/* Status Box */}
      <div className='status-box'>
        <span className='status-dot'></span>
        <p>Status: In Transit</p> {/* Replace with dynamic status from the backend */}
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
