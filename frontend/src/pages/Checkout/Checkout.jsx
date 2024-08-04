import React from 'react'
import Header from '../../components/About-header/Header'
import CheckoutPage from '../../components/CheckoutPage/CheckoutPage'


export default function Checkout() {
  return (
    <>
    <Header header_title={'Checkout'} header_btn={'HOME/Shop/Checkout'} />
    <CheckoutPage/>
    </>
  )
}
