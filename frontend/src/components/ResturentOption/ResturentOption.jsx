import React from 'react'
import './ResturentOption.css';
import {assets} from "../../assets/assets";

const ResturentOption = () => {
  return (
    <>
    <div className="main">
      <h1 className='mainhead'>What do you like Today ?</h1>
      <div className="menulists">
        <div className="menulist">
          <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div>
          <div className="menucontent">
            <h1>hello</h1>
            <p className='para'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResturentOption