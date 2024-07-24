import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

import gsap from "gsap";

const Navbar = ({ setShowLogin }) => {
  // gsap animation
  useEffect(() => {
    gsap.from(".navbar .logo", {
      x: -120,
      duration: 1,
    });

    gsap.from(".navbar-menu a", {
      y: -120,
      duration: 1,
    });

    gsap.from(".navbar-menu button", {
      x: 120,
      duration: 1,
    });
  }, []);

  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <div className={`navbar-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div className="close-icon" onClick={toggleMenu}>
          X
        </div>
        <Link
          to="/menu"
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
        <button
          onClick={() => {
            alert("Pro will make");
            toggleMenu();
          }}
        >
          BOOK A TABLE
        </button>
      </div>
      <div className="menubtn" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
