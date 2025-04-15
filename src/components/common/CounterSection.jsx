import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure this path is correct
import '../../landing/css/aos.css'; // Keep if you have custom AOS overrides

const CounterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      mirror: false,
      offset: 120
    });
    AOS.refresh(); // Ensures proper initialization on component mount
  }, []);

  const counters = [
    { value: 3298, label: '# of Buy Properties', delay: 300 },
    { value: 2181, label: '# of Sell Properties', delay: 400 },
    { value: 9316, label: '# of All Properties', delay: 500 },
    { value: 7191, label: '# of Agents', delay: 600 }
  ];

  return (
    <div className="row section-counter mt-5 viewed">
      {counters.map((counter, index) => (
        <div
          key={index}
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay={counter.delay}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <CountUp
                start={0}
                end={counter.value}
                duration={3}
                className="text-primary"
                enableScrollSpy
                scrollSpyDelay={counter.delay / 1000} // Convert ms to seconds
                scrollSpyOnce={true}
              />
            </span>
            <span className="caption text-black-50">{counter.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;