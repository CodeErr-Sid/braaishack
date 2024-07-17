import React from 'react'
import './Story.css'
import { assets } from '../../assets/assets'

const Story = () => {
  return (
    <>
    <div className="Story">

            <div className="Story-img">
                <img src={assets.storyimg} alt="" />
            </div>
            <div className="Story-contents">
                <h2>STORY OF BRAAI SHAACK</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="pro">
                    <div className="proimg">
                        <img src={assets.steek} alt="" />
                    </div>
                    <div className="protitle">
                        <div className="proname">Inthisar</div>
                        <div className="prosubname">devloper</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Story