import React from 'react'
import Header from '../../components/About-header/Header'
import Gift_Coupen from '../../components/Gift_coupen/Gift_Coupen'
import Preloader from '../../components/Preloader/Preloader';

const GiftSection = () => {
  return (
    <>
        <Preloader />
        <Header header_title={'GIFT SECTION'} header_btn={'HOME/GIFT'} />
        
        <Gift_Coupen/>
        <Gift_Coupen/>
        <Gift_Coupen/>
    </>
  )
}

export default GiftSection