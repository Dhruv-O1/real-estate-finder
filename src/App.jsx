

// import './assets/css/adminlte.css'
// import './assets/css/adminlte.min.css'
// import './landing/css/style.css'; // Your custom styles

import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Signup } from './components/common/Signup'
import { Login } from './components/common/Login'
import { LandingPage } from './components/common/LandingPage'
import { Landing } from './components/common/Landing'
import { About } from './components/common/About'
import { ContactUs } from './components/common/ContactUs'
import { PropertSingle } from './components/common/PropertSingle'
import { Properties } from './components/common/Properties'
import { Services } from './components/common/Services'
import { AddProperty } from './components/user/AddProperty'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'
import { useEffect } from 'react'
import {  InquiryForm } from './components/user/InquiryForm'
import { PropertyInquiry } from './components/common/PropertyInquiry'
import { Favourite } from './components/common/Favourite'





function App() {
  // useLocation hook from react router dom to see current end point
  const location = useLocation()

  axios.defaults.baseURL = "http://localhost:4001"

  // checking if current route is login or signup
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  

  return (
    
    <div
    className={
      location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/"
        ? ""
        : "app-wrapper"
    }
  >
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<LandingPage/>} /> Yogeshwari Landing page  */}

      {/* Template integration */}

      <Route path='/' element={<Landing/>}/>
      <Route path='/singleproperty/:propertyid' element={<PropertSingle/>}></Route>
      <Route path='/inquiry/:propertyid' element={<PropertyInquiry/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/properties' element={<Properties/>}></Route>
      <Route path='/favouriteprop' element={<Favourite/>}>
        
      </Route>
      <Route path="/add-property" element={<AddProperty />} />
      



      <Route path="" element={<PrivateRoutes />}>
        <Route path="/user" element={<UserSidebar />}>
          <Route path="add-property" element={<AddProperty />} />
          <Route path="inquiry" element={< InquiryForm/>} />

        </Route>
        
      </Route>
    </Routes>
  </div>
    
  )
}

export default App
