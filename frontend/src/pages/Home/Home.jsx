import React, { useState } from 'react'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'


import Header from '../../components/Header/Header'
import Story from '../../components/storyBraaishaack/story'
import ResturentOption from '../../components/ResturentOption/ResturentOption'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Events_F from '../../components/Events_F/Events_F'


import Event from '../../components/Events/Event'
import Reservation_Table from '../../components/Reservation_Table/Reservation_Table'
import { assets } from '../../assets/assets'


const Home = () => {
  const headerImages = [
   assets.smokey,
   assets.smokey,
   assets.smokey,
   assets.smokey,
   assets.smokey,
   assets.smokey,
   assets.smokey,
  ];

  return (
    <>
      <Header title={"BRAAI SHAACK"} content={"Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."} btn={'BOOK TABLE NOW'} overlay={headerImages} imgsrc={assets.header} />
      <Story/>
      <ResturentOption/>
      <FeaturedProducts/>
      <Events_F title={"Events"}/>
      <Reservation_Table/>
      {/* <Event/> */}
      {/* <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/> */}
      {/* <AppDownload/> */}
    </>
  )
}

export default Home
