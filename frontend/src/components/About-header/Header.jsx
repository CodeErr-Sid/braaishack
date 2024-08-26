import React, { useEffect } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';




    // useEffect(()=>{
    //     gsap.to('.header-contents3',{
    //         background:'#232323',
    //         color:'black',
    //         duration:1,
    //     })
    //     gsap.from('.header-contents3 h2',{
    //         y:50,
    //         duration:1,
    //         opacity:0,
    //     });
    //     gsap.from('.header-contents3 button',{
    //         y:50,
    //         duration:1,
    //         opacity:0,
    //     });
    // },[])
    const Header = ({header_title,header_btn}) => {
    return (
        <div className="header3">
            <div className='background'></div>
            <div className="header-contents3">
                <h2 className="header-title3">{header_title}</h2>
                {/* <button className="header-btn3">{header_btn}</button> */}
            </div>
        </div>
    );
}

export default Header;
