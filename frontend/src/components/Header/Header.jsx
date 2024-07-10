import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        // <div className='header'>
        //     <div className='header-contents'>
        //         <h2>Order your favourite food here</h2>
        //         <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        //         <button>View Menu</button>
        //     </div>
        // </div>
        <>
        <div className="header">
            <div className="header-contents">
                <h2>BRAAI SHAACK</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>BOOK A TABLE</button>
            </div>
            <div className="header-img">
                <img src={assets.steek} alt="" />
            </div>
        </div>
        </>
    )
}

export default Header
