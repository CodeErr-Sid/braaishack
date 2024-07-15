import React from 'react';
import './HeroSection.css';

export default function HeroSection({ title, imgsrc }) {
  return (
    <div className="hero-section">
      <h1>{title}</h1>
      <div className="hero-image-container">
        <img src={imgsrc} alt="" />
      </div>
    </div>
  );
}
