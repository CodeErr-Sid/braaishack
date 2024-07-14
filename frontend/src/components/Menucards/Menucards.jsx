import React from "react";
import "./Menucards.css";
import { assets } from "../../assets/assets";

const Menucards = () => {
  let cards = [
    {
      img: assets.steek,
      productname: "samosa",
      productprice: "$49",
    },
    {
      img: assets.steek,
      productname: "samosa",
      productprice: "$49",
    },
    {
      img: assets.steek,
      productname: "samosa",
      productprice: "$49",
    },
    {
      img: assets.steek,
      productname: "samosa",
      productprice: "$49",
    },
  ];

  return (
    <>
      <div className="cardmain">
        <h1>Starters</h1>
        <div className="cards">
          {cards.map((card, index) => {
            return (
              <div className="card">
                <div className="cardimg">
                    <img src={card.img} alt="" />
                </div>
                <div className="cardcontent">
                  <div className="product_name">{card.productname}</div>
                  <div className="product_price">{card.productprice}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menucards;
