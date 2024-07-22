import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";

const Filter = ({ setSelectedMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
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

  return (
    <div className="btnmain-new">
      <div className="filter-heading-new" onClick={toggleMenu}>
        Filter by <FontAwesomeIcon icon={faFilter} />
      </div>
      {showMenu && (
        <div className="Menubtn-new">
          {Menubtndata.map((data, index) => (
            <a
              key={index}
              href={`#${data.replace(/\s+/g, "")}`}
              onClick={() => setSelectedMenu(data)}
            >
              <button className="Menubtn-btn-new">{data}</button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
