import React from 'react';
import Header from '../../components/About-header/Header';
import Gift_Coupen from '../../components/Gift_coupen/Gift_Coupen';
import Preloader from '../../components/Preloader/Preloader';
import StepsToFollow from '../../components/Steps-to-follow/StepsToFollow';
import GiftCard from '../../components/GiftCard/GiftCard';
import useGiftCards from '../../hooks/useGiftCards';

const GiftSection = () => {
  const { giftCards, loading, error } = useGiftCards();

  return (
    <>
      <Preloader />
      <Header header_title={'GIFT SECTION'} header_btn={'HOME/GIFT'} />
      <StepsToFollow />
      {loading ? (
        <p>Loading gift cards...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <GiftCard cards={giftCards} />
      )}
    </>
  );
};

export default GiftSection;
