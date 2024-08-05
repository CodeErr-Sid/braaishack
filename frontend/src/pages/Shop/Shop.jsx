import React  from 'react'
import { useState } from 'react'
import Header from '../../components/About-header/Header'
import ShopCards from '../../components/Shop-cards/ShopCards'
import CallToAction from '../../components/CallToAction/CallToAction'
import { menuItems } from '../../FrozenProductsData.json'; 
import MenuNav from '../../components/MenuNav/MenuNav';


export default function Shop() {
  const [selectedProducts, setSelectedProducts] = useState("");
  const productBtnData = [
    "All",
    "Cake",
    // "Cupcake",
    "Pie",
    // "Cheesecake",
    // "Macaron",
    // "Cookie",
    // "Sorbet",
    // "Brownie",
    // "Cobbler",
    // "Mousse",
    // "Dessert",
    // "Bar",
    // "Pastry"
  ];

  console.log(selectedProducts)
  

  return (
    <>
    <Header header_title={'Frozen Items'} header_btn={'HOME/Shop/Frozen'} />
    <MenuNav setSelectedMenu={setSelectedProducts} Menubtndata={productBtnData} />
    <ShopCards shopCardData={menuItems} selectedMenu={selectedProducts}/>
    <CallToAction />
    </>
  )
}
