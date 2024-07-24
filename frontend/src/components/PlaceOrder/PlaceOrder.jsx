import React from 'react'
import './PlaceOrder.css'
import { assets } from '../../assets/assets'

const PlaceOrder = () => {
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
                    <h1>$4.50</h1>
                    <div className="rating">(124)</div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium pariatur, perspiciatis dolorem ratione aperiam quo mollitia similique sed harum ipsa consectetur recusandae laudantium!</p>
                <div className="option">
                    <div className="multi-select">
                        <div className="minus">-</div>
                        <h1>1</h1>
                        <div className="add">+</div>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlaceOrder