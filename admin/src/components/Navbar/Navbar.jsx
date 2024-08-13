import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../../contexts/AuthContext';


const Navbar = () => {

  const { logout } = useAuth()

  return (
    <div className='navbar'>
      <img className='logo' src={assets.braailogo} alt="" />
      {/* <img className='profile' src={assets.profile_image} alt="" /> */}
      <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#ffffff",}} onClick={logout} />
    </div>
  )
}

export default Navbar
