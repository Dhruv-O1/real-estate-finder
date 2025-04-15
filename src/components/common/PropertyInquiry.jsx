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
import { Footer } from './Footer';
import heroBg3 from '../../landing/assets/img/hero_bg_3.jpg';
import img2 from '../../landing/assets/img/img_2.jpg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const PropertyInquiry = () => {

  const [property, setProperty] = useState({})
  const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])
    const [categories,setCategories] = useState([])
    

    useEffect(() => {
        getAllStates()
        getAllCategories()
        fetchSingleProperty()
      }, [])


      const getAllStates = async () => {
        try {
          console.log("get all state");
          
          const fetchedState = await axios.get("states/getallstates")
          console.log(fetchedState.data.data);
          
          setStates(fetchedState.data.data)
        } catch (error) {
          console.log(error);
          
        }
      }
    
    
      const getCityByState = async (id) => {
        console.log("get city by state");
          
          console.log(id);
          
          const fetchedCities = await axios.get(`/city/getcitiesbystate/${id}`)
          console.log(fetchedCities.data.data);
          setCities(fetchedCities.data.data)
    
        
      }
    
      const getAreaByCity = async (id) => {
        console.log("get area by city");
        console.log(id);
        
        const fetchedAreas = await axios.get(`/area/getareabycity/${id}`)
        console.log(fetchedAreas.data.data);
        
        setAreas(fetchedAreas.data.data)
        
        
      }

      const getAllCategories = async () => {
        try {
          console.log("get all category");
          
          const fetchedCategories = await axios.get("/category/get")
          console.log(fetchedCategories.data.data);
          
          setCategories(fetchedCategories.data.data)
        } catch (error) {
          console.log(error);
          
        }
      }
    

  const{register,handleSubmit}=useForm()

   const submitHandler=async (data)=>{
    data.propertyId = propertyId;
    console.log(data)

    const res = await axios.post("http://localhost:4001/inquiry/add",data)
       console.log(res.data);
   }

  
  
    let params = useParams()
    let propertyId = params.propertyid

    const fetchSingleProperty = async () => {

      console.log(propertyId);
      const fetchedSingleProperty = await axios.get(`/property/getsingleproperty/${propertyId}`)
      console.log(fetchedSingleProperty.data.data);
      setProperty(fetchedSingleProperty.data.data)
      
      
    }

  return (
    <>
  <Navbar/>
  <div
    className="hero page-inner overlay"
    style={{ backgroundImage: `url(${property.propertyImageURL})` }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 text-center mt-5">
          <h1 className="heading aos-init aos-animate" data-aos="fade-up">
            {property.propertyName}
          </h1>
          <nav
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay={200}
            className="aos-init aos-animate"
          >
            <ol className="breadcrumb text-center justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/properties">Properties</Link>
              </li>
              
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="col-lg-110">
                    <h2 className="heading text-primary">{property.address}</h2>
                    <p className="meta">{property?.areaId?.name}, {property?.cityId?.name}, {property?.stateId?.name}.</p>
                    <p className="text-black-50">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                      laborum quo quos omnis sed magnam id, ducimus saepe, debitis error
                      earum, iste dicta odio est sint dolorem magni animi tenetur.
                    </p>
                    <p className="text-black-50">
                      Perferendis eligendi reprehenderit, assumenda molestias nisi eius
                      iste reiciendis porro tenetur in, repudiandae amet libero.
                      Doloremque, reprehenderit cupiditate error laudantium qui, esse quam
                      debitis, eum cumque perferendis, illum harum expedita.
                    </p>
                    
          
          
                    
                    
                  </div>
          <div className="contact-info">
            <div className="address mt-2">
              <i className="icon-room" />
              <h4 className="mb-2">Location:</h4>
              <p>
                43 Raymouth Rd. Baltemoer,
                <br />
                London 3910
              </p>
            </div>
            <div className="open-hours mt-4">
              <i className="icon-clock-o" />
              <h4 className="mb-2">Open Hours:</h4>
              <p>
                Sunday-Friday:
                <br />
                11:00 AM - 2300 PM
              </p>
            </div>
            <div className="email mt-4">
              <i className="icon-envelope" />
              <h4 className="mb-2">Email:</h4>
              <p>info@Untree.co</p>
            </div>
            <div className="phone mt-4">
              <i className="icon-phone" />
              <h4 className="mb-2">Call:</h4>
              <p>+1 1234 55488 55</p>
            </div>
          </div>

        </div>
        <div
          className="col-lg-8 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <form onSubmit={handleSubmit(submitHandler)}>
          <div className="card-body">
          <div className="mb-3">
          <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" {...register("fullName")} className="form-control" id="fullname" placeholder="Enter Full name" />
              </div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" {...register("email")} className="form-control" id="email" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone number" className="form-label">Phone Number</label>
                <input type="text" {...register("phoneNumber")} className="form-control" id="phone number" placeholder="Enter phone number" />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyType" className="form-label" >Property Type</label>
                <select className="form-select"  id="propertyType" {...register("categoryId")}>
                  <option value="">Select Type</option>
                  {
                    categories.map((category) => {
                      return <option value={category._id}>{category.categoryName}</option>
                    })
                  }
                </select>
              </div>
            
              <h5 className="mb-3">Location Details</h5>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Full Address</label>
                <input type="text" {...register("address")} className="form-control" id="address" placeholder="Enter full address" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="state" className="form-label">State</label>
                 
                  <select className="form-select" {...register("stateId")} onChange={(e) => {getCityByState(e.target.value)}} >
                    <option value="">Select State</option>
                    
                  {
                     states?.map((state , index) => {

                      return <option key={index} value={state._id}> {state.name} </option>
                     })
                  }
                  </select>
                </div>
                
                <div className="col">
                  <label htmlFor="city" className="form-label">City</label>
                  <select className="form-select" id="city" {...register("cityId")} onChange={(e) => {getAreaByCity(e.target.value)}}>
                    <option value="">Select City</option>
                    {
                     cities?.map((city , index) => {
                      return <option key={index} value={city._id}>{city.name}</option>
                     })
                  }
                  </select>
                </div>
                
                <div className="col">
                  <label htmlFor="area" className="form-label">Area</label>
                  <select className="form-select" {...register("areaId")} id="area">
                    <option value="">Select Area</option>
                    {
                      areas?.map((area) => {
                        return <option value={area._id}>{area.name}</option>
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="budget" className="form-label">Budget</label>
                <input type="text" {...register("budget")} className="form-control" id="budget" placeholder="Enter  your budget" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                  <input type="number" className="form-control" id="bedrooms" {...register("bedrooms")}  placeholder="No. of bedrooms" />
                </div>
                <div className="col">
                  <label htmlFor="bathrooms" className="form-label" >Bathrooms</label>
                  <input type="number" className="form-control" id="bathrooms" {...register("bathrooms")} placeholder="No. of bathrooms" />
                </div>
                <div className="col">
                  <label htmlFor="balconies" className="form-label">Balconies</label>
                  <input type="number" className="form-control" id="balconies" {...register("balconies")} placeholder="No. of balconies" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="furnishing" className="form-label">Furnishing Status</label>
                <select className="form-select" id="furnishing" {...register("furnishingStatus")} >
                  <option value="">Select Status</option>
                  <option value="Furnished">Fully Furnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Parking Availability (Slots)</label>
                <input type="number" className="form-control"  {...register("parkingSlot")} placeholder="Number of parking slots" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <input type="text" className="form-control"  {...register("message")} placeholder="enter message" />
              </div>
              
              <div className="col-12">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-primary"
                  fdprocessedid="h5w4fn"
                />
              </div>
            
          </div>
          </form>
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
