import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Features.css';
import { assets } from "../../assets/assets";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const imageData = {
  "events": [
    {
      "title": "Birthday",
      "date": "15 June",
      "src": assets.birthday
    },
    {
      "title": "Birthday",
      "date": "15 July",
      "src": assets.birthday
    },
    {
      "title": "Birthday",
      "date": "15 July",
      "src": assets.birthday
    },
    {
      "title": "Birthday",
      "date": "15 July",
      "src": assets.birthday
    }
  ]
};

export default function Features() {
  // useEffect(() => {
    
  //   gsap.from(".upper-container .left-image", {
  //     x: -200,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".upper-container",
  //       start: "top 75%",
  //       end: "top 50%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".upper-container .right-content", {
  //     x: 200,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".upper-container",
  //       start: "top 75%",
  //       end: "top 50%",
  //       scrub: 1,
  //     }
  //   });

   
  //   gsap.from(".lower-container .left-content", {
  //     y: -100,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".lower-container",
  //       start: "top 75%",
  //       end: "top 50%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".lower-container .right-image .Birthday-images", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: ".lower-container",
  //       start: "top 75%",
  //       end: "top 50%",
  //       scrub: 1,
  //     }
  //   });

  // }, []);
  return (
    <>
      <div className='feature-container'>
        <h1>Features of Braai shack</h1>
        <div className='upper-container'>
          <div className="left-image">
            <div className="image-overlay"></div>
            <img src={imageData.events[0].src} alt={imageData.events[0].title} />
            <div className='image-container'>
              <h2>{imageData.events[0].title}</h2>
              <h2><span>{imageData.events[0].date.split(" ")[0]}</span> {imageData.events[0].date.split(" ")[1]}</h2>
            </div>
          </div>
          <div className="right-content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.</p>
            <button>BUTTON 1</button>
          </div>
        </div>
        <div className='lower-container'>
          <div className="left-content">
            <h1><span>EVENTS </span>UPCOMING</h1>
          </div>
          <div className='left-heading' style={{display:'inline-block'}}>
          <h1>Events Upcoming</h1>
          </div>
          <div className="right-image">
            {imageData.events.slice(1).map((event, index) => (
              <div className="Birthday-images  left-image" key={index}>
                <div className="image-overlay" style={{display:'flex', flexDirection:'row'}}></div>
                <img src={event.src} alt={event.title} />
                <div className='image-container align'>
                  <h2>{event.title}</h2>
                  <h2><span>{event.date.split(" ")[0]}</span> {event.date.split(" ")[1]}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
