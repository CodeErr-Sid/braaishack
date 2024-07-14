import React from "react";
import "./MenuNav.css";

const MenuNav = ({ title }) => {
  let Menubtndata = [
    "Flames & Braai",
    "Braai Shack Restaurant",
    "Kids Menu",
    "Drinks",
    "Wine List",
  ];

  return (
    <>
      <div className="btnmain">
        <div className="Menubtn">
          {Menubtndata.map((data, index) => {
            return <button>{data}</button>;
          })}
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
