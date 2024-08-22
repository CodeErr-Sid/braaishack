import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Publication.css';
import { assets } from "../../assets/assets";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    id: 1,
    title: 'Lorem ipsum',
    date: '17 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update1, 
    imageAlt: 'Image description' 
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    date: '18 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update2, 
    imageAlt: 'Image description' 
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    date: '19 July 2024',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    imageSrc: assets.update3, 
    imageAlt: 'Image description'
  }
];

export default function Publication() {
  // useEffect(() => {
  //   gsap.from(".section-01 h1, .section-01 p", {
  //     x: -500,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".section-01",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     }
  //   });

 
  //   gsap.from(".section-02-container", {
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".section-02-container",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".section-02:nth-child(1)", {
  //     x: -100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".section-02:nth-child(1)",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".section-02:nth-child(2)", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".section-02:nth-child(2)",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".section-02:nth-child(3)", {
  //     x: 100,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".section-02:nth-child(3)",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 1,
  //     }
  //   });

  
  //   gsap.from(".section-02 h1", {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.75,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".section-02",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 1,
  //     }
  //   });

  //   gsap.from(".section-02 p", {
  //     y: 30,
  //     opacity: 0,
  //     duration: 0.75,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".section-02",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 1,
  //     }
  //   });

  // }, []);

  return (
    <>
      <section className='updates'>
      <img src={assets.b2} alt="" className="b2" />
      <img src={assets.b5} alt="" className="b3" />
        <div className="publication-container">
          <div className="section-01">
            <h1>Latest Publications</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="section-02-container">
            {publications.map((publication, index) => (
              <div className="section-02" key={publication.id}>
                <img 
                  src={publication.imageSrc} 
                  alt={publication.imageAlt} 
                  className={index === 1 ? 'second-image' : ''}
                />
                <h1>{publication.title}</h1>
                <h1 className='date'>{publication.date}</h1>
                <p>{publication.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
