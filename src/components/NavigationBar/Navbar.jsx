import React, { useState } from 'react'
// import { CgMenuOreos } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container'>
      {/* Logo Section  */}
        <div className="logo-bar">
            <h1>
              <img className='img' src="logomine.png" alt="logo" />
              {/* Logo */}
              </h1>
            <h1 className='nav-menu text-3xl' onClick={toggleMenu}><CgMenuGridO /></h1>
        </div>
        {/* Mobile links */}
        <div className={`mobile-links ${isMenuOpen ? 'show' : 'hide'}`} >
        <div className="options"><Link className='nav-tags' onClick={toggleMenu} to='home' smooth={true} duration={500}>Home</Link></div>
        <div className="options"><Link className='nav-tags' onClick={toggleMenu} to='skills' smooth={true} duration={500}>Skills</Link></div>
        <div className="options"><Link className='nav-tags' onClick={toggleMenu} to='projects' smooth={true} duration={500}>Projects</Link></div>
        <div className="options"><Link className='nav-tags' onClick={toggleMenu} to='resume' smooth={true} duration={500}>Resume</Link></div>
        <div className="options"><Link className='nav-tags' onClick={toggleMenu} to='contact' smooth={true} duration={500}>Contact Me</Link></div>
      
        </div>

    </div>
  )
}

export default Navbar
