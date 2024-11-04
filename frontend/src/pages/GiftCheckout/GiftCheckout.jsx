import React from 'react'
import Preloader from '../../components/Preloader/Preloader'
import Header from '../../components/About-header/Header'
import GiftCheckoutSection from '../../components/GiftCheckoutSection/GiftCheckoutSection'



const GiftCheckout = () => {
  return (
    <section>
      <Preloader />
      <Header header_title={'CHECKOUT'} header_btn={'HOME/CHECKOUT'} />
      <GiftCheckoutSection />
    </section>
  )
}

export default GiftCheckout