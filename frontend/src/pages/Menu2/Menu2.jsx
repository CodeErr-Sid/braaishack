import React, { useEffect, useState } from 'react';
import Header from '../../components/header2/Header';
import { assets } from '../../assets/assets';
import MenuNav from '../../components/MenuNav/MenuNav';
import { menuItems } from '../../MenuData.json'; 
import ShopCards from '../../components/Shop-cards/ShopCards';

const Menu2 = () => {

    const [selectedMenu, setSelectedMenu] = useState("");

    const images = [
        { src: assets.burger, className: 'burger' },
        { src: assets.onion, className: 'onion' },
        { src: assets.tomato, className: 'tomato' },
        { src: assets.chilli, className: 'chilli' }
    ];

    const Menubtndata = [
        "All",
        "Starters",
        "Braai Menu",
        "Kids Braai Menu",
        "Braai Sides",
        "Desserts",
      ];

    

    return (
        <>
            <Header
                title="MENUS"
                content="Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time."
                btn="Book a Table"
                imgsrc={images}
            />
            <MenuNav setSelectedMenu={setSelectedMenu} Menubtndata={Menubtndata} />
            <ShopCards shopCardData={menuItems} selectedMenu={selectedMenu} />
        </>)
}

export default Menu2