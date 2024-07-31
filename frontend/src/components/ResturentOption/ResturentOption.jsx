import React, { useEffect } from 'react'
import './ResturentOption.css';
import { assets } from "../../assets/assets";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ResturentOption = () => {
  // useEffect(() => {

  //   gsap.from(".main .mainhead", {
  //     x: -120,
  //     duration: 0.7,
  //     scrollTrigger: {
  //       trigger: ".main",
  //       start: "top 80%", 
  //       end: "bottom top", 
  //       scrub: 2, 
  //     },
  //   });

  
  //   gsap.utils.toArray(".menulist").forEach((card, index) => {
  //     gsap.from(card, {
  //       scale: 0.9, 
  //       opacity: 1, 
  //       duration: 0.7,
  //       delay: index * 0.8,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: "top 80%", 
  //         end: "bottom top", 
  //         scrub: 2, 
  //       },
  //     });
  //   });

 
  //   gsap.to(".main", {
  //     opacity: 1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".main",
  //       start: "bottom bottom", 
  //       end: "bottom top",
  //       scrub: 2,
  //       delay: 0.6 
  //     }
  //   });
  // }, []);

  return (
    <div className="main">
      <h1 className='mainhead'>What do you like Today?</h1>
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
        <div className="menulist">
          <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div>
          <div className="menucontent">
            <h1>hello</h1>
            <p className='para'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="menulist">
          <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div>
          <div className="menucontent">
            <h1>hello</h1>
            <p className='para'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
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
  )
}

export default ResturentOption;
