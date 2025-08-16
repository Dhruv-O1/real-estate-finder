

// import './assets/css/adminlte.css'
// import './assets/css/adminlte.min.css'
// import './landing/css/style.css'; // Your custom styles

import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Signup } from './pages/auth/Signup'
import { Login } from './pages/auth/Login'
import { LandingPage } from './components/common/LandingPage'
import { Landing } from './pages/public/Landing'
import { About } from './pages/public/About'
import { ContactUs } from './pages/public/ContactUs'
import { PropertySingle } from './pages/public/PropertySingle'
import { Properties } from './pages/public/Properties'
import { Services } from './pages/public/Services'
import { AddProperty } from './pages/user/AddProperty'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'
import { useEffect } from 'react'
import {  InquiryForm } from './pages/user/InquiryForm'
import { PropertyInquiry } from './pages/public/PropertyInquiry'
import { Favourite } from './pages/public/Favourite'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { ResetPassword } from './pages/auth/ResetPassword'
import { AllUser } from './pages/admin/AllUser'
import { AllProperty } from './pages/admin/AllProperty'
import { AllInquiry } from './pages/admin/AllInquiry'





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
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword/:token" element ={<ResetPassword/>}></Route>
      {/* <Route path="/" element={<LandingPage/>} /> Yogeshwari Landing page  */}

      {/* Template integration */}

      <Route path='/' element={<Landing/>}/>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/properties' element={<Properties/>}></Route>
      <Route path='/favouriteprop' element={<Favourite/>}> 
      </Route>
      



      <Route path='/admin' >
          <Route path='alluser' element={<AllUser/>}></Route>
          <Route path='allproperty' element={<AllProperty/>}></Route>
          <Route path='allinquiry' element={<AllInquiry/>}></Route>
       </Route>
      



      <Route path="" element={<PrivateRoutes />}>
        <Route path="/user" element={<UserSidebar />}>
          <Route path="add-property" element={<AddProperty />} />
          <Route path="inquiry" element={< InquiryForm/>} />
        </Route>


        <Route path="/add-property" element={<AddProperty />} />
        <Route path='/singleproperty/:propertyid' element={<PropertySingle/>}></Route>
        <Route path='/inquiry/:propertyid' element={<PropertyInquiry/>}></Route>


        
        
      </Route>
    </Routes>
  </div>
    
  )
}

export default App
