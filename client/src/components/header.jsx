import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='header-container'>
      <div className="header-website-logo-box">
        <Link to="/">
          <img src="header-image.png" alt="company-logo" className="header-website-logo"></img>
        </Link>
      </div>
      <div className="header-buttons">
        <Link to="/"><div className="header-buttons-click">Home</div></Link>
        <Link to="#services"><div className="header-buttons-click">Services</div></Link>
        <Link to="#about"><div className="header-buttons-click">About</div></Link>
        <Link to="#contact"><div className="header-buttons-click">Contact</div></Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div>&#9776;</div>
      </div>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}><div className="header-buttons-click">Home</div></Link>
        <Link to="#services" onClick={toggleMenu}><div className="header-buttons-click">Services</div></Link>
        <Link to="#about" onClick={toggleMenu}><div className="header-buttons-click">About</div></Link>
        <Link to="#contact" onClick={toggleMenu}><div className="header-buttons-click">Contact</div></Link>
      </div>
    </div> 
  );
}

export default Header;
