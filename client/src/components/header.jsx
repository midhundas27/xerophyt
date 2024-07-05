import React from "react";
import './header.css'

function Header () {

  return (
    <div className='header-container'>
        <div className="header-website-logo">
            <a style={{color: 'white'}} href='/'>
              <img src="header-image.png" alt="company-logo"></img>
            </a>
        </div>
        <div className="header-buttons">
          <div>Home</div>
          <div>Services</div>
          <div>About</div>
          <div>Contact</div>
        </div>
    </div> 
  )
}
export default Header