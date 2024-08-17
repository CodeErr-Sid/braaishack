import React, { useContext, useState } from 'react';
import Header from '../../components/header2/Header';
import { assets } from '../../assets/assets';
import MenuNav from '../../components/MenuNav/MenuNav';
import { StoreContext } from '../../Context/StoreContext';
import ShopCards from '../../components/Shop-cards/ShopCards';

const Menu2 = ({ isLoggedin, setShowLogin }) => {
  const { food_list } = useContext(StoreContext);

  const [selectedMenu, setSelectedMenu] = useState([]);

  const images = [
    { src: assets.burger, className: 'burger' },
    { src: assets.onion, className: 'onion' },
    { src: assets.tomato, className: 'tomato' },
    { src: assets.chilli, className: 'chilli' }
  ];

  const Menubtndata = {
    "Starters & Soulful Flavors": [
      "Soul Food",
      "Veggie/Vegan",
      "Bunny Chows",
      "Potjiekos",
      "Sosaties",
      "Go Traditional"
    ],
    "Grills & Burgers": [
      "Burger",
      "Hot Rock Grill",
      "Grills",
      "Steaks"
    ],
    "Sweet Indulgences": [
      "Desserts",
      "Milkshakes",
      "Don Pedro (Alcohol Milkshakes)"
    ],
    "Beverages": [
      "Hot Drink"
    ],
    "Extras & Accompaniments": [
      "Add Extras",
      "Sides",
      "Sauces"
    ]
  };

  return (
    <>
      <Header
        title="MENUS"
        content="Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."
        btn="Book a Table"
        imgsrc={images}
      />
      <MenuNav setSelectedMenu={setSelectedMenu} Menubtndata={Menubtndata} />
      <ShopCards setShowLogin={setShowLogin} shopCardData={food_list} isLoggedin={isLoggedin} selectedMenu={selectedMenu} />
    </>
  );
};

export default Menu2;
