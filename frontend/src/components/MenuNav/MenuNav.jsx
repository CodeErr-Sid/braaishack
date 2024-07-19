import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./MenuNav.css";

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const MenuNav = ({ setSelectedMenu }) => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.from('.btnmain p',{
      y:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:'.btnmain p',
        // markers:true,
        start:'top 80%',
        end:'top 70%',
        scrub:5,
      }
    })
  },[])






  const [showMenu, setShowMenu] = useState(false);
  const Menubtndata = [
    "Starters",
    "Braai Menu",
    "Kids Braai Menu",
    "Braai Sides",
    "Desserts",
  ];

  console.log(typeof setSelectedMenu); // Should log 'function'

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="btnmain">
        <div className="filter-heading" onClick={toggleMenu}>
         Filter by <FontAwesomeIcon icon={faFilter} />
          Filter by <FontAwesomeIcon icon={faFilter} />
        </div>
        {showMenu && (
          <div className="Menubtn">
            {Menubtndata.map((data, index) => (
              <a key={index} href={`#${data.replace(/\s+/g, "")}`} onClick={() => setSelectedMenu(data)}>
                <button>{data}</button>
              </a>
            ))}
          </div>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          atque sequi perspiciatis rem cum quae, natus illum earum, itaque nihil
          necessitatibus nulla aliquid!
        </p>
      </div>
    </>
  );
};


export default MenuNav;