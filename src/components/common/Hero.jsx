import React, { useEffect, useRef, useState } from 'react';
import { tns } from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import heroBg2 from '../../landing/assets/img/hero_bg_2.jpg';
import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
import { Link } from 'react-router-dom';

export const Hero = () => {
    const sliderRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const heroImages = [heroBg3, heroBg2, heroBg1];
  
    useEffect(() => {
      // Preload images
      const loadImages = heroImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
  
      Promise.all(loadImages)
        .then(() => setImagesLoaded(true))
        .catch(console.error);
  
      AOS.init({
        duration: 800,
        once: true,
        initClassName: 'aos-init', // Required for proper initialization
        startEvent: 'DOMContentLoaded' // Initialize when images are loaded
      });
    }, []);
  
    useEffect(() => {
      if (imagesLoaded && sliderRef.current) {
        const heroSlider = tns({
          container: sliderRef.current,
          items: 1,
          mode: 'carousel',
          autoplay: true,
          autoplayButtonOutput: false,
          controls: false,
          nav: false,
          speed: 500,
          // Add responsive image loading
          lazyload: true,
          lazyloadSelector: '.tns-lazy-img'
        });
  
        return () => heroSlider.destroy();
      }
    }, [imagesLoaded]);
  
    if (!imagesLoaded) {
      return <div className="preloader">Loading...</div>;
    }

  return (
    <div className="hero">
      

      {/* Slider Section */}
      <div className="tns-outer" id="tns1-ow">
        <div className="tns-ovh" id="tns1-mw">
          <div className="tns-inner" id="tns1-iw">
            <div 
              className="hero-slide tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" 
              ref={sliderRef}
            >
              {heroImages.map((image, index) => (
                <div 
                  key={index}
                  className="img overlay tns-item"
                  style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center">
            <h1 className="heading" data-aos="fade-up">
              Easiest way to find your dream home
            </h1>
            <Link to={`/properties`}>
              <button  style={{width:500}} data-aos="fade-up" data-aos-delay="200" type="submit" className="btn btn-primary">
                Search
              </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};