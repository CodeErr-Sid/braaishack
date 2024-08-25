import React, { useEffect } from 'react'
import "./Promo.css";
import { assets } from '../../assets/assets';
import gsap from 'gsap';



  // useEffect(() => {
  //   gsap.from('.left-promo__section h1, .left-promo__section p', {
  //     x: -500,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".main-section",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });

  //   gsap.from('.left-promo__section button', {
  //     opacity: 0,
  //     y: 150,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".main-section",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });

  //   gsap.from('.right-promo__section img', {
  //     x: 500,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".main-section",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  export default function Promo() {
  return (
     <div className="main-section">
            <img src={assets.b3} alt="" className="b2" />
            <img src={assets.b4} alt="" className="b3" />
        <div className="left-promo__section">
            <h1>Promo <span className='gold-txt'>Video</span></h1>
            <h1>Restaurant is like a Theater. Our task is to <span className='gold-txt'>amaze you!</span></h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>
            {/* <button>Promo Video</button> */}
        </div>
        <div className="right-promo__section">
        <video
        src={assets.promovideo}
        type="video/mp4"
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto' }}
      >
        Your browser does not support the video tag.
      </video>
        </div>
     </div>
  )
}
