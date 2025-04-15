import React, { useEffect } from 'react'
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

import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
import person4 from '../../landing/assets/img/person_4-min.jpg';
import person5 from '../../landing/assets/img/person_5-min.jpg';
import person6 from '../../landing/assets/img/person_6-min.jpg';


// import 'icofont/icofont.min.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { PopularProperty } from './PopularProperty';
import { Testimonials } from './Testimonials';
import CounterSection from './CounterSection';
import { Footer } from './Footer';

export const Landing = () => {

  useEffect(() => {
    window.addEventListener('resize', AOS.refresh);
    AOS.init({ duration: 1000,once: true, });
    
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 120,
      mirror: false
    });

    

    return () => window.removeEventListener('resize', AOS.refresh);
  }, []);
  return (
    <>
  

  <Navbar/>
  
  <Hero/>


  <PopularProperty/>
  
  <section className="features-1">
  <div className="container">
    <div className="row">
      {/* Feature 1 */}
      <div 
        className="col-6 col-lg-3"
        data-aos="fade-up" 
        data-aos-delay="300"
      >
        <div className="box-feature">
          <span className="flaticon-house" />
          <h3 className="mb-3">Our Properties</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div 
        className="col-6 col-lg-3"
        data-aos="fade-up" 
        data-aos-delay="400"
      >
        <div className="box-feature">
          <span className="flaticon-building" />
          <h3 className="mb-3">Property for Sale</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div 
        className="col-6 col-lg-3"
        data-aos="fade-up" 
        data-aos-delay="500"
      >
        <div className="box-feature">
          <span className="flaticon-house-3" />
          <h3 className="mb-3">Real Estate Agent</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div 
        className="col-6 col-lg-3"
        data-aos="fade-up" 
        data-aos-delay="600"
      >
        <div className="box-feature">
          <span className="flaticon-house-1" />
          <h3 className="mb-3">House for Sale</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, accusamus.
          </p>
          <p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  
  <Testimonials/>


  <div className="section section-4 bg-light">
    <div className="container" >
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-5">
          <h2 className="font-weight-bold heading text-primary mb-4">
            Let's find home that's perfect for you
          </h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit.
          </p>
        </div>
      </div>
      <div className="row justify-content-between mb-5">
        <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
          <div className="img-about dots">
            <img src={heroBg3}  alt="Property showcase"   className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-home2" />
            </span>
            <div className="feature-text">
              <h3 className="heading">2M Properties</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-person" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Top Rated Agents</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-security" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Legit Properties</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <CounterSection/>
      
    </div>
  </div>


  <div 
  className="section"
  data-aos="fade-up"
  data-aos-delay="300"
  >
    <div className="row justify-content-center footer-cta">
      <div className="col-lg-7 mx-auto text-center">
        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="400">
          Be a part of our growing real state agents
        </h2>
        <p data-aos="fade-up" data-aos-delay="500">
          <a
            href="#"
            target="_blank"
            className="btn btn-primary text-white py-3 px-4"
          >
            Apply for Real Estate agent
          </a>
        </p>
      </div>
    </div>
  </div>


  <div className="section section-5 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-6 mb-5">
          <h2 className="font-weight-bold heading text-primary mb-4">
            Our Agents
          </h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            
            <img src={person4}  alt="Image"   className="img-fluid"/>
            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">James Doe</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            
            <img src={person5}  alt="Property showcase"   className="img-fluid"/>

            
            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">Jean Smith</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            
            <img src={person6}  alt="Property showcase"   className="img-fluid"/>

            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">Alicia Huston</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


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
