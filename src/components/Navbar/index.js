import React, { useState } from 'react';
import Logo from '../../assets/assets/images/png/brands/logo.png';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import { Link } from 'react-router-dom';
import Icon1 from '../../assets/assets/svg/send-outline.svg';
import Chevron from '../../assets/assets/svg/chevron-down-outline.svg'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <header id="header" className="shock-header">

<nav id="navbar" className="navbar navbar-expand-lg smart-scroll hover-line-left scheme-2 primary">
      <div className="container">

        <Link className="navbar-brand" to="/">

          <img src={Logo} alt="Shock Theme" className="logo main-logo" />
          <span className="logo-after-text">JIMMY JACK</span>
        </Link>

        <button className="navbar-toggler" data-bs-target="#navbar-items" data-bs-toggle="collapse" aria-expanded="false">
          <span className="navbar-toggler-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
        </button>

        <div id="navbar-items" className="collapse navbar-collapse focus-trigger">

          <div className="search-bar navbar-collapse-form">
            <div className="form-area d-only-mobile d-none scheme-1">
              <form className="form-fields needs-validation" novalidate="novalidate">
                <div className="form-row row has-icon">
                  <div className="form-col mb-0 form-floating">
                    <button className="button overlay-button"><img className="overlay-image-icon" src={Icon1} alt="Icon one" data-shock-icon="32" /></button>
                    <input id="InputSearchMobile" className="form-control focus-trigger-field" name="InputSearchMobile" placeholder="Type keywords..." required="required" />
                    <label for="InputSearchMobile" className="form-label">Type keywords...</label>
                  </div>
                </div>
              </form>
            </div>
          </div>

       
 
        </div>
      </div>
    </nav>
  </header>
    </>
  );
}

export default Navbar;