import React from 'react'
import { Link, useLocation } from 'react-router-dom'


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

export const Navbar = () => {
  const location = useLocation()

  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li className={location.pathname === '/' ? 'active' : ''}>
           <Link to="/">Home</Link>
          </li>
          <li className={`has-children ${location.pathname === '/properties' ? 'active' : ''}`}>
            <span
             className="arrow-collapse collapsed"
             data-bs-toggle="collapse"
             data-bs-target="#collapseItem0"
            />
            <Link >Properties</Link>
            <ul className="collapse" id="collapseItem0">
              <li>
                <Link to="/">Search Property</Link>
              </li>
              <li>
                <Link to="/add-property">Add Property</Link>
              </li>
              <li className="has-children">
                <span
                  className="arrow-collapse collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseItem1"
                />
                <Link to="#">Dropdown</Link>
                <ul className="collapse" id="collapseItem1">
                  <li>
                    <Link to="#">Sub Menu One</Link>
                  </li>
                  <li>
                    <Link to="#">Sub Menu Two</Link>
                  </li>
                  <li>
                    <Link to="#">Sub Menu Three</Link>
                  </li>
                </ul>
            </li>
          </ul>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/contactus' ? 'active' : ''}>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  <nav className="site-nav">
    <div className="container">
      <div className="menu-bg-wrap">
        <div className="site-navigation">
          <Link to="/" className="logo m-0 float-start">
            Property
          </Link>
          <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={`has-children ${location.pathname === '/properties' ? 'active' : ''}`}>
              <Link >Properties</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/properties">Search Property</Link>
                </li>
                <li>
                  <Link to="/add-property">Add Property</Link>
                </li>
                <li className="has-children">
                  <Link to="#">Dropdown</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="#">Sub Menu One</Link>
                    </li>
                    <li>
                      <Link to="#">Sub Menu Two</Link>
                    </li>
                    <li>
                      <Link to="#">Sub Menu Three</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === '/contactus' ? 'active' : ''}>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className={location.pathname === '/favouriteprop' ? 'active' : ''}>
              <Link to="/favouriteprop">Favourite </Link>
            </li>
            <li className={location.pathname === '/login' ? 'active' : ''}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Link
            to="#"
            className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span />
          </Link>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}