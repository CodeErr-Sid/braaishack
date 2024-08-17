import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./MenuNav.css";

gsap.registerPlugin(ScrollTrigger);

const MenuNav = ({ setSelectedMenu, Menubtndata }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategorySelection = (category) => {
    setActiveCategory(category);
    setSelectedMenu(category === "" ? [] : Menubtndata[category]);
  };

  return (
    <div className="btnmain">
      <div className="Menubtn">
        {Object.keys(Menubtndata).map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleCategorySelection(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuNav;
