import React from 'react';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/vendor/swiper.min.css';
import '../../assets/assets/css/vendor/dynamic-slider.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import Slide1 from '../../assets/assets/images/png/f-2.png';
import Slide2 from '../../assets/assets/images/png/f-1.png';

const Herosection = () => {




    return (
     <>
      <section className="shock-section has-holder bg-color primary-25" data-aos="fade" data-aos-delay="400">
        <div className="swiper slider has-navigation scheme-2 primary" data-columns="1,1,1,1" data-autoplay="10000" data-loop="true">
          <div className="swiper-wrapper">
   
            <div className="swiper-slide">
              <div className="container max-w-85">
                <div className="row">
                  <div className="col-12 col-lg-6 align-h-center align-v-center">
               
                    <div className="side-intro mb-4">
                      <h1 className="title text-style-1 text-offset">
                        <span className="text-1 filled primary">Here you</span>
                        <span className="text-1 outline black">Here you</span>
                      </h1>
                      <span className="text-2 text-style-4 fw-300 text-outline text-italic black">is find everything.</span>
                      <div className="description text-style-12 black-50">
                        <p>We use the best technologies available on the market to ensure that our customers obtain positive results.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="1200">
                  
                    <div className="image-wrapper climb simple" data-lax="inertia-top">
                      <img src={Slide1} alt="Image name" className="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
            <div className="swiper-slide">
              <div className="container max-w-85">
                <div className="row">
                  <div className="col-12 col-lg-6 order-2 order-md-1" data-aos="fade-up" data-aos-delay="1200">
                  
                    <div className="image-wrapper climb simple" data-lax="inertia-top">
                      <img src={Slide2} alt="Image name" className="image" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 align-h-center align-v-center order-1 order-md-2">
                    
                    <div className="side-intro mb-4">
                      <h2 className="title text-style-1 text-offset">
                        <span className="text-1 filled primary">Big sale</span>
                        <span className="text-1 outline black">Big sale</span>
                      </h2>
                      <span className="text-2 text-style-4 fw-300 text-outline text-italic black">only this week.</span>
                      <div className="description text-style-12 black-50">
                        <p>Our work consists of prototyping creative products with a focus on innovation and resource availability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev ms-2"></div>
          <div className="swiper-button-next me-2"></div>
        </div>
      </section>
     </>
);

    };


export default Herosection;