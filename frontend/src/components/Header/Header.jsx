import React, { useEffect } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


import gsap from 'gsap'





const Header = ({title, content, btn, imgsrc, overlay}) => {
    const overlayImages = overlay.slice(0, 7); // Ensure we only use the first 7 images

    return (
        <div className="header">
            <div className="header-contents">
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{btn}</button>
            </div>
            <div className="header-img">
                <div className="radiant-background2"></div>
                <div className="overlay-img">
                    {overlayImages.map((src, index) => (
                        <img key={index} src={src} alt={`overlay-img-${index}`} />
                    ))}
                </div>
                <img src={imgsrc} alt="Header" className='header-main_img'/>
            </div>
        </div>
    )
}


export default Header
