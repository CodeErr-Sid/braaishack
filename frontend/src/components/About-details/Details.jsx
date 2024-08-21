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
  //         end: "top 30%",
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <div className="name_container">
            <div className="name_container__left">
              <div className="profile"></div>
            </div>
            <div className="name_container__right">
              <p className="font-style1">Klaus Mikelson</p>
              <p className=" font-style2">Klaus Mikelson</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
