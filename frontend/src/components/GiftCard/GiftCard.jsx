import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GiftCard.module.css';

const Card = ({ img, title, description, pricing, card }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Navigate to checkout page and pass the selected card as state
    navigate('/checkout', { state: { card } });
  };

  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardPricing}>{pricing}</div>
        <button className={styles.ctaButton} onClick={handleAddToCart}>
          Add to Cart
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
        img={card.img}
        title={card.title}
        description={card.description}
        pricing={card.pricing}
        card={card} // Pass the whole card data
      />
    ))}
  </div>
);

export default GiftCard;
