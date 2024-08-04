import React from 'react'
import Header from '../../components/About-header/Header'
import CartPage from '../../components/Cart/Cartpage'



export default function ShopCart() {
  return (
    <>
    <Header header_title={'Your Order'} header_btn={'HOME/Shop/Cart'} />
    <CartPage/>
    </>
  )
}