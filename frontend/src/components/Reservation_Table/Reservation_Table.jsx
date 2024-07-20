import React, { useEffect } from 'react';
import './Reservation_Table.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reservation_Table = () => {
    useEffect(() => {
        // Animate span element
        gsap.fromTo(".reservation-contents span", 
            {
                opacity: 0,
                y: -50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,  
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reservation-contents span",
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1
                }
            }
        );

        // Animate h2 element
        gsap.fromTo(".reservation-contents h2", 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7, 
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reservation-contents h2",
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1
                }
            }
        );

        // Animate p element
        gsap.fromTo(".reservation-contents p", 
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,  
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reservation-contents p",
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1
                }
            }
        );

        // Animate button in .reservation-contents
        gsap.fromTo(".reservation-contents button", 
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5, 
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reservation-contents button",
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1
                }
            }
        );

        // Animate form container
        gsap.fromTo(".reservation-form", 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7, 
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".reservation-form",
                    start: "top 70%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );

        // Animate input fields and button inside the form
        gsap.fromTo(".reservation-form input, .reservation-form button", 
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,  
                ease: "power1.out",
                stagger: 0.1,  
                scrollTrigger: {
                    trigger: ".reservation-form",
                    start: "top 70%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );
    }, []);

    return (
        <div className="reservation">
            <div className="reservation-contents">
                <span>Reservation</span>
                <h2>Mmm...!
                    Your evening
                    will be great!</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>BOOK A TABLE</button>
            </div>
            <form action="" className='reservation-form'>
                <h1>Reservation</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <button>Reserve now</button>
            </form>
        </div>
    );
};

export default Reservation_Table;
