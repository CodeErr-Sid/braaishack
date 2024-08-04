import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  //   useEffect(() => {
  //     gsap.from(".footer-content-left", {
  //       opacity: 0,
  //       x: -100,
  //       duration: 0.75,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".footer-content-left",
  //         start: "top 80%",
  //         end: "top 60%",
  //         scrub: 5,
  //       }
  //     });

  //     gsap.from(".footer-content-right", {
  //       opacity: 0,
  //       x: 100,
  //       duration: 0.75,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".footer-content-right",
  //         start: "top 80%",
  //         end: "top 60%",
  //         scrub: 5,
  //       }
  //     });

  //     gsap.from(".babyfoot", {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.75,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: ".babyfoot",
  //         start: "top 90%",
  //         end: "top 70%",
  //         scrub: 5,
  //       }
  //     });

  //   }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-content-left foot" >
          <div className="logo">
            <img src={assets.logo} alt="" />
          </div>
          <p >42 Church Street, Wolverton MK 12 5JN Milton Keynes</p>
<p>01908 313838</p>
        </div>
        <div className="footer-section footer-content-left">

          <ul>
            <li>
              <Link to='/'>
                <i className="fas fa-info-circle"></i> Home
              </Link>
            </li>
            <li>
              <Link to='/menu'>
                <i className="fas fa-envelope"></i> Menus
                            </Link>

            </li>
            <li>
              <Link to='/about'>
                <i className="fas fa-shield-alt"></i> About Us
                            </Link>

            </li>
            <li>
              <Link to='/GiftSection'>
                <i className="fas fa-file-contract"></i> Frozen Delight
                            </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-content-left">

          <ul>
            <li>
              <Link to='/'>
                <i className="fas fa-info-circle"></i> Home
              </Link>
            </li>
            <li>
              <Link to='/menu'>
                <i className="fas fa-envelope"></i> Terms & Condistion
                            </Link>

            </li>
            <li>
              <Link to='/about'>
                <i className="fas fa-shield-alt"></i> Privacy Policy
                            </Link>

            </li>
            <li>
              <Link to='/GiftSection'>
                <i className="fas fa-file-contract"></i> Latest News
                            </Link>

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
            <a href="#" target="_blank" aria-label="Instagram">
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
