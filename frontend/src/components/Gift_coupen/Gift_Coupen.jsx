import React from 'react'
import './Gift_Coupen.css'
import { assets } from '../../assets/assets'

const Gift_Coupen = () => {



  return (
    <>
    <div className="giftmain">
        <div className="giftsection">
            <div className="giftimg">
                <img src={assets.steek} alt="" />
            </div>
            <div className="giftcontent">
                <h1>50% OFF</h1>
                <h3>BUFFALO EXOTIC STEAK</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum deleniti porro necessitatibus numquam ut facere doloremque, commodi itaque totam!</p>
                <div className="rate"><h1>$44.50</h1> <span> $22.25</span></div>
                <button>GET COUPEN</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default Gift_Coupen