import React from 'react';
import styles from './GiftCard.module.css';

const Card = ({ img, title, description, pricing }) => (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardPricing}>{pricing}</div>
        <button className={styles.ctaButton}>Add to Cart</button>
      </div>
    </div>
  );
  
const GiftCard = ({ cards }) => (
  <div className={styles.cardContainer}>
    {cards.map((card, index) => (
      <Card
        key={index}
        img={card.img}
        title={card.title}
        description={card.description}
        pricing={card.pricing}
      />
    ))}
  </div>
);

export default GiftCard;
