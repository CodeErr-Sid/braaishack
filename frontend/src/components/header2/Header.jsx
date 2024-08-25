import React, { useEffect } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';

const Header = ({ title, content, btn, imgsrc }) => {
  // useEffect(() => {
  //   gsap.from('.header-content2 h1, .header-content2 p', {
  //     x: -500,
  //     duration: 1,
  //   });

  //   gsap.from('.header-content2 button', {
  //     opacity: 0,
  //     y: 150,
  //     duration: 1,
  //   });

  //   gsap.from('.header-images2 ', {
  //     x: 500,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <header className="header2">
      <div className="header-content2">
        <h1>{title}</h1> 
        <p>{content}</p>
        <button className='abt-btn'>{btn}</button>
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
    </header>
  );
};

export default Header;
