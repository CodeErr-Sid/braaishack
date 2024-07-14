import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/menu" onClick={() => setMenu("MENUS")} className={`${menu === "MENUS" ? "active" : ""}`}>MENUS</Link>
        <a href='#explore-menu' onClick={() => setMenu("PHOTOS")} className={`${menu === "PHOTOS" ? "active" : ""}`}>PHOTOS</a>
        <a href='#app-download' onClick={() => setMenu("REVIEWS")} className={`${menu === "REVIEWS" ? "active" : ""}`}>REVIEWS</a>
        <a href='#footer' onClick={() => setMenu("EVENTS")} className={`${menu === "EVENTS" ? "active" : ""}`}>EVENTS</a>
        <a href='#footer' onClick={() => setMenu("PRESS")} className={`${menu === "PRESS" ? "active" : ""}`}>PRESS</a>
        <a href='#footer' onClick={() => setMenu("MAP&CONTACT")} className={`${menu === "MAP&CONTACT" ? "active" : ""}`}>MAP&CONTACT</a>
      </ul>
        <button onClick={()=>{alert('Pro will make')}}>BOOK A TABLE</button>

    </div>
  )
}

export default Navbar
