import React from 'react'
import './FeaturedProducts.css'
import { assets } from '../../assets/assets'

const FeaturedProducts = () => {
  return (
    <>
    <div className="featuredproducts">
        <h1>Featured Products</h1>
        <div className="products">
            <div className="product">
                <div className="productimg">
                    <img src={assets.steek} alt="" />
                </div>
                <h2>steek</h2>
                <p>masala</p>
            </div>
            <div className="product">
                <div className="productimg">
                    <img src={assets.steek} alt="" />
                </div>
                <h2>steek</h2>
                <p>masala</p>
            </div>
            <div className="product">
                <div className="productimg">
                    <img src={assets.steek} alt="" />
                </div>
                <h2>steek</h2>
                <p>masala</p>
            </div>
            <div className="product">
                <div className="productimg">
                    <img src={assets.steek} alt="" />
                </div>
                <h2>steek</h2>
                <p>masala</p>
            </div>
        </div>
        {/* {
            products.map((data)=>{
                <div className="product">
                    <div className="productimg"></div>
                    <h2>steek</h2>
                    <p>masala</p>
                </div>
            })
        } */}
    </div>
    </>
  )
}

export default FeaturedProducts