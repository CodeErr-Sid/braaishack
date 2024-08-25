import React from 'react';
import { assets } from '../../assets/assets'; // Ensure this path is correct
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="sb-call-to-action">
      <div className="sb-bg-3"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="sb-cta-text text-color">
              <h1 className="sb-mb-15 text-color">
                <sup className='sup'>-</sup><span className="sb-title-lg ">50</span><sup className='sup'>%</sup> Discount <br /> for all* burgers!
              </h1>
              <p className="sb-text sb-mb-30 text-color">
                *Consectetur numquam poro nemo veniam<br />eligendi rem adipisci quo modi.
              </p>
              {/* Button */}
              <a href="product.html" className="sb-btn">
                <span className="sb-icon">
                  <img src={assets.cart} alt="cart icon" />
                </span>
                <span>Get it now!</span>
              </a>
              {/* Button end */}
              {/* Button */}
              <a href="menu-2.html" className="sb-btn sb-btn-2 sb-btn-gray">
                <span className="sb-icon">
                  <img src={assets.menuicon} alt="menu icon" />
                </span>
                <span>Menu</span>
              </a>
              {/* Button end */}
            </div>
          </div>
          <div className="col-lg-6"> 
            <div className="sb-illustration-6">
              <img src={assets.burger3} alt="burger" className="sb-burger" />
              <div className="sb-cirkle-1"></div>
              <div className="sb-cirkle-2"></div>
              <div className="sb-cirkle-3"></div>
              <div className="sb-cirkle-4"></div>
              <div className="sb-cirkle-5"></div>
              <img src={assets.icon1} alt="phones" className="sb-pik-2" />
              <img src={assets.icon2} alt="phones" className="sb-pik-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
