import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <div className="close-icon" onClick={toggleMenu}>X</div>
        <Link to="/menu" onClick={() => { setMenu("MENUS"); toggleMenu(); }} className={`${menu === "MENUS" ? "active" : ""}`}>MENUS</Link>
        <a href='#explore-menu' onClick={() => { setMenu("PHOTOS"); toggleMenu(); }} className={`${menu === "PHOTOS" ? "active" : ""}`}>PHOTOS</a>
        <a href='#app-download' onClick={() => { setMenu("REVIEWS"); toggleMenu(); }} className={`${menu === "REVIEWS" ? "active" : ""}`}>REVIEWS</a>
        <a href='#footer' onClick={() => { setMenu("EVENTS"); toggleMenu(); }} className={`${menu === "EVENTS" ? "active" : ""}`}>EVENTS</a>
        <a href='#footer' onClick={() => { setMenu("PRESS"); toggleMenu(); }} className={`${menu === "PRESS" ? "active" : ""}`}>PRESS</a>
        <a href='#footer' onClick={() => { setMenu("MAP&CONTACT"); toggleMenu(); }} className={`${menu === "MAP&CONTACT" ? "active" : ""}`}>MAP&CONTACT</a>
        <button onClick={() => { alert('Pro will make'); toggleMenu(); }}>BOOK A TABLE</button>
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
