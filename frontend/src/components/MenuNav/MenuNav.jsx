import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./MenuNav.css";

const MenuNav = ({ setSelectedMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  const Menubtndata = [
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
    setIsSmallScreen(window.innerWidth < 1040);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="btnmain">
      {isSmallScreen ? (
        <>
          <div className="filter-heading" onClick={toggleMenu}>
            Filter by <FontAwesomeIcon icon={faFilter} />
          </div>
          {showMenu && (
            <div className="Menubtn">
              {Menubtndata.map((data, index) => (
                <button key={index} onClick={() => setSelectedMenu(data)}>
                  {data}
                </button>
              ))}
            </div>
          )}
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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        atque sequi perspiciatis rem cum quae, natus illum earum, itaque nihil
        necessitatibus nulla aliquid!
      </p>
    </div>
  );
};

export default MenuNav;
