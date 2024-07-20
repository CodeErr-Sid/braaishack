import React, { useEffect } from 'react';
import './FeaturedProducts.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    useEffect(() => {
        // Animate h1 element from right to left
        gsap.fromTo(".featuredproducts h1", 
            {
                x: '100vw', // Start from the right side of the viewport
                opacity: 0
            },
            {
                x: 0, // End at its original position
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".featuredproducts h1",
                    start: "top 80%", // Animation starts when the top of the h1 hits 80% from the top of the viewport
                    end: "top 60%", // Animation ends when the top of the h1 hits 60% from the top of the viewport
                    scrub: 1 // Smoothly scrubs the animation with the scroll
                }
            }
        );

        // Animate product elements
        gsap.fromTo(".product", 
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            }, 
            {
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.5,
                ease: "power1.out",
                stagger: 0.1, // Adds a delay between each product animation
                scrollTrigger: {
                    trigger: ".products",
                    start: "top 80%", // Animation starts when the top of the element hits 80% from the top of the viewport
                    end: "bottom 60%", // Animation ends when the bottom of the element hits 60% from the top of the viewport
                    scrub: 1 // Smoothly scrubs the animation with the scroll
                }
            }
        );
    }, []);

    return (
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
            </div>
            {/* {
                products.map((data) => (
                    <div className="product" key={data.id}>
                        <div className="productimg">
                            <img src={data.img} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                ))
            } */}
        </div>
    );
}

export default FeaturedProducts;
