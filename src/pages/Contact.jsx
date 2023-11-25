import React from 'react';


import  Banner from '../assets/assets/images/jpg/a-41.jpg';
import Gif from '../assets/assets/images/gif/gif.gif';
import { Link } from "react-router-dom";



const Contact = () => {

    return (

        <>
     
     
    <main id="main" className="shock-main">

     
      <section className="shock-section has-overlay pb-5">
        <div className="banner">
          <div className="content-wrapper text-center">
            <div className="container">
             
              <div className="extended-intro max-w-75 mb-35">
                <h1 className="title white">
                  <span className="text-1 text-style-2">Request an expert</span>
                  <span className="text-2 text-style-4 text-italic">building a better world.</span>
                </h1>
              </div>
            </div>
          </div>
         
          <div className="image-wrapper">
            <img src={Banner} className="image vh-75 fit-cover" alt="This is an example description for this item." />
          </div>
         
          <div className="overlay black-50"></div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6 align-v-start order-2 order-md-1">
             
              <div className="collapsible mt-35">
                <div className="collapse-group">
                  <Link to="#collapse-1" className="collapse-toggle parent" aria-expanded="true" aria-controls="collapse-1" data-bs-toggle="collapse">
                    <div className="collapse-button rounded gray-25">
                      <span className="arrow-button cross scheme-1 primary">
                        <span className="arrow">
                          <span className="item"></span>
                          <span className="item"></span>
                        </span>
                        <span className="line"></span>
                      </span>
                    </div>
                    <h3 className="title text-style-11 black">
                      Why is this question already showing the answer?
                    </h3>
                  </Link>
                  <div id="collapse-1" className="collapse-content collapse show">
                    <p>Because a class called <mark className="animated-underline accent text-black">show</mark> was set in the html and thus it stays open when loading the page.</p>
                    <p>This is certainly useful to keep the most important question and answer highlighted.</p>
                  </div>
                </div>
                <div className="collapse-group">
                  <Link to="#collapse-2" className="collapse-toggle parent" aria-expanded="false" aria-controls="collapse-2" data-bs-toggle="collapse">
                    <div className="collapse-button rounded gray-25">
                      <span className="arrow-button cross scheme-1 primary">
                        <span className="arrow">
                          <span className="item"></span>
                          <span className="item"></span>
                        </span>
                        <span className="line"></span>
                      </span>
                    </div>
                    <h3 className="title text-style-11 black">
                      How to make a word have this highlight color?
                    </h3>
                  </Link>
                  <div id="collapse-2" className="collapse-content collapse">
                    <p>To get this highlighted text, <mark className="animated-underline accent text-black">just use the html mark tag</mark>, and use a color class. 😃</p>
                    <p>Also works well with <mark className="animated-underline primary-50 text-black">other colors</mark> by adding a color class to the element, but use it sparingly or it may become exaggerated.</p>
                  </div>
                </div>
                <div className="collapse-group">
                  <Link to="#collapse-3" className="collapse-toggle parent" aria-expanded="false" aria-controls="collapse-3" data-bs-toggle="collapse">
                    <div className="collapse-button rounded gray-25">
                      <span className="arrow-button cross scheme-1 primary">
                        <span className="arrow">
                          <span className="item"></span>
                          <span className="item"></span>
                        </span>
                        <span className="line"></span>
                      </span>
                    </div>
                    <h3 className="title text-style-11 black">
                      This theme is very beautiful, but is it easy to use?
                    </h3>
                  </Link>
                  <div id="collapse-3" className="collapse-content collapse">
                    <p>Yea! 😍</p>
                    <p>This theme was made to make it easier to build any type of website. Also the item support is very friendly and professional.</p>
                    <img src={Gif} alt="name" className="image max-w-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="holder p-25 climb shadow rounded bg-color white" data-lax="inertia-top">
               
                <div className="basic-intro mb-15">
                  <h2 className="title black">
                    <span className="text-1 text-style-7">How can we </span>
                    <span className="text-2 text-style-8 text-italic typed-text"></span>                  
                  </h2>
                  
                  <div id="typed-strings">
                    <span>talk to you?</span>
                    <span>help your company?</span>
                    <span>show solutions?</span>
                  </div>  
                </div>
               
                <div className="form-area scheme-1 primary">
                  <form action="php/sender.php" className="form-fields needs-validation ajax-form" novalidate="novalidate">
                    <div className="form-row row">
                      <div className="form-col form-floating col-12 col-md-6">
                        <input type="text" name="name" id="InputFloatingName" className="form-control" placeholder="Name" required="required" />
                        <label for="InputFloatingName" className="form-label">Name</label>
                        <div className="invalid-feedback">Please enter your name.</div>
                        <div className="valid-feedback">Looks good.</div>
                      </div>
                      <div className="form-col form-floating col-12 col-md-6">
                        <input type="email" name="email" id="InputFloatingEmail" className="form-control" placeholder="name@example.com" required="required" />
                        <label for="InputFloatingEmail" className="form-label">Email</label>
                        <div className="invalid-feedback">Please enter a valid email address.</div>
                        <div className="valid-feedback">Looks good.</div>
                      </div>
                    </div>
                    <div className="form-row row">
                      <div className="form-col form-floating col-12">
                        <textarea name="message" id="InputFloatingMessage" className="form-control form-textarea" rows="3" placeholder="Enter your message (optional)."></textarea>
                        <label for="InputFloatingMessage" className="form-label">Message</label>
                        <div className="valid-feedback">It's optional, but we'd like to know about it :)</div>
                      </div>
                    </div>
                    <div className="form-row row">
                      <div className="form-col col-12">
                        <div className="form-check">
                          <input type="radio" name="info" id="InputRadio1" className="form-check-input form-radio" checked="checked" value="I found this site by searching the internet." required="required" />
                          <label className="form-label form-check-label" for="InputRadio1">
                            I found this site by searching the internet.
                          </label>
                        </div>
                      </div>
                      <div className="form-col col-12">
                        <div className="form-check">
                          <input type="radio" name="info" id="InputRadio2" className="form-check-input form-radio primary" value="A friend recommended this site to me." required="required" />
                          <label className="form-label form-check-label" for="InputRadio2">
                            A friend recommended this site to me.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-row row">
                      <div className="form-col form-floating col-12">
                        <button className="button double-edge transparent primary-hover">
                          <span className="button-text black white-hover">Send message</span>
                          <i className="fa-solid fa-arrow-right button-icon black white-hover"></i>
                          <span className="overlay gray-50 magnetic-effect"></span>
                        </button>
                      </div>
                    </div>
                    <input type="hidden" name="subject" value="Message sent through the contact form." />
                    <span className="form-alert success">Your message was sent successful. Thanks.</span>
                    <span className="form-alert error">Sorry. We were unable to send your message.</span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
       
        </>

     );

    };




export default Contact;