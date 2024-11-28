import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GiftCard.module.css';
import { StoreContext } from '../../Context/StoreContext';

const Card = ({ img, title, description, pricing, card }) => {
  const navigate = useNavigate();

  const { currency } = useContext(StoreContext)

  const handlePurchase = () => {
    // Navigate to checkout page and pass the selected card as state
    navigate('/checkout', { state: { card } });
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardPricing}>{currency + pricing}</div>
        <button className={styles.ctaButton} onClick={handlePurchase}>
          Purchase
        </button>
      </div>
    </div>
  );
};

const GiftCard = ({ cards }) => (
  <div className={styles.cardContainer}>
    {cards.map((card, index) => (
      <Card
        key={index}
        img={card.imgSrc}
        title={card.title}
        description={card.description}
        pricing={card.price}
        card={card} // Pass the whole card data
      />
    ))}
  </div>
);

export default GiftCard;
