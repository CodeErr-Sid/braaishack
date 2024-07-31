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
        <div className="left-promo__section">
            <p className='btn-promo'>Promo Video</p>
            <h1>Restaurant is like a Theater. Our task is to amaze you!</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
            </p>
            <button>Promo Video</button>
        </div>
        <div className="right-promo__section">
            <img src={assets.promo} alt=''/>
        </div>
     </div>
  )
}
