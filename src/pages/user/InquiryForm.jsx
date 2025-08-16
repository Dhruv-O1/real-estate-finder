import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'


export const InquiryForm = () => {
  const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])
    const [categories,setCategories] = useState([])

    const propertyId = useParams()
    
    

    useEffect(() => {
        getAllStates()
        getAllCategories()
        
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
   
  return (
    
      <div className="card card-primary card-outline mb-4">
          {/* Header */}
          <div className="card-header">
            <div className="card-title"><h3>INQUIRY PAGE</h3></div>
          </div>
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

                      return <option key={index} value={state._id}>{state.name}</option>
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
  )
}