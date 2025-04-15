import React, { useEffect, useRef } from 'react';
import { tns } from 'tiny-slider';
import AOS from 'aos';
import 'tiny-slider/dist/tiny-slider.css';
import 'aos/dist/aos.css';

// Import images (update paths according to your project structure)
import img1 from '../../landing/assets/img/img_1.jpg';
import img2 from '../../landing/assets/img/img_1.jpg';
import img3 from '../../landing/assets/img/img_3.jpg';
import img4 from '../../landing/assets/img/img_4.jpg';
import img5 from '../../landing/assets/img/img_5.jpg';
import img6 from '../../landing/assets/img/img_6.jpg';
import img7 from '../../landing/assets/img/img_7.jpg';
import img8 from '../../landing/assets/img/img_8.jpg';

const properties = [
  { id: 1, img: img1, price: "$1,291,000" },
  { id: 2, img: img2, price: "$1,291,000" },
  { id: 3, img: img3, price: "$1,291,000" },
  { id: 4, img: img4, price: "$1,291,000" },
  { id: 5, img: img5, price: "$1,291,000" },
  { id: 6, img: img6, price: "$1,291,000" },
  { id: 7, img: img7, price: "$1,291,000" },
  { id: 8, img: img8, price: "$1,291,000" },
];

export const PopularProperty = () => {
  const sliderRef = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      offset: 120
    });

    if (sliderRef.current) {
      const slider = tns({
        container: sliderRef.current,
        items: 3,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: '#property-nav',
        prevButton: prevButton.current,
        nextButton: nextButton.current,
        navPosition: 'bottom',
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        },
        speed: 600,
        gutter: 30,
      });

      return () => slider.destroy();
    }
  }, []);

  return (
    <div className="section" data-aos="fade-up">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading" data-aos="zoom-in">
              Popular Properties
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p data-aos="fade-left">
              <a href="#" className="btn btn-primary text-white py-3 px-4">
                View all properties
              </a>
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="property-slider-wrap">
              <div className="tns-outer">
                <div className="tns-nav" aria-label="Carousel Pagination">
                  {[...Array(9)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-nav={i}
                      aria-label={`Carousel Page ${i+1}`}
                      className={i === 2 ? 'tns-nav-active' : ''}
                    />
                  ))}
                </div>
                
                <div className="tns-ovh">
                  <div className="tns-inner">
                    <div
                      className="property-slider tns-slider"
                      ref={sliderRef}
                    >
                      {properties.map((property, index) => (
                        <div
                          key={property.id}
                          className="property-item"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          <a href="property-single.html" className="img">
                            <img
                              src={property.img}
                              alt={`Property ${property.id}`}
                              className="img-fluid"
                            />
                          </a>
                          <div className="property-content">
                            <div className="price mb-2">
                              <span>{property.price}</span>
                            </div>
                            <div>
                              <span className="d-block mb-2 text-black-50">
                                5232 California Fake, Ave. 21BC
                              </span>
                              <span className="city d-block mb-3">
                                California, USA
                              </span>
                              <div className="specs d-flex mb-4">
                                <span className="d-block d-flex align-items-center me-3">
                                  <span className="icon-bed me-2" />
                                  <span className="caption">2 beds</span>
                                </span>
                                <span className="d-block d-flex align-items-center">
                                  <span className="icon-bath me-2" />
                                  <span className="caption">2 baths</span>
                                </span>
                              </div>
                              <a
                                href="property-single.html"
                                className="btn btn-primary py-2 px-3"
                              >
                                See details
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div id="property-nav" className="controls">
                <span
                  className="prev"
                  ref={prevButton}
                  data-controls="prev"
                  aria-label="Previous"
                >
                  Prev
                </span>
                <span
                  className="next"
                  ref={nextButton}
                  data-controls="next"
                  aria-label="Next"
                >
                  Next
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};