import React from 'react';
import '../../assets/assets/css/vendor/bootstrap.min.css';
import '../../assets/assets/css/vendor/swiper.min.css';
import '../../assets/assets/css/vendor/dynamic-slider.min.css';
import '../../assets/assets/css/core.css';
import '../../assets/assets/css/main.css';
import '../../assets/assets/css/theme.css';
import Image from '../../assets/assets/images/jpg/a-36.jpg';


const BgImageSection = () => {




    return (
     <>
        
        <section className="shock-section bg-image bg-fixed" style={{ backgroundImage: `url(${Image})` }}>
      
        <div className="holder vh-75"></div>
      </section>


     </>
);

    };


export default BgImageSection;