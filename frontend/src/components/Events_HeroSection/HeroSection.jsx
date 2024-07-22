import React, { useEffect } from 'react';
import gsap from 'gsap';
import './HeroSection.css';

export default function HeroSection({ title, imgsrc }) {
  useEffect(() => {
   // Animate the heading from above
   gsap.from(".hero-section h1", {
    y: -100,  // Start position above the viewport
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
  
    // Animate the image
    gsap.from(".hero-image-container img", {
      opacity: 0,
      scale: 1.2,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="hero-section">
      <h1>{title}</h1>
      <div className="hero-image-container">
        <img src={imgsrc} alt="" />
      </div>
    </div>
  );
}
