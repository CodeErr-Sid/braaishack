import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./MenuNav.css";

gsap.registerPlugin(ScrollTrigger);

const MenuNav = ({ setSelectedMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  const Menubtndata = [
    'All',
    "Starters",
    "Braai Menu",
    "Kids Braai Menu",
    "Braai Sides",
    "Desserts",
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   if (isSmallScreen) {
  //     if (showMenu) {
  //       gsap.to(".Menubtn", { duration: 0.5, autoAlpha: 1, y: 0, display: "flex" });
  //     } else {
  //       gsap.to(".Menubtn", { duration: 0.5, autoAlpha: 0, y: -50, display: "none" });
  //     }
  //   } else {
  //     gsap.fromTo(".Menubtn-fullscreen button", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 });
  //   }
  // }, [showMenu, isSmallScreen]);
  const handleMenuSelection = (menu) => {
    if (menu === "All") {
      setSelectedMenu("");
    } else {
      setSelectedMenu(menu);
    }
  };
  // useEffect(() => {
  //   gsap.to(".paragraph", {
  //     scrollTrigger: {
  //       trigger: ".paragraph",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse"
  //     },
  //     duration: 0.5,
  //     autoAlpha: 1,
  //     y: 0
  //   });

  //   gsap.fromTo(".Menubtn-fullscreen button", {
  //     y: -20,
  //     opacity: 0
  //   }, {
  //     scrollTrigger: {
  //       trigger: ".Menubtn-fullscreen",
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse"
  //     },
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     stagger: 0.1
  //   });
  // }, []);

  return (
    <div className="btnmain">
      {isSmallScreen ? (
        <>
          <div className="filter-heading" onClick={toggleMenu}>
            Filter by <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className={`Menubtn ${showMenu ? 'show' : 'hidden'}`}>
            {Menubtndata.map((data, index) => (
              <button key={index} onClick={() => setSelectedMenu(data)}>
                {data}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="Menubtn-fullscreen">
          {Menubtndata.map((data, index) => (
            <button key={index} onClick={() => setSelectedMenu(data)}>
              {data}
            </button>
          ))}
        </div>
      )}


      {/* <p className="paragraph">
      Join us Every weekend 1pm to 10pm and let your taste buds embark on a journey of flavours, in perfect harmony at our Braai Bonanza weekends. Reserve your spot now and get ready to indulge in a culinary extravaganza that will leave you craving for more.
      </p> */}
    </div>
  );
};

export default MenuNav;
