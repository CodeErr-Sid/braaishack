import React, { useState } from "react";
import "./PlaceOrder.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PlaceOrder = () => {
  const [rate, setrate] = useState(4.5);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setrate(rate + 4.5);
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setrate(rate > 4.5 ? rate - 4.5 : 4.5);
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <>
      <div className="placeOrder">
        <div className="Orderpeace">
          <div className="Orderimg">
            <img src={assets.steek} alt="" />
          </div>
          <div className="OrderContent">
            <h1>Checken Keema</h1>
            <div className="rates">
              <h1>${rate}</h1>
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
      </div>
    </>
  );
};

export default PlaceOrder;
