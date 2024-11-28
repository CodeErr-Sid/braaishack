import axios from 'axios';

const seedGiftCards = async () => {
    const giftCards = [
        {
            title: "Coffee Lover's Delight",
            description: "Perfect for coffee enthusiasts.",
            imgSrc: "https://res.cloudinary.com/dysfsgfiz/image/upload/v1732770553/nathan-dumlao-r-KfktlyBL0-unsplash_llfha5.jpg",
            price: 15.00
        },
        {
            title: "Dine and Wine Special",
            description: "Enjoy fine dining discounts.",
            imgSrc: "https://res.cloudinary.com/dysfsgfiz/image/upload/v1732770539/stefan-johnson-xIFbDeGcy44-unsplash_aotlui.jpg",
            price: 25.00
        },
        {
            title: "Sweet Treat Surprise",
            description: "Delight in dessert savings.",
            imgSrc: "https://res.cloudinary.com/dysfsgfiz/image/upload/v1732770539/stefan-johnson-xIFbDeGcy44-unsplash_aotlui.jpg",
            price: 10.00
        }
    ];

    try {
        for (const card of giftCards) {
            const response = await axios.post('http://localhost:4000/api/coupon', card);
            console.log(`Gift card created: ${response.data.title}`);
        }
        console.log('All gift cards have been created successfully.');
    } catch (error) {
        console.error('Error seeding gift cards:', error.message);
    }
};

seedGiftCards();
