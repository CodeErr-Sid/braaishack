import React, { useEffect } from 'react';
import './Location.css';
import gsap from 'gsap';

export default function Location() {

      useEffect(() => {
    gsap.to(".section-section__container", {
      backgroundColor: "black",
      duration: 2,
      scrollTrigger: {
        trigger: ".section-section__container",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    });
    gsap.from(
      ".content-box .right-content h2 , .content-box .right-content p",
      {
        x: 500,
        duration: 1,
        scaleY: 1.4,
        scrollTrigger: {
          trigger: ".section-section__container",
          start: "top 90%",
          end: "top 50%",
          scrub: 6,
        },
      }
    );
    gsap.from(".content-box .left-number h1", {
      x: -500,
      duration: 1,
      opacity:0,
      scrollTrigger:{
        trigger:'.section-section__container',
        start: "top 90%",
          end: "top 50%",
          scrub: 6,
      }
    });
  });



    const contentArray = [
        {
            leftNumber: '01',
            rightTitle: 'City Center Charm ',
            rightContent: 'Nestled in the city’s lively core, we provide a cozy retreat from the daily grind. Come in and enjoy a perfect mix of warmth and excitement!'
        },
        {
            leftNumber: '02',
            rightTitle: 'Delicious Delights',
            rightContent: "We've got mouthwatering dishes that'll knock your socks off. Dive in and taste the best around!"
        },
        {
            leftNumber: '03',
            rightTitle: 'Timeless Tradition',
            rightContent: 'Serving up smiles with a touch of history. Join us and experience our warm, welcoming legacy.'
        },
        {
            leftNumber: '04',
            rightTitle: 'Unforgettable Experience',
            rightContent: "Every visit is a treat with flavors and ambiance that'll stick with you. Swing by and make some great memories!"
        },
        {
            leftNumber: '05',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
          leftNumber: '06',
          rightTitle: 'We are located in the city center',
          rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
      }
    ];

    return (
        <div className='section-section__container'>
            {contentArray.map((item, index) => (
                <div key={index} className='content-box'>
                    <div className='left-number'>
                        <h1 style={{marginRight:'2rem'}}>{item.leftNumber}</h1>
                    </div>
                    <div className='right-content'>
                        <h2>{item.rightTitle}</h2>
                        <p>{item.rightContent}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
