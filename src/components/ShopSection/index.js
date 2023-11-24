import React from 'react';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/vendor/swiper.min.css';
import '../../assets/assets/css/vendor/dynamic-slider.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import { Link } from 'react-router-dom';
import Slide1 from '../../assets/assets/images/png/f-2.png';
import Slide2 from '../../assets/assets/images/png/f-1.png';

const ShopSection = () => {




    return (
     <>
        
      <section className="shock-section pt-6 pb-5">
        <div className="container">
          <div className="horizontal-tab scheme-1 primary">            
            
            <ul id="products-tab" className="nav nav-tabs" role="tablist" aria-orientation="horizontal">
              <li className="nav-item" role="presentation">
                <button id="products-1-tab" className="nav-link active" aria-selected="true" aria-controls="products-1" data-bs-target="#products-1" data-bs-toggle="tab" role="tab">
                  Clothing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button id="products-2-tab" className="nav-link" aria-selected="false" aria-controls="products-2" data-bs-target="#products-2" data-bs-toggle="tab" role="tab">
                  Pharmacy
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" aria-selected="false" aria-controls="products-1" data-bs-target="#products-1" data-bs-toggle="tab" role="tab">
                  Appliances
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" aria-selected="false" aria-controls="products-2" data-bs-target="#products-2" data-bs-toggle="tab" role="tab">
                  Miscellaneous
                </button>
              </li>
            </ul>
       
            <div className="tab-content">
              <div id="products-1" className="tab-pane fade show active" role="tabpanel">
                <div className="gallery">
                  <div id="load-more" className="row g-4" data-display="6" data-columns="2">
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <span className="label-vertical to-bottom-right-out">
                          <span className="label-line gray"></span>
                          <span className="label-text gray"><i className="fa-solid fa-bookmark icon"></i> ON SALE</span>
                        </span>
                       
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-2.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-2.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-3.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-3.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <span className="label-vertical to-bottom-right-out">
                          <span className="label-line gray"></span>
                          <span className="label-text gray"><i className="fa-solid fa-bookmark icon"></i> ON SALE</span>
                        </span>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-4.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-4.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <span className="label-vertical to-bottom-right-out">
                          <span className="label-line gray"></span>
                          <span className="label-text gray"><i className="fa-solid fa-bookmark icon"></i> ON SALE</span>
                        </span>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-5.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-5.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-6.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-6.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-7.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-7.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6 load-more-item">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-8.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-8.jpg" alt="This is an example description for this item." className="image" />
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
              <div id="products-2" className="tab-pane fade" role="tabpanel">
                <div className="gallery">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <span className="label-vertical to-bottom-right-out">
                          <span className="label-line gray"></span>
                          <span className="label-text gray"><i className="fa-solid fa-bookmark icon"></i> ON SALE</span>
                        </span>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-5.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-5.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-6.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-6.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                        
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                       
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-7.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-7.jpg" alt="This is an example description for this item." className="image" />
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
                    <div className="col-12 col-md-6">
                      <div className="card has-image has-shop-price is-horizontal shadow parent">
                   
                        <div className="wishlist-icon primary-25 primary-hover hover-up-down">
                          <i className="fa-solid fa-heart icon primary white-hover"></i>
                        </div>
                     
                        <div className="image-wrapper hover-scale">
                          <Link to="assets/images/jpg/g-8.jpg" className="lightbox-link">
                            <img src="assets/images/jpg/g-8.jpg" alt="This is an example description for this item." className="image" />
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