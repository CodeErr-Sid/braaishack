import React, { useEffect } from 'react';
import './Location.css';
import gsap from 'gsap';

export default function Location() {

  //     useEffect(() => {
  //   gsap.to(".section-section__container", {
  //     backgroundColor: "black",
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: ".section-section__container",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.from(
  //     ".content-box .right-content h2 , .content-box .right-content p",
  //     {
  //       x: 500,
  //       duration: 1,
  //       scaleY: 1.4,
  //       scrollTrigger: {
  //         trigger: ".section-section__container",
  //         start: "top 50%",
  //         end: "top 30%",
  //         scrub: 5,
  //       },
  //     }
  //   );
  //   gsap.from(".content-box .left-number h1", {
  //     x: -500,
  //     duration: 1,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:'.section-section__container',
  //       start: "top 50%",
  //         end: "top 30%",
  //         scrub: 5,
  //     }
  //   });
  // });



    const contentArray = [
        {
            leftNumber: '01',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '02',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '03',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '04',
            rightTitle: 'We are located in the city center',
            rightContent: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo'
        },
        {
            leftNumber: '05',
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
