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
            <img src={assets.b5} alt="" className="b2" />
            <img src={assets.b3} alt="" className="b3" />
            <h1>Featured <span>Products</span> </h1>
            <div className="products">
                <div className="product">
                    <div className="productimg">
                        <img src="https://raw.githubusercontent.com/Rasmi142/Braaishack-data/main/braaishack%20data/braaishack-assets/Grills%20&%20Burgers/steaks/T-Bone%20300z.jpg" alt="" />
                    </div>
                    <h2>T-Bone</h2>
                    <p>300z</p>
                </div>
                <div className="product">
                    <div className="productimg">
                        <img src="https://www.seriouseats.com/thmb/KhpkXCH6RmaviegAZm3iiRleWvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__07__20190618-grilled-turkish-chicken-wings-vicky-wasik-13-6f722c8e117f4d6ab1b99ec8340de765.jpg" alt="" />
                    </div>
                    <h2>Chicken</h2>
                    <p>Wings</p>
                </div>
                <div className="product">
                    <div className="productimg">
                        <img src="https://lh3.googleusercontent.com/-YntdQrMK_ac/X6EtnUxFLSI/AAAAAAAAYy4/GGFJ8KvvGqQT4x74GIxhp8hWCA4QbsmEwCLcBGAsYHQ/w640-h427/1604398361122732-0.png" alt="" />
                    </div>
                    <h2>Grilled</h2>
                    <p>Fish</p>
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
