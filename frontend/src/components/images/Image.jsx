import React from 'react'
import './Image.css'
import { assets } from '../../assets/assets';

export default function Image() {
  return (
   <>
   <div className="image-container">
   <div className="image-style">
   <img src={assets.art} alt=''/>
   </div>
   </div>
   </>
  )
}