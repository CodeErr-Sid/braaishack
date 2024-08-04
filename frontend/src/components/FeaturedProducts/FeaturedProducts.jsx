import React, { useEffect } from 'react';
import './FeaturedProducts.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    // useEffect(() => {
    //     gsap.fromTo(".featuredproducts h1",
    //         {
    //             x: '100vw',
    //             opacity: 0
    //         },
    //         {
    //             x: 0,
    //             opacity: 1,
    //             duration: 1,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".featuredproducts h1",
    //                 start: "top 80%",
    //                 end: "top 60%",
    //                 scrub: 1 ,
    //             }
    //         }
    //     );

    //     gsap.fromTo(".product",
    //         {
    //             opacity: 0,
    //             y: 50,
    //             scale: 0.9
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             scale: 1,
    //             duration: 0.5,
    //             ease: "power1.out",
    //             stagger: 0.1,
    //             scrollTrigger: {
    //                 trigger: ".products",
    //                 start: "top 80%",
    //                 end: "bottom 60%",
    //                 scrub: 1
    //             }
    //         }
    //     );
    // }, []);

    return (
        <div className="featuredproducts">
            <img src={assets.b2} alt="" className="b2" />
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
