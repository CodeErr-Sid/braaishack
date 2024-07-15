import React from 'react'
import { assets } from "../../assets/assets";
import './cards.css'
export default function cards() {
    const cards = [
        {
          img: assets.people1,
          title: 'birthday party',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
        {
         img: assets.people2,
          title: 'Networking event',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
        {
          img: assets.people1,
          title: 'Get Together',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
        {
            img: assets.people2,
            title: 'birthday party',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
        {
            img: assets.people1,
            title: 'Networking event',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
        {
            img: assets.people2,
            title: 'Get Together',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio dolorem maxime facere facilis ipsam eum soluta, et nulla sed.',
          button: 'Book a Table',
        },
      ];
  return (

    <>
    <div className='cards-container'>
      {cards.map((card, index) => (
        <div key={index} className='card'>
          <div className='card-img'>
            <img src={card.img} alt='Card Image' />
          </div>
          <div className='card-title'>
            <h3>{card.title}</h3>
          </div>
          <div className='card-content'>
            <p>{card.content}</p>
          </div>
          <div className='card-button'>
            <button>{card.button}</button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
