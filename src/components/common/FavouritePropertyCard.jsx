// // Updated PropertyCard component
// import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';

const FavouritePropertyCard = ({ property }) => {
    const {
      _id = 'id is not specified',
      basePrice = 'Price not available',
      address = 'Address not provided',
      propertyName = 'Property not specified',
      cityId = 'City not specified',
      stateId = 'City not specified',
      propertyImageURL = 'heroBg1',
      bathrooms = 0,
      bedrooms = 2,
      detailsLink = '#'
    } = property || {};
    console.log(property);
    // const city = cityId.name
  
    return (
      <div className="property-card">
        <div className="property-item mb-30">
          <a href={detailsLink} className="img">
            <img src={propertyImageURL} alt={address} className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>₹{basePrice}</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">{address}</span>
              <span className="city d-block ">{propertyName}</span>
              <span className="d-block mb-2 text-black-50">{stateId.name}, {cityId.name}</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="icon-bed me-2" />
                  <span className="caption">{bedrooms} beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">{bathrooms} baths</span>
                </span>
              </div>
              <Link to={`/singleproperty/${_id}`} className="btn btn-primary py-2 px-3">
                See details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
  FavouritePropertyCard.defaultProps = {
    property: {}
  };

  export default FavouritePropertyCard;