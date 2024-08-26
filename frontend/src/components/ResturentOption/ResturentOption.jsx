import React, { useEffect } from 'react'
import './ResturentOption.css';
import { assets } from "../../assets/assets";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faCookie, faBurger, faMartiniGlass } from '@fortawesome/free-solid-svg-icons';

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
      <img className="b1" alt="" src={assets.b2} />
      <img alt="" className="b3" src={assets.b4} />
      <h1 className='mainhead'>What do you like <span>Today?</span></h1>
      <div className="menulists">
        <div className="menulist">
          {/* <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div> */}
          <div className="menucontent">
            <h1>Starters</h1>
            <p className='para'>Start your meal with a bang! Enjoy our crispy, spicy starters that are so tasty, you’ll be hooked from the first bite. </p>
          </div>
          <FontAwesomeIcon icon={faCookie} style={{ fontSize: '3rem' }} />
        </div>
        <div className="menulist">
          {/* <div className="menuimg">
            <img src={assets.steek} alt="" /> 
            </div> */}
          <div className="menucontent">
            <h1>Flames & Braai</h1>
            <p className='para'>Craving that smoky, grilled goodness? Our marinated meats cooked over open flames deliver unbeatable flavor of barbecue.</p>
          </div>
          <FontAwesomeIcon icon={faFireFlameCurved} style={{ fontSize: '3rem' }} />
        </div>
        <div className="menulist">
          {/* <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div> */}
          <div className="menucontent">
            <h1>Burger</h1>
            <p className='para'>Sink into our juicy burgers, bursting with flavor and made to satisfy. Every bite is a mouthwatering experience you won't forget</p>
          </div>
          <FontAwesomeIcon icon={faBurger} style={{ fontSize: '3rem' }} />
        </div>
        <div className="menulist">
          {/* <div className="menuimg">
            <img src={assets.steek} alt="" />
          </div> */}
          <div className="menucontent">
            <h1>Drinks</h1>
            <p className='para'>Refresh yourself with our cool, handcrafted drinks. From zesty mocktails to classic sodas, they’re the perfect complement for the meal</p>
          </div>
          <FontAwesomeIcon icon={faMartiniGlass} style={{ fontSize: '3rem' }} />
        </div>
      </div>
    </div>
  )
}

export default ResturentOption;
