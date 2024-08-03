import React, { useEffect } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import gsap from 'gsap'


const Header = ({ title, content, btn, imgsrc, overlay }) => {
    const overlayImages = overlay.slice(0, 7);

    // useEffect(() => {
    //     gsap.from(".header .header-contents", {
    //         x: -120,
    //         duration: 1,
    //     });

    //     gsap.from(".header .header-img", {
    //         x: 120,
    //         duration: 1,
    //     });
    // }, []);

    return (
        <div className="header">
            <div className="header-contents">
                <h2
                    style={{
                        animation: "bounceIn 0.6s",
                        animationFillMode: "both",
                    }}
                >
                    {title}
                </h2>
                <p>{content}</p>
                <button>{btn}</button>
            </div>
            <div className="header-img">
                <div className="radiant-background2"></div>
                <div className="overlay-img smoke-image">
                    {overlayImages.map((src, index) => (
                        <img key={index} src={src} alt={`overlay-img-${index} overlay-image`} />
                    ))}
                </div>
                <img src={imgsrc} alt="Header" className='header-main_img rotate-image' />
            </div>
        </div>
    )
}

export default Header;
