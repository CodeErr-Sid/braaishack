import React, { useEffect } from "react";
import "./Details.css";
import { assets } from "../../assets/assets";
import gsap from "gsap";


// useEffect(() => {
//   gsap.to(".details-section", {
//     scrollTrigger: {
//       trigger: ".details-section",
//       start: "top 50%",
//       end: "top 30%",
//       scrub: 1,
//     },
//   });
//   gsap.from(
//     ".details-section__container__right h1 , .details-section__container__right p",
//     {
//       y: 200,
//       duration: 1,
//       scaleY: 1.4,
//       scrollTrigger: {
//         trigger: ".details-section",
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 1,
//       },
//     }
//   );
//   gsap.from(".details-section__container__left img", {
//     x: -100,
//     duration: 1,
//     scrollTrigger:{
//       trigger:'.details-section',
//       start: "top 50%",
//         end: "top 30%" ,
//         scrub: 1,
//     }   / ./
//   }); 
// });
export default function Details() {
  return (
    <div className="details-section">
      <img className="b1" src={assets.b1} alt="" />
      <img src={assets.b3} alt="" className="b3" />
      <div className="details-section__container">
        <div className="details-section__container__left">
          <img src={assets.story} alt="" />
        </div>

        <div className="details-section__container__right">
          <h1>Story Of <span>Braai Shack</span> </h1>
          <p>
            A Culinary Journey Through Our Family's Heritage - Step into our beloved kitchen, where the art of cooking is a cherished tradition passed down through generations. Since childhood, we have been captivated by the rich, soulful flavors of Africa, and that passion continues to inspire every dish we create.  At Braai Shack, we invite you to unwind and indulge in a dining experience that transcends the plate. Here, every bite is infused with our family's history, every flavor tells a story, and every moment is a celebration of togetherness.   Join us in our world, where tradition meets elegance, and each visit feels like coming home—familiar yet beautifully refined. Let your senses be delighted as you savor the essence of our culinary journey.
          </p>
          <div className="name_container">
            <div className="name_container__left">
              <div className="profile"></div>
            </div>
            <div className="name_container__right">
              <p className="font-style1">Roz</p>
              {/* <p className=" font-style2">Rozlin</p> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
