import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { assets } from "../../assets/assets";
import './cards.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {

  const cards = [
    {
      img: assets.people1,
      title: 'Birthday Party',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
    {
      img: assets.people2,
      title: 'Networking Event',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
    {
      img: assets.people1,
      title: 'Get Together',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
    {
      img: assets.people2,
      title: 'Birthday Party',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
    {
      img: assets.people1,
      title: 'Networking Event',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
    {
      img: assets.people2,
      title: 'Get Together',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
      button: 'Book a Table',
    },
  ];

  useEffect(() => {
  
    gsap.fromTo(".evt-card",
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1
        },
        onStart: () => {
    
          gsap.fromTo(".evt-card .card-imgs img",
            { opacity: 0, y: 30, scale: 1.1 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power1.out" }
          );
          gsap.fromTo(".evt-card .card-title h3",
            { opacity: 0, y: 20, rotate: -10 },
            { opacity: 1, y: 0, rotate: 0, duration: 0.4, ease: "power1.out" }
          );
          gsap.fromTo(".evt-card .card-content p",
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power1.out" }
          );
          gsap.fromTo(".evt-card .card-button button",
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power1.out" }
          );
        }
      }
    );
  }, []);

  return (
    <div className='cards-container'>
      {cards.map((card, index) => (
        <div key={index} className='evt-card'>
          <div className='card-imgs'>
            <img src={card.img} alt='Card Image' />
          </div>
          <div className='card-title'>
            <h3>{card.title}</h3>
          </div>
          <div className='card-content'>
            <p>{card.content}</p>
          </div>
          <div className='card-button'>
            <button>{card.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
