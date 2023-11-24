import React from 'react';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/vendor/swiper.min.css';
import '../../assets/assets/css/vendor/dynamic-slider.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/assets/images/jpg/a-36.jpg';
import Slide2 from '../../assets/assets/images/png/f-1.png';

const AboutUsSection = () => {




    return (
     <>
        
        <section className="shock-section has-overlay bg-image bg-fixed" data-bg-image="assets/images/jpg/a-36-2.jpg">
        <div className="container">
          <div className="holder vh-75 align-v-center">

            <div className="extended-intro max-w-85">
              <div className="wrapper">
                <div className="left-column">
                  <h2 className="title text-style-1 text-offset">
                    <span className="text-1 filled primary">Discover our story</span>
                    <span className="text-1 outline black magnetic-effect">Discover our story</span>
                  </h2>
                  <span className="text-2 text-style-4 fw-300 text-outline text-italic black">turning ideas into results.</span>
                  <div className="description text-style-12 black-65">
                    <p>To connect the brand with the target audience, it is necessary to observe every detail to compose a subconscious message.</p>
                  </div>                  
                </div>
                <div className="right-column">
                
                  <Link to="/about" className="button arrow-button next scheme-1 primary">
                    <span className="arrow">
                      <span className="item"></span>
                      <span className="item"></span>
                    </span>
                    <span className="line"></span>
                    <span className="text">KNOW MORE</span>
                  </Link>    
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overlay white-75"></div>
      </section>


     </>
);

    };


export default AboutUsSection;