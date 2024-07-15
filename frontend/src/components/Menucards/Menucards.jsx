import React from "react";
import "./Menucard.css";
import { assets } from "../../assets/assets";
const sections = [
  {
    title: "Starters",
    cards: [
      {
        img: assets.starters1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.starters2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.starters3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.starters4,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },

  {
    title: "Braai Menu",
    cards: [
      {
        img: assets.braai1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.braai2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.braai3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.braai4,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai5,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai6,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.braai7,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
  {
    title: "Kids Braai Menu",
    cards: [
      {
        img: assets.kids1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.kids2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.kids3,
        productname: "spring roll",
        productprice: "$29",
      },
    ],
  },
  {
    title: "Braai Sides",
    cards: [
      {
        img: assets.sides1,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.sides2,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.sides3,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.sides4,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides5,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides6,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides7,
        productname: "chicken wings",
        productprice: "$59",
      },
      {
        img: assets.sides8,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
  {
    title: "Desserts",
    cards: [
      {
        img: assets.sides9,
        productname: "samosa",
        productprice: "$49",
      },
      {
        img: assets.sides10,
        productname: "pakora",
        productprice: "$39",
      },
      {
        img: assets.sides11,
        productname: "spring roll",
        productprice: "$29",
      },
      {
        img: assets.sides12,
        productname: "chicken wings",
        productprice: "$59",
      },
    ],
  },
]
 

const Menucards = () => {
  return (
    <div className="menucards">
      {sections.map((section, sectionIndex) => (
        <div className="cardmain" key={sectionIndex}>
          <h1>{section.title}</h1>
          <div className="cards">
            {section.cards.map((card, cardIndex) => (
              <div className="card" key={cardIndex}>
                <div className="cardimg">
                  <img src={card.img} alt={card.productname} />
                </div>
                <div className="cardcontent">
                  <div className="product_name">{card.productname}</div>
                  <div className="product_price">{card.productprice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Menucards;
