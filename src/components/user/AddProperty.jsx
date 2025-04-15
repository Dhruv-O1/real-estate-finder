import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';

// import '../../assets/css/adminlte.css'
// import '../../assets/css/adminlte.min.css'

export const AddProperty = () => {

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [areas, setAreas] = useState([])
  const [categories,setCategories] = useState([])

  const{register,handleSubmit} = useForm()

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


 

  

  const submitHandler = async (data) => {
    const userId = localStorage.getItem("id")
    console.log(data);
    data.userId = userId
    console.log(data.propertyImage[0]);

    
    
    const formData = new FormData();
    formData.append("propertyName",data.propertyName)
    formData.append("categoryId",data.categoryId)
    formData.append("basePrice",data.basePrice)
    formData.append("address",data.address)
    formData.append("stateId",data.stateId)
    formData.append("cityId",data.cityId)
    formData.append("areaId",data.areaId)
    formData.append("nearbyLandmark",data.nearbyLandmark)
    formData.append("googleMapLink",data.googleMapLink)
    formData.append("userId",data.userId)
    formData.append("builtUpArea",data.builtUpArea)
    formData.append("carpetArea",data.carpetArea)
    formData.append("bedrooms",data.bedrooms)
    formData.append("bathrooms",data.bathrooms)
    formData.append("balconies",data.balconies)
    formData.append("furnishingStatus",data.furnishingStatus)
    formData.append("propertyAge",data.propertyAge)
    formData.append("facingDirection",data.facingDirection)
    formData.append("parkingSlot",data.parkingSlot)
    formData.append("propertyImage",data.propertyImage[0])
    console.log(formData);
    
    const res = await axios.post("/property/addWithFile",formData)
    console.log(res.data);
    
  }

    return (
        <div className="card card-primary card-outline mb-4">
          {/* Header */}
          <div className="card-header">
            <div className="card-title">Add Property</div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="card-body">
              {/* Basic Property Information */}
              <h5 className="mb-3">Basic Property Information</h5>
              <div className="mb-3">
                <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                <input type="text" {...register("propertyName")} className="form-control" id="propertyTitle" placeholder="Enter property title" />
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
              {/* <div className="mb-3">
                <label htmlFor="listingType" className="form-label">Listing Type</label>
                <select className="form-select" id="listingType">
                  <option value="">Select Listing Type</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="lease">Lease</option>
                </select>
              </div> */}
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" {...register("basePrice")} className="form-control" id="price" placeholder="Enter price" />
                </div>
                <div className="col">
                  <label htmlFor="negotiable" className="form-label">Negotiable</label>
                  <select className="form-select" id="negotiable">
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
      
              {/* Location Details */}
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
                <label htmlFor="landmarks" className="form-label">Nearby Landmarks</label>
                <input type="text" {...register("nearbyLandmark")} className="form-control" id="landmarks" placeholder="E.g., school, hospital" />
              </div>
              <div className="mb-3">
                <label htmlFor="mapsLink" className="form-label">Google Maps Link</label>
                <input type="url" {...register("googleMapLink")} className="form-control" id="mapsLink" placeholder="https://maps.google.com/..." />
              </div>
      
              {/* Property Specifications */}
              <h5 className="mb-3">Property Specifications</h5>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="builtUpArea" className="form-label">Built-up Area</label>
                  <input type="number" {...register("builtUpArea")} className="form-control" id="builtUpArea" placeholder="Enter built-up area" />
                </div>
                <div className="col">
                  <label htmlFor="carpetArea" className="form-label">Carpet Area</label>
                  <input type="number" {...register("carpetArea")} className="form-control" id="carpetArea" placeholder="Enter carpet area" />
                </div>
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
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="age" className="form-label">Age of Property (Years)</label>
                  <input type="number" {...register("propertyAge")} className="form-control" id="age" placeholder="Years" />
                </div>
                {/* <div className="col">
                  <label htmlFor="floorNo" className="form-label">Floor Number</label>
                  <input type="number" className="form-control" id="floorNo" placeholder="Floor number" />
                </div>
                <div className="col">
                  <label htmlFor="totalFloors" className="form-label">Total Floors</label>
                  <input type="number" className="form-control" id="totalFloors" placeholder="Total floors in building" />
                </div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="facing" className="form-label">Facing Direction</label>
                <select className="form-select" id="facing" {...register("facingDirection")}>
                  <option value="">Select Direction</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Parking Availability (Slots)</label>
                <input type="number" className="form-control"  {...register("parkingSlot")} placeholder="Number of parking slots" />
              </div>
      
              {/* Amenities & Features */}
              {/* <h5 className="mb-3">Amenities & Features</h5>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="lift" />
                <label className="form-check-label" htmlFor="lift">Lift/Elevator</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="swimmingPool" />
                <label className="form-check-label" htmlFor="swimmingPool">Swimming Pool</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="gym" />
                <label className="form-check-label" htmlFor="gym">Gym</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="garden" />
                <label className="form-check-label" htmlFor="garden">Garden/Park</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="security" />
                <label className="form-check-label" htmlFor="security">Security Guard</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="cctv" />
                <label className="form-check-label" htmlFor="cctv">CCTV Surveillance</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="powerBackup" />
                <label className="form-check-label" htmlFor="powerBackup">Power Backup</label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="clubhouse" />
                <label className="form-check-label" htmlFor="clubhouse">Clubhouse/Community Hall</label>
              </div> */}
      
              {/* Property Media & Documents */}
              <h5 className="mb-3">Property Media & Documents</h5>
              <div className="mb-3">
                <label htmlFor="propertyImages" className="form-label">Upload Property Images</label>
                <input type="file" className="form-control" id="propertyImages" multiple {...register("propertyImage")} />
              </div>
              
              {/* <div className="mb-3">
                <label htmlFor="ownership" className="form-label">Ownership Type</label>
                <select className="form-select" id="ownership">
                  <option value="">Select Ownership Type</option>
                  <option value="freehold">Freehold</option>
                  <option value="leasehold">Leasehold</option>
                  <option value="coop">Co-op</option>
                </select>
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="legalDocs" className="form-label">Legal Approvals & Documents</label>
                <input type="file" className="form-control" id="legalDocs" multiple />
              </div> */}
      
              {/* Owner/Agent Details */}
              {/* <h5 className="mb-3">Owner/Agent Details</h5>
              <div className="mb-3">
                <label htmlFor="ownerName" className="form-label">Owner Name</label>
                <input type="text" className="form-control" id="ownerName" placeholder="Enter owner name" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="ownerEmail" className="form-label">Email ID</label>
                  <input type="email" className="form-control" id="ownerEmail" placeholder="Enter email" />
                </div>
                <div className="col">
                  <label htmlFor="ownerContact" className="form-label">Contact Number</label>
                  <input type="tel" className="form-control" id="ownerContact" placeholder="Enter contact number" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Are You an Agent?</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="isAgent" id="agentYes" value="yes" />
                    <label className="form-check-label" htmlFor="agentYes">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="isAgent" id="agentNo" value="no" />
                    <label className="form-check-label" htmlFor="agentNo">No</label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="agencyName" className="form-label">Agency Name (if applicable)</label>
                <input type="text" className="form-control" id="agencyName" placeholder="Enter agency name" />
              </div> */}
      
              {/* Additional Information */}
              {/* <h5 className="mb-3">Additional Information</h5>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" placeholder="Enter property description"></textarea>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="availableFrom" className="form-label">Available From</label>
                  <input type="date" className="form-control" id="availableFrom" />
                </div>
                <div className="col">
                  <label htmlFor="preferredTenants" className="form-label">Preferred Tenants</label>
                  <select className="form-select" id="preferredTenants">
                    <option value="">Select</option>
                    <option value="family">Family</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="anyone">Anyone</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="petsAllowed" className="form-label">Pets Allowed?</label>
                <select className="form-select" id="petsAllowed">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="maintenanceCharges" className="form-label">Maintenance Charges</label>
                <input type="number" className="form-control" id="maintenanceCharges" placeholder="Enter maintenance charges if any" />
              </div> */}
            </div>
            {/* Footer */}
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      );
      
    }
