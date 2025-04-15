import React, { useEffect, useState } from 'react'
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

import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import { Footer } from './Footer';
import PropertyCard from './PropertyCard';
import axios from 'axios';
import FavouritePropertyCard from './FavouritePropertyCard';


export const Favourite = () => {


  const [properties,setProperties] = useState([])

   useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
          once: true,
          offset: 120
        });
        getFavouriteProperties()
       
      }, []);
        

        const getFavouriteProperties = async() => {
            
            const userId = localStorage.getItem("id")
            
            console.log(userId);
            
            
            
          const fetchedProperties = await axios.get(`/favourite/get`,{
            params: { // Axios automatically serializes params to URL query string
              userId: userId
            }
          })      
          console.log(fetchedProperties.data.data);
          setProperties(fetchedProperties.data.data)
              
        }

        

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
          <h1 className="heading" data-aos="fade-up">
            Favourite Properties
          </h1>
          {/* <nav
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ol className="breadcrumb text-center justify-content-center">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              {/* <li
                className="breadcrumb-item active text-white-50"
                aria-current="page"
              >
                Properties
              </li> 
            </ol>
          </nav> */}
        </div>
        
      </div>
    </div>
  </div>


  

  
  



<div className="section section-properties">
      <div className="container">
        <div className="property-grid">
          {properties.map((property, index) => (
            
            <div key={index} className="property-grid-item">
              <FavouritePropertyCard property={property.propertyId} />
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        
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
