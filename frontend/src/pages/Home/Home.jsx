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

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <Story/>
      <ResturentOption/>
      <FeaturedProducts/>
      <Events_F/>
      <Reservation_Table/>
      {/* <Event/> */}
      {/* <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/> */}
      {/* <AppDownload/> */}
    </>
  )
}

export default Home
