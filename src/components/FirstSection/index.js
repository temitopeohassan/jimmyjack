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
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card has-icon pt-25 pb-25 parent">
                  <h3 className="title text-style-3 black"> 
                  <span className="text-1 text-outline black-75">Welcome To</span>
              <span className="text-2 text-italic black">Our <mark className="animated-underline primary">World</mark>.</span>
            
                  </h3>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tellus accumsan magna elementum, eget sollicitudin tellus hendrerit. In velit lorem, pretium vel eros eu, aliquam venenatis turpis. Curabitur rutrum turpis a mauris vulputate vestibulum. Vestibulum tincidunt, felis nec facilisis gravida, quam lacus viverra leo, quis auctor felis purus eget ligula.</p>
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