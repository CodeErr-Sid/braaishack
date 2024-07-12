import React from "react";
import "./Event.css";
import { assets } from "../../assets/assets";

const Event = () => {
  return (
    <>
      <div className="Eventmain">
        <h1 className="eventh1">Events</h1>
        <div className="cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={assets.steek} alt="Front Image" />
              </div>
              <div className="card-back">
                <div className="cardimg">
                  <img src={assets.steek} alt="" />
                </div>
                <div className="cbcontent">
                  <h1>Birthday party</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button>Know more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={assets.steek} alt="Front Image" />
              </div>
              <div className="card-back">
                <div className="cardimg">
                  <img src={assets.steek} alt="" />
                </div>
                <div className="cbcontent">
                  <h1>Birthday party</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button>Know more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={assets.steek} alt="Front Image" />
              </div>
              <div className="card-back">
                <div className="cardimg">
                  <img src={assets.steek} alt="" />
                </div>
                <div className="cbcontent">
                  <h1>Birthday party</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button>Know more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={assets.steek} alt="Front Image" />
              </div>
              <div className="card-back">
                <div className="cardimg">
                  <img src={assets.steek} alt="" />
                </div>
                <div className="cbcontent">
                  <h1>Birthday party</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button>Know more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
