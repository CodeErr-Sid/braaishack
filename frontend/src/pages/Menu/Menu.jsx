import React from 'react'
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'
import MenuNav from '../../components/MenuNav/MenuNav'
import Menucards from '../../components/Menucards/Menucards'

const Menu = () => {


  return (
    <>
    {/* resuable header component */}
    <Header title={"MENUS"} content={"Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."} btn={"Book a Table"} imgsrc={assets.steek}  />
    <MenuNav/>
    <Menucards/>
    </>
  )
}

export default Menu