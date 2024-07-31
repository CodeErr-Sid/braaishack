import React, { useEffect } from 'react';
import './Gift_Coupen.css';
import { assets } from '../../assets/assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gift_Coupen = () => {
  // useEffect(() => {
  //   gsap.from('.giftsection', {
  //     scrollTrigger: {
  //       trigger: '.giftsection',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });

  //   gsap.from('.giftcontent h1', {
  //     scrollTrigger: {
  //       trigger: '.giftcontent',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     x: -100,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });

  //   gsap.from('.giftcontent h3', {
  //     scrollTrigger: {
  //       trigger: '.giftcontent',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     x: 100,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });

  //   gsap.from('.giftcontent p', {
  //     scrollTrigger: {
  //       trigger: '.giftcontent',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });

  //   gsap.from('.giftcontent .rate', {
  //     scrollTrigger: {
  //       trigger: '.giftcontent',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     y: -50,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });

  //   gsap.from('.giftcontent button', {
  //     scrollTrigger: {
  //       trigger: '.giftcontent',
  //       start: 'top 80%',
  //       end: 'bottom 20%',
  //       toggleActions: 'play none none none',
  //     },
  //     opacity: 0,
  //     scale: 0.8,
  //     duration: 1,
  //     ease: 'power2.out',
  //   });
  // }, []);

  return (
    <div className="giftmain">
      <div className="giftsection">
        <div className="giftimg">
          <img src={assets.steek} alt="Buffalo Exotic Steak" />
        </div>
        <div className="giftcontent">
          <h1>50% OFF</h1>
          <h3>BUFFALO EXOTIC STEAK</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum deleniti porro necessitatibus numquam ut facere doloremque, commodi itaque totam!</p>
          <div className="rate"><h1>$44.50</h1> <span>$22.25</span></div>
          <button>GET COUPEN</button>
        </div>
      </div>
    </div>
  );
};

export default Gift_Coupen;
