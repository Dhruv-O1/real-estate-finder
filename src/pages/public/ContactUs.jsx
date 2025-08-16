import React, { useEffect } from 'react'
import { Navbar } from '../../components/common/Navbar'
import '../../landing/assets/fonts/icommon/style.css';
import '../../landing/assets/fonts/flaticon/flaticon.css';
import '../../landing/css/tiny-slider.css';
import '../../landing/css/aos.css';
import '../../landing/css/style.css';
// import '../../landing/js/aos';
import '../../landing/js/counter';
// import '../../landing/js/custom';
import '../../landing/js/navbar';
import '../../landing/js/tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';

import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import { Footer } from '../../components/common/Footer';


export const ContactUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 120
    });
  }, []);

  return (

    
    <>
  <Navbar/>
  <div
    className="hero page-inner overlay"
    style={{ backgroundImage: `url(${heroBg1})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 
            className="heading"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us
          </h1>
          <nav
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ol className="breadcrumb text-center justify-content-center">
              <li className="breadcrumb-item">
                <a 
              href="index.html"
              className="text-decoration-none hover-lift"
            >
              Home
                </a>
              </li>
              <li
                className="breadcrumb-item active text-white-50"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="contact-info">
            <div className="address mt-2">
              <i className="icon-room" />
              <h4 className="mb-2">Location:</h4>
              <p>
                43 Raymouth Rd. Baltemoer,
                <br />
                London 3910
              </p>
            </div>
            <div className="open-hours mt-4">
              <i className="icon-clock-o" />
              <h4 className="mb-2">Open Hours:</h4>
              <p>
                Sunday-Friday:
                <br />
                11:00 AM - 2300 PM
              </p>
            </div>
            <div className="email mt-4">
              <i className="icon-envelope" />
              <h4 className="mb-2">Email:</h4>
              <p>info@Untree.co</p>
            </div>
            <div className="phone mt-4">
              <i className="icon-phone" />
              <h4 className="mb-2">Call:</h4>
              <p>+1 1234 55488 55</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-8 aos-init aos-animate"
          data-aos="fade-up"
            data-aos-delay="200"
        >
          <form action="#">
            <div className="row">
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  fdprocessedid="r8r3k7"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  fdprocessedid="7a9s7j"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  fdprocessedid="sjdoo"
                />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary"
                  fdprocessedid="h5w4fn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /.untree_co-section */}
  <Footer/>
  {/* /.site-footer */}
  {/* Preloader */}
  <div id="overlayer" style={{ opacity: "-0.1", display: "none" }} />
  <div className="loader" style={{ opacity: "-0.1", display: "none" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  <span id="PING_IFRAME_FORM_DETECTION" style={{ display: "none" }} />
</>

  )
}
