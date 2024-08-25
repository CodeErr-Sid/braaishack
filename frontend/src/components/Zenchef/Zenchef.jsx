import React from 'react';
import './Zenchef.css';

const ZenchefBooking = () => {
  return (
    <div className="zenchef_body">
    <div className="widget-container">
      <iframe
        src="https://bookings.zenchef.com/results?rid=344015&showCollapsed=1"
        allow="payment"
        title="Zenchef Booking"
      ></iframe>
    </div>
    </div>
  );
};

export default ZenchefBooking;
