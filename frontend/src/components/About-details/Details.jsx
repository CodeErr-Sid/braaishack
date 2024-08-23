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
          <h1>Story Of Braai Shack</h1>
          <p>
          Welcome to our family’s cherished kitchen, where the art of cooking has been a heartfelt tradition, passed down through the lanes. Since childhood, we’ve been deeply inspired by the rich, soulful flavors of Africa, and that passion continues to shape every dish we create.
Step in to relax and let us treat you to a dining experience that goes beyond the plate. Here, every bite is infused with our family’s history, every flavor tells a tale, and every moment is a celebration of togetherness. Step into our world, where tradition meets elegance, and where each visit feels like coming home to something familiar, yet beautifully refined and let your senses be delighted.

          </p>
          <div className="name_container">
            <div className="name_container__left">
              <div className="profile"></div>
            </div>
            <div className="name_container__right">
              <p className="font-style1">Rozlin</p>
              <p className=" font-style2">Rozlin</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
