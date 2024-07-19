import React, { useEffect } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

import gsap from 'gsap'


const Header = ({title , content , btn , imgsrc}) => {

    useEffect(()=>{
        gsap.from('.header-contents h2, .header-contents p',{
            x:-500,
            duration:1,
        });

        gsap.from('.header-contents button',{
            opacity:0,
            y:150,
            duration:1
        })
    },[])


    return (
        <>
        <div className="header">
            <div className="header-contents">
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{btn}</button>
            </div>
            <div className="header-img">
                <img src={imgsrc} alt="" />
            </div>
        </div>
        </>
    )
}

export default Header
