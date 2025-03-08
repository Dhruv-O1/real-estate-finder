
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Signup } from './components/common/Signup'
import { Login } from './components/common/Login'
import { AddProperty } from './components/user/AddProperty'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'

function App() {
  // useLocation hook from react router dom to see current end point
  const location = useLocation()

  axios.defaults.baseURL = "http://localhost:4001"

  // checking if current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  return (
    
      <>
      {/* Conditionally render the wrappers for proper aligment of login and signup*/}
        {
          !isAuthPage ? (
            <div className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
        <div className='app-wrapper'>
          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path='/user' element={<UserSidebar></UserSidebar>}>
                <Route path='add-property' element={<AddProperty/>}></Route>
              </Route>
            </Route>
            
          </Routes>
        </div>
      </div>
          ) : (
            <Routes>
              {/* routes with centered layout */}
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
          )
        }
      </>
    
  )
}

export default App
