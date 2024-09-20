import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import './Product.css';
import { assets } from '../../assets/assets';
import { menuItems } from '../../MenuData.json'; // Ensure this path is correct
import { frozenProducts } from '../../FrozenProductsData.json'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import MenuData from "../../data/shopdata.json"


const ProductDetails = () => {

    const { url, addToCart, currency } = useContext(StoreContext)

    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null); // State to hold the product data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error
    const [addedItems, setAddedItems] = useState({});

    // // console.log("ProductDetails component is rendering");
    // // console.log("Product ID from URL:", productId);
    // // console.log("Menu Items:", menuItems);

    const getFoodDetails = async (productId) => {
        try {
            const response = await axios.post(url + '/api/food/fooddetails', { productId });

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            return response.data.data; // Return the food details
        } catch (error) {
            // // console.error('Error fetching food details:', error);
            return null; // or handle the error as needed
        }
    };


    useEffect(() => {
        const fetchProductById = async (id) => {
            try {
                let fetchedProduct = await getFoodDetails(id);

                if (!fetchedProduct) {
                    // // console.log(productId);
                    const product = MenuData.find(item => item._id === String(productId));
                    if(product){
                        setProduct(product)
                    }else{
                        setError("Product Not Found")
                    }
                }else{
                    if (fetchedProduct) {
                        setProduct(fetchedProduct);
                    } else {
                        setError('Product not found');
                    }
                }

            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };
        fetchProductById(productId);
    }, [productId]);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => Math.max(prev - 1, 1));

    const handleAddToCart = (id) => {
        addToCart(id, quantity)
        // console.log(id, quantity)
        setAddedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <section className="sb-p-90-0">
            <div className="container mb-0">
                <div className="row align-items-center">
                    <div className="col-lg-7 width">
                        <div className="sb-gallery-item sb-gallery-square sb-mb-90">
                            <img src={product.image} alt={product.name} />
                            <div className="sb-badge sb-vegan"><i className="fas fa-leaf"></i> Vegan</div>
                            <a data-fancybox="menu" data-no-swup href={assets.Zoom} className="sb-btn sb-btn-2 sb-btn-icon sb-btn-gray sb-zoom">
                                <span className="sb-icon">
                                    <img src={assets.Zoom} alt="icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 width">
                        <div className="sb-product-description sb-mb-90">
                            <div className="sb-price-frame sb-mb-30">
                                <h3>{product.name}</h3>
                                <div className="sb-price"><sub>{currency}</sub> {product.price}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg">
                                    {product.description}
                                </div>
                            </div>

                            {/* <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        size="sm"
                                        style={{ color: "#FFD43B" }}
                                    />
                                ))}
                                <span> (124)</span>
                            </div> */}
                            {/* <p className="sb-text sb-mb-30">
                                {product.description}
                            </p>
                            <div className="row">
                                Featurers
                            </div> */}
                            <div className="sb-buttons-frame">
                                {/* <div className="multi-select">
                                    <div className="minus" onClick={decrement}>-</div>
                                    <h1>{quantity}</h1>
                                    <div className="add" onClick={increment}>+</div>
                                </div> */}
                                <a
                                    href="#."
                                    className="sb-btn sb-atc"
                                // onClick={() => handleAddToCart(productId)}
                                >
                                    <span className="sb-icon">
                                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "black" }} />
                                    </span>
                                    <span className="sb-add-to-cart-text">
                                        Add to Cart
                                    </span>
                                    {addedItems[productId] && (
                                        <span className="sb-added-text"></span>
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductDetails;
