import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./MenuNav.css";

gsap.registerPlugin(ScrollTrigger);

const MenuNav = ({ setSelectedMenu, Menubtndata }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuSelection = (menu, index) => {
    setSelectedMenu(menu === "All" ? "" : menu);
    setActiveIndex(index);
  };

  return (
    <div className="btnmain">
      <div className="Menubtn">
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
    </div>
  );
};

export default MenuNav;
