import React, { useEffect } from 'react';
import Header from '../../components/header2/Header';
import { assets } from '../../assets/assets';
import MenuNav from '../../components/MenuNav/MenuNav';
import Menucards from '../../components/Menucards/Menucards';

import gsap from 'gsap';
const Menu = () => {

  // gsap animation


  const images = [
    { src: assets.burger, className: 'burger' },
    { src: assets.onion, className: 'onion' },
    { src: assets.tomato, className: 'tomato' },
    { src: assets.chilli, className: 'chilli' }
  ];

  return (
    <>
      <Header
        title="MENUS"
        content="Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."
        btn="Book a Table"
        imgsrc={images}
      />
      <MenuNav />
      <Menucards />
    </>
  );
};

export default Menu;
