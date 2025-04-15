import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
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

import heroBg2 from '../../landing/assets/img/hero_bg_2.jpg';
import { Footer } from './Footer';
import { Testimonials } from './Testimonials';


export const Services = () => {

  
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
    style={{ backgroundImage: `url(${heroBg2})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 
            className="heading"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Services
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
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>



  {/* <div className="section bg-light">
    <div className="container">
      <div className="row">
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house mb-4 d-block" />
            <h3 className="text-black mb-3 font-weight-bold">
              Quality Properties
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house-2 mb-4 d-block-3" />
            <h3 className="text-black mb-3 font-weight-bold">
              Top Rated Agent
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-building mb-4 d-block" />
            <h3 className="text-black mb-3 font-weight-bold">
              Property for Sale
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house-3 mb-4 d-block-1" />
            <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house-4 mb-4 d-block" />
            <h3 className="text-black mb-3 font-weight-bold">
              Quality Properties
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-building mb-4 d-block-3" />
            <h3 className="text-black mb-3 font-weight-bold">
              Top Rated Agent
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house mb-4 d-block" />
            <h3 className="text-black mb-3 font-weight-bold">
              Property for Sale
            </h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div
          className="col-6 col-lg-3 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="box-feature mb-4">
            <span className="flaticon-house-1 mb-4 d-block-1" />
            <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
            <p className="text-black-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              <a href="#" className="learn-more">
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> */}

<div className="section bg-light">
  <div className="container">
    <div className="row">
      {/* Feature 1 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
        <div className="box-feature mb-4">
          <span className="flaticon-house mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">Quality Properties</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
        <div className="box-feature mb-4">
          <span className="flaticon-house-2 mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">Top Rated Agent</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
        <div className="box-feature mb-4">
          <span className="flaticon-building mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">Property for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
        <div className="box-feature mb-4">
          <span className="flaticon-house-3 mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Repeat the pattern for remaining features */}
      {/* Feature 5 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
        <div className="box-feature mb-4">
          <span className="flaticon-house-4 mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
        <div className="box-feature mb-4">
          <span className="flaticon-building mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 7 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
        <div className="box-feature mb-4">
          <span className="flaticon-house mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Feature 8 */}
      <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
        <div className="box-feature mb-4">
          <span className="flaticon-house-1 mb-4 d-block" />
          <h3 className="text-black mb-3 font-weight-bold">House for Sale</h3>
          <p className="text-black-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            <a href="#" className="learn-more">
              Read more
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  <Testimonials/>


  <Footer/>
  {/* /.site-footer */}
  {/* Preloader */}
  <div id="overlayer" style={{ opacity: "-0.1", display: "none" }} />
  <div className="loader" style={{ opacity: "-0.1", display: "none" }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
</>

  )
}
