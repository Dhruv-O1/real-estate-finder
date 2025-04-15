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

import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
import heroBg2 from '../../landing/assets/img/hero_bg_2.jpg';
import img1 from '../../landing/assets/img/img_1.jpg';
import img2 from '../../landing/assets/img/img_1.jpg';
import img3 from '../../landing/assets/img/img_3.jpg';
import { Footer } from './Footer';


export const About = () => {

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
    style={{ backgroundImage: `url(${heroBg3})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 
            className="heading"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About
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
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row text-left mb-5">
        <div className="col-12">
          <h2 className="font-weight-bold heading text-primary mb-4">
            About Us
          </h2>
        </div>
        <div className="col-lg-6">
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
            veniam sed blanditiis unde ullam maxime veritatis perferendis
            cupiditate, at non esse!
          </p>
          <p className="text-black-50">
            Enim, nisi labore exercitationem facere cupiditate nobis quod autem
            veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
            labore impedit omnis, nihil aut atque, facilis necessitatibus
            asperiores porro qui nam.
          </p>
        </div>
        <div className="col-lg-6">
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
            veniam sed blanditiis unde ullam maxime veritatis perferendis
            cupiditate, at non esse!
          </p>
          <p className="text-black-50">
            Enim, nisi labore exercitationem facere cupiditate nobis quod autem
            veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
            labore impedit omnis, nihil aut atque, facilis necessitatibus
            asperiores porro qui nam.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="section pt-0">
    <div className="container">
      <div className="row justify-content-between mb-5">
        <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
          <div className="img-about dots">
            <img src={heroBg3} alt="Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-home2" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Quality properties</h3>
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
              <h3 className="heading">Top rated agents</h3>
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
              <h3 className="heading">Easy and safe</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section pt-0">
    <div className="container">
      <div className="row justify-content-between mb-5">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="img-about dots">
            <img src={heroBg2}alt="Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-home2" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Quality properties</h3>
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
              <h3 className="heading">Top rated agents</h3>
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
              <h3 className="heading">Easy and safe</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div
          className="col-md-4 aos-init"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <img src={img1} alt="Image" className="img-fluid" />
        </div>
        <div
          className="col-md-4 mt-lg-5 aos-init"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <img src={img3} alt="Image" className="img-fluid" />
        </div>
        <div
          className="col-md-4 aos-init"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <img src={img2} alt="Image" className="img-fluid" />
        </div>
      </div>
      <div className="row section-counter mt-5">
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">2917</span>
            </span>
            <span className="caption text-black-50"># of Buy Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">3918</span>
            </span>
            <span className="caption text-black-50"># of Sell Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">38928</span>
            </span>
            <span className="caption text-black-50"># of All Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">1291</span>
            </span>
            <span className="caption text-black-50"># of Agents</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section sec-testimonials bg-light">
    <div className="container">
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
            The Team
          </h2>
        </div>
        <div className="col-md-6 text-md-end">
          <div
            id="testimonial-nav"
            aria-label="Carousel Navigation"
            tabIndex={0}
          >
            <span
              className="prev"
              data-controls="prev"
              aria-controls="tns1"
              tabIndex={-1}
            >
              Prev
            </span>
            <span
              className="next"
              data-controls="next"
              aria-controls="tns1"
              tabIndex={-1}
            >
              Next
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4" />
      </div>
      <div className="testimonial-slider-wrap">
        <div className="tns-outer" id="tns1-ow">
          <div className="tns-nav" aria-label="Carousel Pagination">
            <button
              type="button"
              data-nav={0}
              aria-controls="tns1"
              style={{}}
              aria-label="Carousel Page 1 (Current Slide)"
              className="tns-nav-active"
            />
            <button
              type="button"
              data-nav={1}
              tabIndex={-1}
              aria-controls="tns1"
              style={{}}
              aria-label="Carousel Page 2"
            />
            <button
              type="button"
              data-nav={2}
              tabIndex={-1}
              aria-controls="tns1"
              style={{ display: "none" }}
              aria-label="Carousel Page 3"
            />
            <button
              type="button"
              data-nav={3}
              tabIndex={-1}
              aria-controls="tns1"
              style={{ display: "none" }}
              aria-label="Carousel Page 4"
            />
          </div>
          <div
            className="tns-liveregion tns-visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            slide <span className="current">9 to 11</span> of 4
          </div>
          <div id="tns1-mw" className="tns-ovh">
            <div className="tns-inner" id="tns1-iw">
              <div
                className="testimonial-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                id="tns1"
                style={{ transform: "translate3d(-50%, 0px, 0px)" }}
              >
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_3-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Synthia Cameron</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Davin Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_1-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">James Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_2-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Carol Houston</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_3-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Synthia Cameron</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Davin Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item"
                  id="tns1-item0"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_1-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">James Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item"
                  id="tns1-item1"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_2-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Carol Houston</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div className="item tns-item tns-slide-active" id="tns1-item2">
                  <div className="testimonial">
                    <img
                      src="images/person_3-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Synthia Cameron</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div className="item tns-item tns-slide-active" id="tns1-item3">
                  <div className="testimonial">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Davin Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div className="item tns-item tns-slide-cloned tns-slide-active">
                  <div className="testimonial">
                    <img
                      src="images/person_1-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">James Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_2-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Carol Houston</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_3-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Synthia Cameron</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Davin Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_1-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">James Smith</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="testimonial">
                    <img
                      src="images/person_2-min.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle w-25 mb-4"
                    />
                    <h3 className="h5 text-primary">Carol Houston</h3>
                    <p className="text-black-50">Designer, Co-founder</p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
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
</>

  )
}
