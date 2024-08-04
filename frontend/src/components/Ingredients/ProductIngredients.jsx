import React, { useState } from 'react';
import './ProductIngredients.css'; // Ensure your CSS file includes styles for the component
import { assets } from '../../assets/assets';
const ProductIngredients = () => {
    const [activeTab, setActiveTab] = useState('.sb-ingredients-tab');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="ingredients-section">
            <div className="sb-filter">
                <a
                    href="#."
                    data-filter=".sb-ingredients-tab"
                    className={`sb-filter-link ${activeTab === '.sb-ingredients-tab' ? 'sb-active' : ''}`}
                    onClick={() => handleTabChange('.sb-ingredients-tab')}
                >
                    Ingredients
                </a>
                <a
                    href="#."
                    data-filter=".sb-details-tab"
                    className={`sb-filter-link ${activeTab === '.sb-details-tab' ? 'sb-active' : ''}`}
                    onClick={() => handleTabChange('.sb-details-tab')}
                >
                    Product details
                </a>
                <a
                    href="#."
                    data-filter=".sb-reviews-tab"
                    className={`sb-filter-link ${activeTab === '.sb-reviews-tab' ? 'sb-active' : ''}`}
                    onClick={() => handleTabChange('.sb-reviews-tab')}
                >
                    Reviews
                </a>
            </div>
            {/* Filter end */}
            <div className="sb-masonry-grid sb-tabs">
                <div className="sb-grid-sizer"></div>

                {activeTab === '.sb-ingredients-tab' && (
                    <div className="sb-grid-item sb-ingredients-tab">
                        <div className="sb-tab">
                            <ul className="sb-list">
                                <li><b>Numquam</b><span>1 pack</span></li>
                                <li><b>Cupiditate</b><span>150g</span></li>
                                <li><b>Adipisicing</b><span>500g</span></li>
                                <li><b>Dolorem obcaecati</b><span>3 Teaspoon</span></li>
                        </ul>
                                <ul className="sb-list">  
                                <li><b>Porro</b><span>2 pack</span></li>
                                <li><b>Facilis</b><span>1kg</span></li>
                                <li><b>Goluptatem</b><span>1 Teaspoon</span></li>
                                <li><b>Vel fuga</b><span>300g</span></li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === '.sb-details-tab' && (
                    <div className=" sb-details-tab">
                        <div className="sb-tab2">
                            <p className="sb-text sb-mb-15">
                                Facilis ratione veritatis asperiores doloremque molestiae delectus iure officia earum dolores sit fugiat, repellendus, neque laboriosam optio culpa quibusdam, magnam totam quos. Mollitia dolorem, culpa,
                                dignissimos quas et voluptates architecto in sit totam, quae animi ratione adipisci nulla ab quasi perferendis quo pariatur dolor magnam inventore. Sequi nisi ex excepturi non harum, asperiores laboriosam ipsum voluptate doloribus incidunt nam eveniet similique unde esse voluptatem minus necessitatibus eaque temporibus quaerat accusantium amet deserunt. Iste, facilis? Illo tenetur, libero, non dicta asperiores quisquam voluptas natus aperiam, at perspiciatis repellat voluptate. Autem non reprehenderit, perferendis.
                            </p>
                            <div className="sb-text">Consectetur adipisicing elit. Delectus quibusdam repellendus nesciunt cumque fugit numquam adipisci voluptatum quam, sapiente doloribus ut eaque natus laudantium alias illum quos maiores, quia perferendis.</div>
                        </div>
                    </div>
                )}

                {activeTab === '.sb-reviews-tab' && (
                    <div className="sb-grid-item sb-reviews-tab">
                        <div className="sb-tab2">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="sb-review-card sb-mb-60">
                                        <div className="sb-review-header sb-mb-15">
                                            <h4 className="sb-mb-10">Very tasty</h4>
                                            <ul className="sb-stars">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="sb-text sb-mb-15">
                                            Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, quo iure expedita.
                                        </p>
                                        <div class="sb-author-frame">
                          <div class="sb-avatar-frame">
                            <img src={assets.face1} alt="Guest" />
                          </div>
                          <h4>Emma Newman</h4>
                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sb-review-card sb-mb-60">
                                        <div className="sb-review-header sb-mb-15">
                                            <h4 className="sb-mb-10">Good Quality</h4>
                                            <ul className="sb-stars">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="sb-text sb-mb-15">
                                            Inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, quo iure expedita.
                                        </p>
                                        <div class="sb-author-frame">
                          <div class="sb-avatar-frame">
                            <img src={assets.face2} alt="Guest" />
                          </div>
                          <h4>Emma Newman</h4>
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductIngredients;
