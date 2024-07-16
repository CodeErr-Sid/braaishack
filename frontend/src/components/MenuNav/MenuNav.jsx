import React from "react";
import "./MenuNav.css";

const MenuNav = ({ setSelectedMenu }) => {
  const Menubtndata = [
    "Starters",
    "Braai Menu",
    "Kids Braai Menu",
    "Braai Sides",
    "Desserts",
  ];

  return (
    <>
      <div className="btnmain">
        <div className="Menubtn">
          {Menubtndata.map((data, index) => (
            <a key={index} href={`#${data.replace(/\s+/g, "")}`} onClick={() => setSelectedMenu(data)}>
              <button>{data}</button>
            </a>
          ))}
        </div>
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
