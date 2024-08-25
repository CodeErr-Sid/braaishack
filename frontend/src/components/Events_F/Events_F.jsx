import React, { useEffect } from "react";
import "./Events_F.css";
import { assets } from "../../assets/assets";
import gsap from "gsap";

const Events_F = ({ title }) => {
  // useEffect(() => {
  //   gsap.from(".events_main .event_h1", {
  //     y: 500,
  //     duration:1.5,
  //     scrollTrigger: {
  //       trigger: ".events_main",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.from('.event_cards .event_card ,.event_card .event_content .card_data',{
  //       x:500,
  //       scale:1.5,
  //       backgroundColor:'black',
  //       color:'white',
  //       duration:2,
  //        scrollTrigger: {
  //       trigger: ".events_main",
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });

  // });

  let events = [
    {
      data: 15,
      month: "JUNE",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: assets.birthday,
      subtitle: "Birthday",
    },
    {
      data: 15,
      month: "JUNE",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: assets.birthday,
      subtitle: "Birthday",
    },
  ];

  return (
    <>
      <div className="events_main">
        <img src={assets.b1} alt="" className="b1" />
        <h1 className="event_h1">Our <span>Events</span> </h1>
        <div className="event_h2">
        <p className="margin-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi asperiores, laudantium officiis sint reprehenderit ratione nesciunt nobis magni itaque et enim minima, suscipit, pariatur non tempore distinctio! Impedit, voluptas doloribus.</p>
        </div>
        <div className="event_cards">
          {events.map((data, index) => {
            return (
              <div key={index} className="event_card">
                <div className="event_content">
                  <div className="card_data">
                    <h1>{data.data}</h1>
                    <h1>{data.month}</h1>
                  </div>
                  <div className="card_content">
                    <p>{data.para}</p>
                  </div>
                </div>
                <div className="event_img">
                  <div className="image-overlay"></div>
                  <img src={data.img} alt="" />
                  <h1>{data.subtitle}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events_F;
