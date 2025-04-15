import React, { useEffect, useRef } from 'react';
import { tns } from 'tiny-slider';
import AOS from 'aos';
import 'tiny-slider/dist/tiny-slider.css';
import 'aos/dist/aos.css';

// Import images
import person1 from '../../landing/assets/img/person_1-min.jpg';
import person2 from '../../landing/assets/img/person_2-min.jpg';
import person3 from '../../landing/assets/img/person_3-min.jpg';
import person4 from '../../landing/assets/img/person_4-min.jpg';
import person5 from '../../landing/assets/img/person_5-min.jpg';
import person6 from '../../landing/assets/img/person_6-min.jpg';
// import person4 from '../../landing/assets/img/user1.jpg';

const testimonials = [
  {
    id: 1,
    buttonIndex:1,
    image: person1,
    name: "James Smith",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  },
  {
    id: 2,
    buttonIndex:1,
    image: person2,
    name: "Mike Houston",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  },
  {
    id: 3,
    buttonIndex:1,
    image: person3,
    name: "Cameron Webster",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  },
  {
    id: 4,
    buttonIndex:2,
    image: person4,
    name: "Dave Smith",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  },
  {
    id: 5,
    buttonIndex:2,

    image: person5,
    name: "Dave Smith",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  },
  {
    id: 6,
    buttonIndex:2,

    image: person6,
    name: "Dave Smith",
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    role: "Designer, Co-founder"
  }
];

export const Testimonials = () => {
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
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: '#testimonial-nav',
        prevButton: prevButton.current,
        nextButton: nextButton.current,
        navPosition: 'bottom',
        responsive: {
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
    <div className="section sec-testimonials" data-aos="fade-up">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0" data-aos="zoom-in">
              Customer Says
            </h2>
          </div>
          <div className="col-md-6 text-md-end">
            <div id="testimonial-nav" className="controls" aria-label="Carousel Navigation">
              <span
                className="prev"
                ref={prevButton}
                data-controls="prev"
                aria-label="Previous"
                data-aos="fade-left"
              >
                Prev
              </span>
              <span
                className="next"
                ref={nextButton}
                data-controls="next"
                aria-label="Next"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Next
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-slider-wrap">
          <div className="tns-outer">
            <div className="tns-nav" aria-label="Carousel Pagination">
              {testimonials.map((_,index) => (
                <button
                  key={index}
                  type="button"
                  data-nav={_.buttonIndex}
                  aria-label={`Carousel Page ${_.buttonIndex + 1}`}
                  className={index === 0 ? 'tns-nav-active' : ''}
                />
              ))}
            </div>
            
            <div className="tns-ovh">
              <div className="tns-inner">
                <div className="testimonial-slider tns-slider" ref={sliderRef}>
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="item"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="testimonial">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="img-fluid rounded-circle w-25 mb-4"
                        />
                        <div className="rate">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="icon-star text-warning" />
                          ))}
                        </div>
                        <h3 className="h5 text-primary mb-4">{testimonial.name}</h3>
                        <blockquote>
                          <p>{testimonial.quote}</p>
                        </blockquote>
                        <p className="text-black-50">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};