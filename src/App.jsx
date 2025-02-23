import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserNavbar } from './components/layouts/UserNavbar'
// import './App.css'
import './assets/css/adminlte.css'
import './assets/css/adminlte.min.css'
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/common/Signup'
import { Login } from './components/common/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
        <div className='app-wrapper'>
          <Routes>
            <Route path='/user' element={<UserSidebar></UserSidebar>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
        </div>
      </body>
    
  )
}

export default App
