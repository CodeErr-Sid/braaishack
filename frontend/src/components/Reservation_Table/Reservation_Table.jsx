import React, { useEffect, useState } from 'react';
import './Reservation_Table.css';
import { assets } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reservation_Table = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [database, setdatabase] = useState([]);
    const [guests, setGuests] = useState(0);
    const [datetime, setDatetime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentdate = new Date();
        let dataobj = {
            name,
            email,
            number,
            guests,
            id: database.length + 1,
            reservedDate: datetime.toLocaleDateString(),
            date:currentdate.toLocaleDateString(),
        };
        setdatabase([...database, dataobj]);
        localStorage.setItem('reservationData', JSON.stringify([...database, dataobj]));
        // console.log(database);
    }

    useEffect(() => {
        let storedData = localStorage.getItem('reservationData');
        if (storedData) setdatabase(JSON.parse(storedData))
    }, []);

    // useEffect(() => {
    //     gsap.fromTo(".reservation-contents span",
    //         {
    //             opacity: 0,
    //             y: -50
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".reservation-contents span",
    //                 start: "top 90%",
    //                 end: "top 70%",
    //                 scrub: 1
    //             }
    //         }
    //     );

    //     gsap.fromTo(".reservation-contents h2",
    //         {
    //             opacity: 0,
    //             y: 50
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.7,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".reservation-contents h2",
    //                 start: "top 80%",
    //                 end: "top 60%",
    //                 scrub: 1
    //             }
    //         }
    //     );

    //     gsap.fromTo(".reservation-contents p",
    //         {
    //             opacity: 0,
    //             y: 30
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.6,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".reservation-contents p",
    //                 start: "top 80%",
    //                 end: "top 60%",
    //                 scrub: 1
    //             }
    //         }
    //     );


    //     gsap.fromTo(".reservation-contents button",
    //         {
    //             opacity: 0,
    //             y: 20
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".reservation-contents button",
    //                 start: "top 80%",
    //                 end: "top 60%",
    //                 scrub: 1
    //             }
    //         }
    //     );


    //     gsap.fromTo(".reservation-form",
    //         {
    //             opacity: 0,
    //             y: 50
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.7,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".reservation-form",
    //                 start: "top 70%",
    //                 end: "top 50%",
    //                 scrub: 1
    //             }
    //         }
    //     );


    //     gsap.fromTo(".reservation-form input, .reservation-form button",
    //         {
    //             opacity: 0,
    //             y: 20
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power1.out",
    //             stagger: 0.1,
    //             scrollTrigger: {
    //                 trigger: ".reservation-form",
    //                 start: "top 70%",
    //                 end: "top 50%",
    //                 scrub: 1
    //             }
    //         }
    //     );


    //     gsap.fromTo(".carrot img",
    //         {
    //             opacity: 0,
    //             y: -50,
    //             scale: 0.8
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             scale: 1,
    //             duration: 0.6,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".carrot",
    //                 start: "top 90%",
    //                 end: "top 70%",
    //                 scrub: 1
    //             }
    //         }
    //     );


    //     gsap.fromTo(".onion img",
    //         {
    //             opacity: 0,
    //             y: 50,
    //             scale: 0.8
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             scale: 1,
    //             duration: 0.6,
    //             ease: "power1.out",
    //             scrollTrigger: {
    //                 trigger: ".onion",
    //                 start: "top 90%",
    //                 end: "top 70%",
    //                 scrub: 1
    //             }
    //         }
    //     );

    // }, []);

    return (
        <div className="reservation">
            <div className="reservation-contents">
                <div className='carrot'>
                    <img src={assets.carrot} alt='' />
                </div>
                <span>To Know More</span>
                <h2>Mmm...!
                    Your evening
                    will be great!</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                {/* <button>BOOK A TABLE</button> */}
            </div>
            <form className='reservation-form' onSubmit={handleSubmit}>
                <h1>Reservation Table</h1>
                <input required type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                <input required type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                <input required type="text" placeholder="Phone" onChange={(e) => setnumber(e.target.value)} />
                <input required type="number" placeholder='Guests' onChange={(e) => setGuests(e.target.value)}  />
                <input required type="datetime-local" placeholder='date-time' onChange={(e)=>setDatetime(e.target.value)}/>
                <button type='submit'>Reserve</button>
            </form>
            <div className='onion'>
                <img src={assets.ring} alt='' />
            </div>
        </div>
    );
};

export default Reservation_Table;