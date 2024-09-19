import React from 'react'
import Header from '../../components/About-header/Header'
import Gift_Coupen from '../../components/Gift_coupen/Gift_Coupen'
import Preloader from '../../components/Preloader/Preloader';
import StepsToFollow from '../../components/Steps-to-follow/StepsToFollow';

const GiftSection = () => {
  return (
    <>
      <Preloader />
      <Header header_title={'GIFT SECTION'} header_btn={'HOME/GIFT'} />
      <StepsToFollow />
      <Gift_Coupen />
    </>
  )
}

export default GiftSection