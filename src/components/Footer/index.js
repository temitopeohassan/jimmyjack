import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/assets/images/png/brands/footer-logo.png';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import  Submit from '../../assets/assets/svg/send-outline.svg';


function Footer() {
  return (
   
   <>
 <footer id="footer" className="shock-footer scheme-1 primary">
      <div className="footer-content focus-trigger">
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-item">
               
                <Link to="/" className="footer-brand">
                 
                  <img src= {Logo} alt="Shock Theme" className="logo" />
                  <span className="logo-after-text">JIMMY JACK</span>
                </Link>
           
                <div className="footer-text">
                  <p>Shock is a creative multipurpose theme for building websites.</p>
                </div>
              </div>
              <div className="footer-item">
                
                <div className="list-wrapper">
                  <ul className="icon-h-list">
                    <li className="item ms-0">
                      <Link to="#" className="link gray primary-hover hover-rotate"><i className="icon fab fa-facebook-f"></i></Link>
                    </li>
                    <li className="item">
                      <Link to="#" className="link gray primary-hover hover-rotate"><i className="icon fab fa-twitter"></i></Link>
                    </li>
                    <li className="item">
                      <Link to="#" className="link gray primary-hover hover-rotate"><i className="icon fab fa-linkedin-in"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-item">
              
                
              
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <h6 className="title">Menu</h6>
               
                <ul className="nav-list list-unstyled">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <span className="text">Home</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      <span className="text">About JJTS & Co</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      <span className="text">Shop Jimmy Jack</span>
                    </Link>
                  </li>
             
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      <span className="text">Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <h6 className="title">Categories</h6>
                
                
                <div className="tag-cloud">
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Environment</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover floating-item-smooth">
                      <span className="badge-text gray white-hover">Events</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Technology</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Web</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Mobile</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Design</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Branding</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Development</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Artificial</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Intelligence</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Engineering</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Innovation</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Social</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Fashion</span>
                    </span>
                  </Link>
                  <Link to="#your-link" className="link">                      
                    <span className="badge outline gray-50 primary-hover">
                      <span className="badge-text gray white-hover">Product</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <h6 className="title">Susbcribe</h6>
               
                
                <div className="footer-text">
                  <p>Subscribe to our newsletter and stay up to date with what's happening in the world.</p>
                  <p>By submitting this form you agree to the <Link to="#" className="link gray primary-hover"><u>terms of use</u>.</Link></p>
                </div>
                
                
                <div className="form-area scheme-2">
                  <form action="php/sender.php" className="form-fields needs-validation ajax-form" novalidate="novalidate">
                    <div className="form-row row has-icon">
                      <div className="form-col form-floating">
                        <button className="button overlay-button"><img className="overlay-image-icon" src={Submit} alt="Icon name" data-shock-icon="32" /></button>
                        <input type="email" name="email" id="InputFloatingFooter" className="form-control focus-trigger-field" placeholder="Type your email..." required="required" />
                        <label for="InputFloatingFooter" className="form-label">Type your email...</label>
                      </div>
                    </div>
                    <input type="hidden" name="subject" value="Message sent through the contact form." />
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="text">© 2023 JJTS & Co - All rights reserved.</div>
      </div>
    </footer>
   </>
  );
}

export default Footer;