import React from 'react'
import Header from '../../components/About-header/Header'
import Gift_Coupen from '../../components/Gift_coupen/Gift_Coupen'
import Preloader from '../../components/Preloader/Preloader';
import StepsToFollow from '../../components/Steps-to-follow/StepsToFollow';
import GiftCard from '../../components/GiftCard/GiftCard';
import { assets } from '../../assets/assets';

const GiftSection = () => {

  const giftCards = [
    {
      img: assets.braai1,
      title: 'Birthday Gift',
      description: 'A perfect birthday gift for your loved ones.',
      pricing: '$50',
    },
    {
      img: assets.braai2,
      title: 'Anniversary Gift',
      description: 'Celebrate the special day with a memorable gift.',
      pricing: '$70',
    },
    {
      img: assets.braai3,
      title: 'Anniversary Gift',
      description: 'Celebrate the special day with a memorable gift.',
      pricing: '$70',
    },
    // Add more objects as needed
  ];

  return (
    <>
      <Preloader />
      <Header header_title={'GIFT SECTION'} header_btn={'HOME/GIFT'} />
      <StepsToFollow />
      <GiftCard cards={giftCards} />
    </>
  )
}

export default GiftSection