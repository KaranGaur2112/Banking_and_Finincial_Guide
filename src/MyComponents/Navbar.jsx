import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';





export default function Navbar() {
  // HamBurger
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // Dropdown
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };




  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo'>
          <img className='logo' src='./images/logo4.png' alt="b&F" height={130} />
          <h2>Finco</h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links'  onClick={closeMobileMenu}>
              Guide
            </Link>
          </li>
          <li className='nav-item' >
            <NavLink to='/Consultancy' className='nav-links'  >
            Counsultation
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Kids' className='nav-links'  onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <NavLink to='/Accessories' className='nav-links' onClick={closeMobileMenu}>
              Calculator
            </NavLink>
             {dropdown && <Dropdown />}
          </li>
        </ul>
        < div className='Profile'>
        <i className="fa fa-user-circle" />
        <NavLink to='/singup-login' className='nav-links' onClick={closeMobileMenu}>
              Login
            </NavLink>
        </div>
      </nav>
    </>
  )
}