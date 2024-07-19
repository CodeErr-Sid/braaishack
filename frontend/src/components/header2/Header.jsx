import React, { useEffect } from 'react';
import './Header.css';
import gsap from 'gsap';

const Header = ({ title, content, btn, imgsrc }) => {
  useEffect(() => {
    gsap.from('.header-content2 h1, .header-content2 p', {
      x: -500,
      duration: 1,
    });

    gsap.from('.header-content2 button', {
      opacity: 0,
      y: 150,
      duration: 1,
    });

    gsap.from('.header-images2 img', {
      x: 500,
      duration: 1,
    });
  }, []);

  return (
    <header className="header2">
      <div className="header-content2">
        <h1>{title}</h1>
        <p>{content}</p>
        <button>{btn}</button>
      </div>
      <div className="header-images2">
        <div className="radiant-background"></div>
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
