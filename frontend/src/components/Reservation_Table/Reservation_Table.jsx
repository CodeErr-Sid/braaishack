import React from 'react'
import './Reservation_Table.css'
import { assets } from '../../assets/assets'

const Reservation_Table = () => {
    return (
        <>
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
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Reserve now</button>
                </form>
        </div>
        </>
    )
}

export default Reservation_Table
