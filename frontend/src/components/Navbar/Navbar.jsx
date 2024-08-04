import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import MiniCart from "../MiniCart/MiniCart";

const Navbar = ({ setShowLogin, setShowMiniCart }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleMiniCart = () => {
    setShowMiniCart((prevState) => !prevState); // Toggle MiniCart visibility
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
          to="/menu2"
          onClick={() => {
            setMenu("MENUS");
            toggleMenu();
          }}
          className={`${menu === "MENUS" ? "active" : ""}`}
        >
          MENUS
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setMenu("PHOTOS");
            toggleMenu();
          }}
          className={`${menu === "PHOTOS" ? "active" : ""}`}
        >
          PHOTOS
        </Link>
        <Link
          to="/GiftSection"
          onClick={() => {
            setMenu("REVIEWS");
            toggleMenu();
          }}
          className={`${menu === "REVIEWS" ? "active" : ""}`}
        >
          GiftSection
        </Link>
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
        </a>
      </div>

      <div className={`navbar-end fill ${isMenuOpen ? "open" : "closed"}`}>
        <div className="icon-container" onClick={toggleMiniCart}>
          <img src={assets.cart} alt="cart icon" />
        </div>
        <FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B" }} />
      </div>

       {/* Conditionally render MiniCart */}

      <div className="menubtn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
