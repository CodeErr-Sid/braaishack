import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = ({title , content , btn , imgsrc}) => {
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
