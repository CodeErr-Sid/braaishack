import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./PlaceOrder.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Menucards from "../Menucards/Menucards";

gsap.registerPlugin(ScrollTrigger);

const PlaceOrder = () => {
  const location = useLocation();
  const initialCard = location.state?.clickedCard || {};
  const initialRemainingCards = location.state?.remainingCards || [];

  const [clickedCard, setClickedCard] = useState(initialCard);
  const [remainingCards, setRemainingCards] = useState(initialRemainingCards);

  const basePrice = parseFloat(clickedCard?.productprice?.replace("$", "")) || 4.5;
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const totalPrice = (basePrice * quantity).toFixed(2);

  const orderImgRef = useRef(null);
  const orderContentRef = useRef(null);
  const relatedProductsRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(orderImgRef.current, { opacity: 0, x: -100, duration: 1 });
  //   gsap.from(orderContentRef.current, { opacity: 0, x: 100, duration: 1 });

  //   if (headingRef.current) {
  //     gsap.from(headingRef.current, {
  //       x: -500,
  //       opacity: 0,
  //       duration:0.75,
  //       scrollTrigger: {
  //         trigger: headingRef.current,
  //         start: "top 80%",
  //         end: "bottom 50%",
  //         scrub: 5,
  //       },
  //     });
  //   }

  //   if (paragraphRef.current) {
  //     gsap.from(paragraphRef.current, {
  //       x: -500,
  //       opacity: 0,
  //       duration: 0.75,
  //       scrollTrigger: {
  //         trigger: paragraphRef.current,
  //         start: "top 80%",
  //         end: "bottom 50%",
  //         scrub: 5,
  //       },
  //     });
  //   }

  //   if (cardsRef.current) {
  //     gsap.from(cardsRef.current.querySelectorAll('.card'), {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.75,
  //       stagger: 0.2,

  //       scrollTrigger: {
  //         trigger: paragraphRef.current,
  //         start: "top 75%",
  //         end: "bottom 50%",
  //         scrub: 5,
  //       },
  //     });
  //   }
  // }, [clickedCard]);

  const handleAddToCart = (card) => {
    // // console.log("Adding to cart:", card);
  };

  return (
    <div className="placeOrder">
      <div className="Orderpeace">
        <div className="Orderimg" ref={orderImgRef}>
          <img src={assets.steek} alt={clickedCard?.productname} />
        </div>
        <div className="OrderContent" ref={orderContentRef}>
          <h1>{clickedCard?.productname}</h1>
          <div className="rates">
            <h1>${totalPrice}</h1>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  size="sm"
                  style={{ color: "#FFD43B" }}
                />
              ))}
              <span> (124)</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium pariatur, perspiciatis dolorem ratione aperiam quo
            mollitia similique sed harum ipsa consectetur recusandae
            laudantium!
          </p>
          <div className="option">
            <div className="multi-select">
              <div className="minus" onClick={decrement}>
                -
              </div>
              <h1>{quantity}</h1>
              <div className="add" onClick={increment}>
                +
              </div>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="related-products" ref={relatedProductsRef}>
        <div className="content">
          <h1 ref={headingRef}>It is usually bought together with this product</h1>
          <p ref={paragraphRef}>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
          <div className="cards" ref={cardsRef}>
            {remainingCards.map((card, index) => (
              <div className="card" key={index}>
                <div className="cardimg">
                  <img src={assets[card.img]} alt={card.productname} />
                </div>
                <div className="cardcontent">
                  <div className="left-card-content">
                    <div className="product-name">{card.productname}</div>
                    <div className="product-price">{card.productprice}</div>
                  </div>
                  <div className="right-card-content">
                    <button onClick={() => handleAddToCart(card)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;