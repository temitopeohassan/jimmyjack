import React from 'react';


import  Banner from '../assets/assets/images/jpg/a-5.jpg';
import  Img1 from '../assets/assets/images/jpg/k-1.jpg';
import Img2 from '../assets/assets/images/jpg/k-2.jpg';
import Img3 from '../assets/assets/images/jpg/k-3.jpg';
import  BgImage from '../assets/assets/images/jpg/a-31.jpg';
import { Link } from "react-router-dom";



const About = () => {

    return (

        <>
     
     <main id="main" className="shock-main bg-color gray-10">
      
     <section className="shock-section has-overlay">
        <div className="banner">
          <div className="content-wrapper">
           
            <div className="extended-intro max-w-65">
              <h1 className="title white">
                <span className="text-1 text-style-1">Who we are</span>
                <span className="text-2 text-style-4 text-italic">building a better <mark className="animated-underline primary">world</mark> !</span>
              </h1>
            </div>
          </div>
        
          <div className="image-wrapper">
            <img src={Banner} className="image vh-65 fit-cover" alt="This is an example description for this item." />
          </div>
          
          <div className="overlay black-50"></div>
        </div>
      </section>

      <section className="shock-section has-holder pt-4 pb-5 js-auto-width overflow-hidden">
        <div className="container">
         
          <div className="basic-intro mb-35 text-center">
            <h1 className="title text-style-3">
              <span className="text-1 text-outline black-75">Discover</span>
              <span className="text-2 text-italic black">our <mark className="animated-underline primary">history</mark>.</span>
            </h1>
            <hr className="gray-25" />
          </div>
         
          <div className="js-auto-width-wrapper">
            <div className="gallery swiper slider stretched has-gap has-overflow-right scheme-1 secondary" data-columns="2,2,1,1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src={Img1} className="image vh-50 fit-cover small-shadow rounded-3" alt="This is an example description for this item." />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src={Img3} className="image vh-50 fit-cover small-shadow rounded-3" alt="This is an example description for this item." />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src="" className="image vh-50 fit-cover small-shadow rounded-3" alt="This is an example description for this item." />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src={Img1} className="image vh-50 fit-cover small-shadow rounded-3" alt="This is an example description for this item." />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-wrapper">
                    <img src={Img2} className="image vh-50 fit-cover small-shadow rounded-3" alt="This is an example description for this item." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="shock-section pb-5">
        <div className="container max-w-85">
          <div className="content scheme-1">
     
            <div className="breadcrumb-nav scheme-1 primary">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item has-icon">
                    <Link to="/" className="breadcrumb-link"><i className="fa-solid fa-house icon"></i><span className="text">Home</span></Link>
                  </li>
                
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
           
            <h3>After all, why is design important?</h3>
            <p>Design is a broad concept that represents the process of creating products based on technical and aesthetic excellence, with the aim of <mark className="animated-underline primary-25 text-black">solving problems</mark> and adding value.</p>
            <p>This is the most objective definition possible for the concept, which encompasses numerous forms of idealization, conception, development and specification of objects.</p>
            <p>Design is fundamental because it optimizes human creation, combining aesthetics with functionality. It is a process capable of adding value and generating more efficient, comfortable, safe and <mark className="animated-underline primary-25 text-black">beautiful solutions</mark>.</p>

         
          </div>
        </div>
      </section>

      
      <section className="shock-section has-overlay bg-image bg-fixed" style={{ backgroundImage: `url(${BgImage})` }}>
        <div className="banner vh-65 align-h-center align-v-center">
          <div className="holder">
            <div className="gallery">
              <Link to="../https@vimeo.com/222990241" className="item active lightbox-link">
               
                <div className="circular-text large mix-blend-lighter" data-lax="inertia-top">
                  <div className="emblem gray">Consistent•Design•</div>
                </div>
                <i className="fa-solid fa-circle-play gallery-icon white"></i>
              </Link>
            </div>
          </div>
        </div>          
       
        <div className="overlay gray-25"></div>
      </section>

  
      <section className="shock-section pt-5 pb-5">
        <div className="container max-w-85">
          <div className="content scheme-1">                
            
            <h3 className="mt-0">The history of design</h3>
            <p>If we take the term literally, our ancestors already practiced design when creating their chipped stone tools. However, to facilitate understanding, let's place the concept in our age.</p>
            <p>In this case, who deserves the title of first designer in history is <Link to="#"><u>Leonardo Da Vinci</u></Link>.</p>
            <p>The genius used design principles to design visionary inventions that revolutionized humanity and propelled science forward.</p>
            
            <figure className="blockquote">
              <blockquote className="blockquote-body text-style-11 black">
                <p>"The design is not just what it looks like. The design is how it works".</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Steve Jobs / Apple Founder</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>


 

 
    </main>
       
        </>

     );

    };




export default About;