import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Story from '../../components/storyBraaishaack/story'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import ResturentOption from '../../components/ResturentOption/ResturentOption'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <Story/>
      <ResturentOption/>
      <FeaturedProducts/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
