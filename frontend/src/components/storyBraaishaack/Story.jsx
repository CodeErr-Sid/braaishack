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
                <p>A Culinary Journey Through Our Family's Heritage - Step into our beloved kitchen, where the art of cooking is a cherished tradition passed down through generations. Since childhood, we have been captivated by the rich, soulful flavors of Africa, and that passion continues to inspire every dish we create.  At Braai Shack, we invite you to unwind and indulge in a dining experience that transcends the plate. Here, every bite is infused with our family's history, every flavor tells a story, and every moment is a celebration of togetherness.   Join us in our world, where tradition meets elegance, and each visit feels like coming home—familiar yet beautifully refined. Let your senses be delighted as you savor the essence of our culinary journey.</p>
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
