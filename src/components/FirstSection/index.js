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

const FirstSection = () => {




    return (
     <>
      <section className="shock-section pb-4">
        <div className="container max-w-85">
          <div className="holder ps-25 pe-25 climb simple shadow rounded bg-color white" data-lax="inertia-top">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card has-icon pt-25 pb-25 parent">
                  <img className="card-image-icon primary hover-up-down" src="assets/svg/umbrella-outline.svg" alt="Icon name" data-shock-icon="32" />
                  <h3 className="title text-style-11 black">Clothing</h3>
                  <p className="description">This is a example of a summary description for this item.</p>
    
                  <Link to="#your-link" className="full-link"></Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card has-icon pt-25 pb-25 parent">
                  <img className="card-image-icon primary hover-up-down" src="assets/svg/fitness-outline.svg" alt="Icon name" data-shock-icon="32" />
                  <h3 className="title text-style-11 black">Pharmacy</h3>
                  <p className="description">This is a example of a summary description for this item.</p>
                  
                  <Link to="#your-link" className="full-link"></Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card has-icon pt-25 pb-25 parent">
                  <img className="card-image-icon primary hover-up-down" src="assets/svg/game-controller-outline.svg" alt="Icon name" data-shock-icon="32" />
                  <h3 className="title text-style-11 black">Appliances</h3>
                  <p className="description">This is a example of a summary description for this item.</p>
                  
                  <Link to="#your-link" className="full-link"></Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card has-icon pt-25 pb-25 parent">
                  <img className="card-image-icon primary hover-up-down" src="assets/svg/settings-outline.svg" alt="Icon name" data-shock-icon="32" />
                  <h3 className="title text-style-11 black">Miscellaneous</h3>
                  <p className="description">This is a example of a summary description for this item.</p>
                
                  <Link to="#your-link" className="full-link"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </>
);

    };


export default FirstSection;