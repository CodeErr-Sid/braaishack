import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from 'react-toastify';
import axios from "axios";


const Navbar = ({ setShowLogin, setShowMiniCart, setIsLoggedin, isLoggedin }) => {
  const {url, loadCartData } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();


  const logout = async () => {

    try {
        // Send a request to the server to clear the token
        await axios.post(`${url}/api/user/logout`, {}, {
            withCredentials: true // Ensure cookies are sent with the request
        });

        // Clear token from local storage and reset application state
        localStorage.removeItem("token");
        setToken(""); // Clear token state
        setIsLoggedin(false); // Update login state
        setShowLogin(false); // Hide login modal if it is open
        setShowLogout(false); // Hide logout button if it is open
        loadCartData({ token: "" }); // Reset cart data

        toast.success("Logged out successfully.");
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong during logout. Please try again.");
    }
};


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleLogin = () => {
    setShowLogin(prevShowLogin => !prevShowLogin);
  };

  const toggleLogout = () => {
    setShowLogout(prevShowLogout => !prevShowLogout);
    console.log(showLogout)
  };

  const toggleMiniCart = () => {
    setShowMiniCart((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="close-icon" onClick={toggleMenu}>
          X
        </div>
        <Link
          to="/"
          onClick={() => {
            setMenu("HOME");
            toggleMenu();
          }}
          className={`${menu === "HOME" ? "active" : ""}`}
        >
          HOME
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setMenu("PHOTOS");
            toggleMenu();
          }}
          className={`${menu === "PHOTOS" ? "active" : ""}`}
        >
          ABOUT
        </Link>
        <Link
          to="/menu2"
          onClick={() => {
            setMenu("MENUS");
            toggleMenu();
          }}
          className={`${menu === "MENUS" ? "active" : ""}`}
        >
          MENUS
        </Link>
        {/* <Link
          to="/shop"
          onClick={() => {
            setMenu("REVIEWS");
            toggleMenu();
          }}
          className={`${menu === "REVIEWS" ? "active" : ""}`}
        >
          FROZEN DELIGHT
        </Link> */}
        <Link
          to="/gift-section"
          onClick={() => {
            setMenu("REVIEWS");
            toggleMenu();
          }}
          className={`${menu === "REVIEWS" ? "active" : ""}`}
        >
          GIFT
        </Link>
        {/*
        <Link
          to="/PlaceOrder"
          onClick={() => {
            setMenu("EVENTS");
            toggleMenu();
          }}
          className={`${menu === "EVENTS" ? "active" : ""}`}
        >
          EVENTS
        </Link>
         <a
          href="#footer"
          onClick={() => {
            setMenu("PRESS");
            toggleMenu();
          }}
          className={`${menu === "PRESS" ? "active" : ""}`}
        >
          PRESS
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("MAP&CONTACT");
            toggleMenu();
          }}
          className={`${menu === "MAP&CONTACT" ? "active" : ""}`}
        >
          MAP&CONTACT
        </a> */}
        <a href="https://sunnysidecafe.vercel.app/">SunnySide Cafe</a>
        <a href="https://digispirits28.wixstudio.io/my-site-4/">PUB</a>
      </div>

      <div className={`navbar-end ${isMenuOpen ? "open" : "closed"}`}>
        <div className="icon-container" onClick={toggleMiniCart}>
          <img src={assets.cart} alt="cart icon" />
        </div>
        <div className="icon-container2" onClick={isLoggedin ? toggleLogout : toggleLogin}>
          <img src={assets.login_icon} alt="cart icon" />
          {isLoggedin && showLogout && <button className={`br-logout-btn ${showLogout ? "btn-scale-up" : "btn-scale-down"}`} onClick={logout}>Logout</button>}
        </div>
        <div className="menubtn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
