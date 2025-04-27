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
    quote: "The property search filters saved me hours! Found my dream home in just 2 days. The team was responsive and even set up virtual tours instantly. 10/10!",
    role: " Seller in Downtown"
  },
  {
    id: 2,
    buttonIndex:1,
    image: person2,
    name: "Mike Houston",
    quote: "Sold my condo faster than I expected—and above asking price! The listing photos and descriptions were so professional, they made all the difference.",
    role: " Investor"
  },
  {
    id: 3,
    buttonIndex:1,
    image: person3,
    name: "Cameron Webster",
    quote: "Love the mobile-friendly design! I could browse homes during my commute. The Save Favorites feature kept me organized. Highly recommend!",
    role: " Busy Professional"
  },
  {
    id: 4,
    buttonIndex:2,
    image: person4,
    name: "Seraphina Voss",
    quote: "This platform is a goldmine for exclusive listings! Seraphina guided me to a waterfront penthouse I’d never have found on my own. Her negotiation skills are razor-sharp—saved me 15% off the asking price. The 24/7 concierge service? Pure genius.",
    role: "Investing in High-End Real Estate"
  },
  {
    id: 5,
    buttonIndex:2,

    image: person5,
    name: "Lilou Marchetti",
    quote: "Moving from Paris to New York felt overwhelming, but Lilou made it seamless. Her knowledge of up-and-coming neighborhoods and bilingual support blew me away. The virtual staging tool on the site helped me visualize renovations—obsessed with my new loft!",
    role: "Relocating Entrepreneur"
  },
  {
    id: 6,
    buttonIndex:2,

    image: person6,
    name: "Dave Smith",
    quote: "Transparent process from start to finish. No hidden fees, and the contract guides were super clear. Finally, a real estate site that doesn’t confuse you!",
    role: "Dave Smith., Relocating Family"
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