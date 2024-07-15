import React from 'react'
import { assets } from '../../assets/assets'
import Header from '../../components/Events_HeroSection/HeroSection'
import Cards from '../../components/Events_Card/cards'
import './event.css'



export default function Events() {
  return (
    <>
    <div className='event-section'>
   <Header title={"Events"} imgsrc={assets.background}/>
    <Cards/>
    </div>
    </>
  )
}
