import React from 'react'
import './Events_F.css';
import { assets } from '../../assets/assets';

const Events_F = ({title}) => {
  return (
    <>
    <div className="events_main">
        <h1 className='event_h1'>{title}</h1>
        <div className="event_cards">
            <div className="event_card">
                <div className="event_content">
                    <div className="card_data">
                        <h1>15</h1>
                        <h1>June</h1>
                    </div>
                    <div className="card_content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="event_img">
                <div className="image-overlay"></div>
                    <img src={assets.birthday} alt="" />
                    <h1>Birthday</h1>
                </div>
            </div>
            <div className="event_card">
                <div className="event_content">
                    <div className="card_data">
                        <h1>15</h1>
                        <h1>June</h1>
                    </div>
                    <div className="card_content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="event_img">
                <div className="image-overlay"></div>
                    <img src={assets.birthday} alt="" />
                    <h1>Birthday</h1>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Events_F