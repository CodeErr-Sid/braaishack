import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // Uncomment the following if you want to use GSAP animations
  // useEffect(() => {
  //   gsap.from(".footer-content-left", {
  //     opacity: 0,
  //     x: -100,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".footer-content-left",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 5,
  //     }
  //   });

  //   gsap.from(".footer-content-right", {
  //     opacity: 0,
  //     x: 100,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".footer-content-right",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 5,
  //     }
  //   });

  //   gsap.from(".babyfoot", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".babyfoot",
  //       start: "top 90%",
  //       end: "top 70%",
  //       scrub: 5,
  //     }
  //   });
  // }, []);

  return (
    <footer>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Helmet>
      <div className="footer-container">
        <div className="footer-section footer-content-left foot">
          <div className="logo">
            <img src={assets.logo} alt="Logo" />
          </div>
          <p>42 Church Street, Wolverton MK 12 5JN Milton Keynes</p>
          <p className="ph-no">+01908 31383</p>
        </div>
        <div className="footer-section footer-content-left">
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-caret-right"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-caret-right"></i> About Us
              </Link>
            </li>
            <li>
              <Link to="/menu2">
                <i className="fas fa-caret-right"></i> Menu
              </Link>
            </li>
            <li>
              <Link to="/gift-section">
                <i className="fas fa-caret-right"></i> Gift
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-content-left">
          <ul>
          <li>
              <a href="#">
                <i className="fas fa-envelope"></i> Contact Us
              </a>
            </li>
            <li>
              <a href="https://sunnysidecafe.vercel.app" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i> Sunny Side Cafe
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-globe"></i> Queen Victoria PUB
              </a>
            </li>
            
          </ul>
        </div>
        <div className="footer-section babyfoot">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/braaishack/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Braai Shaark. All rights reserved.</p>
        <a href="#" className="back-to-top" aria-label="Back to top">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
