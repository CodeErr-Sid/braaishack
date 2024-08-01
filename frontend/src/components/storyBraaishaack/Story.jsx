import React, { useEffect } from 'react';
import './Story.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    // useEffect(() => {
    //     gsap.fromTo(".Story-img", 
    //         {
    //             opacity: 0,
    //             x: -120 
    //         }, 
    //         {
    //             opacity: 1, 
    //             x: 0, 
    //             duration: 2, 
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".Story-img",
    //                 start: "top 80%", 
    //                 end: "bottom 60%", 
    //                 scrub: 1 
    //             }
    //         }
    //     );
        
    //     gsap.from(".Story-contents", {
    //         opacity: 0,
    //         y: 50,
    //         duration: 2,
    //         ease: "power1.out",
    //         delay: 0.5,
    //         scrollTrigger: {
    //             trigger: ".Story-contents",
    //             start: "top 75%",
    //             end: "bottom 25%",
    //             scrub: 1 
    //         }
    //     });
    // }, []);

    return (
        <div className="Story">
            <div className="Story-img">
                <img src={assets.storyimg} alt="" />
            </div>
            <div className="Story-contents">
                <h2>STORY OF BRAAI SHAACK</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="pro">
                    <div className="proimg">
                        <img src={assets.steek} alt="" />
                    </div>
                    <div className="protitle">
                        <div className="proname">Inthisar</div>
                        <div className="prosubname">developer</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
