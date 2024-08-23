import React, { useEffect, useRef } from "react";
import "./Menucard.css";
import { useNavigate } from "react-router-dom";
import { sections } from "../../Cardsdata";
import { assets } from "../../assets/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Menucards = ({ selectedMenu }) => {
  const cardRefs = useRef([]);
  const headingRefs = useRef([]);
  const navigate = useNavigate();

  const handleAddToCart = (section, card) => {
    const remainingCards = section.cards.filter(c => c !== card);
    navigate("/placeorder", { 
      state: { 
        clickedCard: card,
        remainingCards: remainingCards 
      } 
    });
  };

  return (
    <div className="menucards">
      {sections.map((section, sectionIndex) => (
        <div
          className="cardmain"
          id={section.title.replace(/\s+/g, "")}
          key={sectionIndex}
          style={{
            display:
              selectedMenu === section.title || selectedMenu === "" || selectedMenu === "All" ? "block" : "none",
          }}
        >
          <h1 ref={(el) => (headingRefs.current[sectionIndex] = el)}>
            {section.title}
          </h1>
          <div className="cards">
            {section.cards.map((card, cardIndex) => (
              <div
                className="card"
                ref={(el) => (cardRefs.current[cardIndex + sectionIndex * 10] = el)}
                key={cardIndex}
              >
                <div className="cardimg">
                  <img src={assets[card.img]} alt={card.productname} />
                </div>
                <div className="cardcontent">
                  <div className="left-card-content">
                    <div className="product-name">{card.productname}</div>
                    <div className="product-price">{card.productprice}</div>
                  </div>
                  <div className="right-card-content">
                    <button onClick={() => handleAddToCart(section, card)}>Add to Cart</button>
                  </div>
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