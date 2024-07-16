import React from 'react';
import './Header.css';
// import Smoke from '../../assets/Smoke.mp4'; 

const Header = ({ title, content, btn, imgsrc }) => {
  return (
    <header className="header2">
      <div className="header-content2">
        <h1>{title}</h1>
        <p>{content}</p>
        <button>{btn}</button>
      </div>
      <div className="header-images2">
        {/* <video className="background-video" autoPlay loop muted>
          <source src={Smoke} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {imgsrc.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`header-image-${index}`}
            className={`${image.className} float`} 
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
