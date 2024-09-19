import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import './Brailoader.css'; // Import CSS file

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Brailoader = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.to(".mil-preloader-animation", {
            opacity: 1,
        });

        timeline.fromTo(
            ".mil-animation-1 .mil-h3", 
            {
                y: "30px",
                opacity: 0
            }, 
            {
                y: "0px",
                opacity: 1,
                stagger: 0.4
            }
        );

        timeline.to(".mil-animation-1 .mil-h3", {
            opacity: 0,
            y: '-30',
        }, "+=.3");

        timeline.fromTo(".mil-reveal-box", 0.1, {
            opacity: 0,
        }, {
            opacity: 1,
            x: '-30',
        });

        timeline.to(".mil-reveal-box", 0.45, {
            width: "100%",
            x: 0,
        }, "+=.1");
        timeline.to(".mil-reveal-box", {
            right: "0"
        });
        timeline.to(".mil-reveal-box", 0.3, {
            width: "0%"
        });
        timeline.fromTo(".mil-animation-2 .mil-h3", {
            opacity: 0,
        }, {
            opacity: 1,
        }, "-=.5");
        timeline.to(".mil-animation-2 .mil-h3", 0.6, {
            opacity: 0,
            y: '-30'
        }, "+=.5");
        timeline.to(".mil-preloader", 0.8, {
            opacity: 0,
            ease: 'sine',
        }, "+=.2");
        timeline.fromTo(".mil-up", 0.8, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            onComplete: function () {
                document.querySelector('.mil-preloader').classList.add("mil-hidden");
            },
        }, "-=1");
    }, []);

    return (
        <div className="mil-preloader">
            <div className="mil-preloader-animation">
                <div className="mil-pos-abs mil-animation-1">
                    <p className="mil-h3 mil-bla mil-thin" id="color-mil-txt">Culinary</p>
                    <p className="mil-h3 mil-maroon" id="color-mil-txt" style={{ color: '#fde419' }}>Exquisite</p>
                    <p className="mil-h3 mil-black mil-thin" id="color-mil-txt">Meticulous</p>
                </div>
                <div className="mil-pos-abs mil-animation-2">
                    <div className="mil-reveal-frame">
                        <p className="mil-reveal-box"></p>
                        <p className="mil-h3 mil-maroon mil-thin" style={{ color: '#fde419', fontSize: '2rem' }}>braaishackrestaurant.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brailoader;
