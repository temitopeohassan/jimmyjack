import React from 'react';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/vendor/swiper.min.css';
import '../../assets/assets/css/vendor/dynamic-slider.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import { Link } from 'react-router-dom';

const ShopSection = () => {




    return (
     <>
        
      <section className="shock-section pt-6 pb-5">
        <div className="container">
          <div className="horizontal-tab scheme-1 primary">            
            
          <h1 className="title text-style-1 text-offset">
                        <span className="text-1 filled primary">Shop Our Collection</span>
                        <span className="text-1 outline black">Shop Our Collection</span>
                      </h1>
       
                      <div id="products-1" className="tab-pane fade show active" role="tabpanel">
                <div className="gallery">
                  <div id="load-more" className="row g-4" data-display="6" data-columns="2">
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                  
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-1.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-1.jpg" alt="This is an example description for this item." className="image" />
                          </Link>
                        </div>
                        
                        <div className="card-body bg-color white">
                          <h3 className="title text-style-11 black">This is an example<br /> title for this product card.</h3>
                          <p className="description">This is a example of a summary description for this item.</p>
                          <div className="card-flex-wrapper">
                            <span className="fw-600 text-color black"><mark className="animated-underline primary-50">$15.00 – $29.00</mark></span>
                           
                            <Link to="#" className="button simple">
                              <span className="button-text black black-hover"><mark className="animated-underline when-hover primary-50">Add to cart</mark></span>
                              <i className="fa-solid fa-arrow-right button-icon black black-hover"></i>
                            </Link>
                          </div>
                          
                          <Link to="#your-link" className="full-link"></Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  <div className="mt-4 text-center">
                   
                    <button id="load-more-button" className="button outline black black-hover">
                      <span className="hover-rotate">
                        <span className="button-text black white-hover">Load more</span>
                        <i className="fa-solid fa-rotate-right button-icon black white-hover"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

     </>
);

    };


export default ShopSection;