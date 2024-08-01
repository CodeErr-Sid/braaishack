import React from 'react';
import './Offers.css'; // Assuming you have the CSS styles in this file
import { assets } from '../../assets/assets'; // Adjust the path if necessary

export default function Offers() {
  return (
    <section className="sb-p-0-60">
      <div className="container">
        <div className="row">
          <div className="container-content col-lg-6">
            <div className="sb-promo-frame sb-mb-30">
              <div className="sb-promo-content">
                <div className="sb-text-frame">
                  <h3 className="sb-mb-10"><sup>-</sup> <b className="sb-h2">50</b> <sup>%</sup></h3>
                  <h3 className=" second-child sb-mb-15">Discount for all* burgers!</h3>
                  <p className="sb-text sb-text-sm sb-mb-15">*Et modi itaque praesentium.</p>
                  {/* button */}
                  <a href="product.html" className="sb-btn sb-ppc">
                    <span className="sb-icon">
                      <img src={assets.arrow} alt="icon" />
                    </span>
                    <span>Get it now</span>
                  </a>
                  {/* button end */}
                </div>
                <div className="sb-image-frame">
                  <div className="sb-illustration-4">
                    <img src={assets.burger2} alt="burger" className="sb-burger" />
                    <div className="sb-cirkle-1"></div>
                    <div className="sb-cirkle-2"></div>
                    <div className="sb-cirkle-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-content col-lg-6">
            <div className="sb-promo-frame sb-mb-30">
              <div className="sb-promo-content">
                <div className="sb-text-frame">
                  <h3 className="sb-mb-15 row-2">Visit Starbelly and get your coffee*</h3>
                  <h3 className="sb-mb-10"><b className="sb-h2">For free!</b></h3>
                  <p className="sb-text sb-text-sm sb-mb-15">*Et modi itaque praesentium.</p>
                  {/* button */}
                  <a href="product.html" className="sb-btn sb-ppc">
                    <span className="sb-icon">
                      <img src={assets.arrow} alt="icon" />
                    </span>
                    <span>Get it now</span>
                  </a>
                  {/* button end */}
                </div>
                <div className="sb-image-frame">
                  <div className="sb-illustration-5">
                    <img src={assets.cup} alt="cup" className="sb-cup" />
                    <div className="sb-cirkle-1"></div>
                    <div className="sb-cirkle-2"></div>
                    <div className="sb-cirkle-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
