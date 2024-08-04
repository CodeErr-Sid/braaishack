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
  const [activeIndex, setActiveIndex] = useState(null);

  const Menubtndata = [
    "All",
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

  const handleMenuSelection = (menu, index) => {
    setSelectedMenu(menu === "All" ? "" : menu);
    setActiveIndex(index);
  };

  return (
    <div className="btnmain">
      {isSmallScreen ? (
        <>
          <div className="filter-heading" onClick={toggleMenu}>
            Filter by <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className={`Menubtn ${showMenu ? "show" : "hidden"}`}>
            {Menubtndata.map((data, index) => (
              <button
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleMenuSelection(data, index)}
              >
                {data}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="Menubtn-fullscreen">
          {Menubtndata.map((data, index) => (
            <button
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleMenuSelection(data, index)}
            >
              {data}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuNav;
