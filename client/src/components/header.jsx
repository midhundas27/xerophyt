import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header-container'>
      <div className="header-website-logo">
        <Link to="/">
          <img src="header-image.png" alt="company-logo"></img>
        </Link>
      </div>
      <div className="header-buttons">
        <Link to="/"><div className="header-buttons-click">Home</div></Link>
        <Link to="#services"><div className="header-buttons-click">Services</div></Link>
        <Link to="#about"><div className="header-buttons-click">About</div></Link>
        <Link to="#contact"><div className="header-buttons-click">Contact</div></Link>
      </div>
    </div> 
  );
}

export default Header;
