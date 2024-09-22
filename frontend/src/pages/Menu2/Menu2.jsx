import React, { useContext, useState } from 'react';
import Header from '../../components/header2/Header';
import { assets } from '../../assets/assets';
import MenuNav from '../../components/MenuNav/MenuNav';
import { StoreContext } from '../../Context/StoreContext';
import ShopCards from '../../components/Shop-cards/ShopCards';
import Preloader from '../../components/Preloader/Preloader';

const Menu2 = ({ isLoggedin, setShowLogin }) => {
  const { food_list } = useContext(StoreContext);

  const [selectedMenu, setSelectedMenu] = useState([]);

  const images = [
    { src: assets.burger3, className: 'burger' },
    { src: assets.onion, className: 'onion' },
    { src: assets.tomato, className: 'tomato' },
    { src: assets.chilli, className: 'chilli' }
  ];


  const Menubtndata = {
    "All": [
      "Soul Food",
      "Vegetarian Dishes",
      "Bunny Chows",
      "Potjiekos",
      "Sosaties",
      "Go Traditional",
      "Burger",
      "Hot Rock Grill",
      "Grill",
      "Steak",
      "Dessert",
      "Milkshake",
      "Alcoholic Milkshake",
      "Add Extras",
      "Sides",
      "Sauces",
      "Hot Drink",
      "Starters",
      "kids_menu"
    ],
    "Starters": [
      "Starters",
    ],
    "Mains":[
      "Soul Food",
      "Vegetarian Dishes",
      "Bunny Chows",
      "Potjiekos",
      "Sosaties",
      "Go Traditional",
      "Burger",
      "Hot Rock Grill",
      "Grill",
      "Steak",
    ],
    "Desserts":[
      "Dessert",
      "Milkshake",
      "Alcoholic Milkshake",
    ],
    "Kids Menu":[
      "kids_menu"
    ],
    "Sides":[
      "Add Extras",
      "Sides",
      "Sauces",],
    "Drinks":[
      "Hot Drink",
    ],
  }


  return (
    <>
      <Preloader />
      <Header
        title="MENUS"
        content="Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."
        btn="Order Now"
        imgsrc={images}
      />
      <MenuNav setSelectedMenu={setSelectedMenu} Menubtndata={Menubtndata} />
      <ShopCards setShowLogin={setShowLogin} shopCardData={food_list} isLoggedin={isLoggedin} selectedMenu={selectedMenu} />
    </>
  );
};

export default Menu2;
