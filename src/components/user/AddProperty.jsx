import React from 'react'

export const AddProperty = () => {



    return (
        <div className="card card-primary card-outline mb-4">
          {/* Header */}
          <div className="card-header">
            <div className="card-title">Add Property</div>
          </div>
          {/* Form */}
          <form>
            <div className="card-body">
              {/* Basic Property Information */}
              <h5 className="mb-3">Basic Property Information</h5>
              <div className="mb-3">
                <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                <input type="text" className="form-control" id="propertyTitle" placeholder="Enter property title" />
              </div>
              <div className="mb-3">
                <label htmlFor="propertyType" className="form-label">Property Type</label>
                <select className="form-select" id="propertyType">
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="plot">Plot</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="listingType" className="form-label">Listing Type</label>
                <select className="form-select" id="listingType">
                  <option value="">Select Listing Type</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="lease">Lease</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" className="form-control" id="price" placeholder="Enter price" />
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
                <input type="text" className="form-control" id="address" placeholder="Enter full address" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="City" />
                </div>
                <div className="col">
                  <label htmlFor="state" className="form-label">State</label>
                  <input type="text" className="form-control" id="state" placeholder="State" />
                </div>
                <div className="col">
                  <label htmlFor="zip" className="form-label">ZIP / Pincode</label>
                  <input type="text" className="form-control" id="zip" placeholder="ZIP or Pincode" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="landmarks" className="form-label">Nearby Landmarks</label>
                <input type="text" className="form-control" id="landmarks" placeholder="E.g., school, hospital" />
              </div>
              <div className="mb-3">
                <label htmlFor="mapsLink" className="form-label">Google Maps Link</label>
                <input type="url" className="form-control" id="mapsLink" placeholder="https://maps.google.com/..." />
              </div>
      
              {/* Property Specifications */}
              <h5 className="mb-3">Property Specifications</h5>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="builtUpArea" className="form-label">Built-up Area</label>
                  <input type="number" className="form-control" id="builtUpArea" placeholder="Enter built-up area" />
                </div>
                <div className="col">
                  <label htmlFor="carpetArea" className="form-label">Carpet Area</label>
                  <input type="number" className="form-control" id="carpetArea" placeholder="Enter carpet area" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                  <input type="number" className="form-control" id="bedrooms" placeholder="No. of bedrooms" />
                </div>
                <div className="col">
                  <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                  <input type="number" className="form-control" id="bathrooms" placeholder="No. of bathrooms" />
                </div>
                <div className="col">
                  <label htmlFor="balconies" className="form-label">Balconies</label>
                  <input type="number" className="form-control" id="balconies" placeholder="No. of balconies" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="furnishing" className="form-label">Furnishing Status</label>
                <select className="form-select" id="furnishing">
                  <option value="">Select Status</option>
                  <option value="fully">Fully Furnished</option>
                  <option value="semi">Semi-Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="age" className="form-label">Age of Property (Years)</label>
                  <input type="number" className="form-control" id="age" placeholder="Years" />
                </div>
                <div className="col">
                  <label htmlFor="floorNo" className="form-label">Floor Number</label>
                  <input type="number" className="form-control" id="floorNo" placeholder="Floor number" />
                </div>
                <div className="col">
                  <label htmlFor="totalFloors" className="form-label">Total Floors</label>
                  <input type="number" className="form-control" id="totalFloors" placeholder="Total floors in building" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="facing" className="form-label">Facing Direction</label>
                <select className="form-select" id="facing">
                  <option value="">Select Direction</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="parking" className="form-label">Parking Availability (Slots)</label>
                <input type="number" className="form-control" id="parking" placeholder="Number of parking slots" />
              </div>
      
              {/* Amenities & Features */}
              <h5 className="mb-3">Amenities & Features</h5>
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
              </div>
      
              {/* Property Media & Documents */}
              <h5 className="mb-3">Property Media & Documents</h5>
              <div className="mb-3">
                <label htmlFor="propertyImages" className="form-label">Upload Property Images</label>
                <input type="file" className="form-control" id="propertyImages" multiple />
              </div>
              <div className="mb-3">
                <label htmlFor="videoTour" className="form-label">Upload Video Tour (Optional)</label>
                <input type="file" className="form-control" id="videoTour" />
              </div>
              <div className="mb-3">
                <label htmlFor="virtualTour" className="form-label">Virtual Tour Link</label>
                <input type="url" className="form-control" id="virtualTour" placeholder="https://..." />
              </div>
              <div className="mb-3">
                <label htmlFor="ownership" className="form-label">Ownership Type</label>
                <select className="form-select" id="ownership">
                  <option value="">Select Ownership Type</option>
                  <option value="freehold">Freehold</option>
                  <option value="leasehold">Leasehold</option>
                  <option value="coop">Co-op</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="legalDocs" className="form-label">Legal Approvals & Documents</label>
                <input type="file" className="form-control" id="legalDocs" multiple />
              </div>
      
              {/* Owner/Agent Details */}
              <h5 className="mb-3">Owner/Agent Details</h5>
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
              </div>
      
              {/* Additional Information */}
              <h5 className="mb-3">Additional Information</h5>
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
              </div>
            </div>
            {/* Footer */}
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      );
      
}
