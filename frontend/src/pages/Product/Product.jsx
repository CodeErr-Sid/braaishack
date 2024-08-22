import React from 'react'
import Header from '../../components/About-header/Header'
import ProductDetails from '../../components/Product-Details/Product'
import ProductIngredients from '../../components/Ingredients/ProductIngredients'
import ShortMenu from '../../components/Short-Menu/ShortMenu'
import CallToAction2 from '../../components/Order-Delivery/OrderDelivery'




export default function Product() {
  return (
    <>
    <Header header_title={'Online Shop'} header_btn={'HOME/Shop/Product'} />
    <ProductDetails/>
    {/* <ProductIngredients/> */}
    {/* <ShortMenu/>
    <CallToAction2/> */}
    </>
  )
}
