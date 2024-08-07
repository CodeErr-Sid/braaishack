import React, { useEffect } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import gsap from 'gsap'


const Header = ({ title, content, btn, imgsrc, overlay }) => {

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
            <img className='b5' src={assets.b5} alt="" />
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
                <div className="btn">
                <button>{btn}</button>
                <button>{btn}</button>
                </div>
            </div>
            <div className="header-img">
                <div className="radiant-background2"></div>
                <div className="overlay-img smoke-image">
                    {overlay.map((src, index) => (
                        <img key={index} src={src} alt={`overlay-img-${index} overlay-image`} />
                    ))}
                </div>
                <img src={imgsrc} alt="Header" className='header-main_img' />
            </div>
        </div>
    )
}

export default Header;
