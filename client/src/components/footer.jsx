import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-contents'>
        <div className='footer-logo-contents'>
          <div className='footer-image-box'>
            <img src="header-image.png" alt="company-logo" className='footer-image'></img>
          </div>
          <div className='footer-company-desc-box'>
          <div className='footer-company-desc'>Marketing is a company that focus on <br></br>
              developing company’s strategy for <br></br>
              increase digital marketing</div>
          </div>
        </div>
        <div className='footer-details-contents'>
        <div className='footer-menu-contents'>
          <div className='footer-menu-contents-title'>Menu</div>
          <div className='footer-contents-list-box'>
          <div className='footer-menu-contents-list'>Home</div>
          <div className='footer-menu-contents-list'>Features</div>
          <div className='footer-menu-contents-list'>Pricing About</div>
          <div className='footer-menu-contents-list'>Contact Us</div>
          </div>
        </div>
        <div className='footer-services-contents'>
          <div className='footer-services-contents-title'>Services</div>
          <div className='footer-contents-list-box'>
          <div className='footer-services-contents-list'>Content Strategy</div>
          <div className='footer-services-contents-list'>Content Development</div>
          <div className='footer-services-contents-list'>Content Creation</div>
          <div className='footer-services-contents-list'>Content Optimization</div>
          </div>
        </div>
        <div className='footer-company-contents'>
          <div className='footer-company-contents-title'>Company</div>
          <div className='footer-contents-list-box'>
          <div className='footer-company-contents-list'>Site Map</div>
          <div className='footer-company-contents-list'>Terms of Use</div>
          <div className='footer-company-contents-list'>Privacy Notice</div>
          <div className='footer-company-contents-list'>Cookies</div>
          <div className='footer-company-contents-list'>Modern Slavery</div>
          </div>
        </div>
        </div>
      </div>
    <div className='footer-social-media'>
      <div className='facebook-image-box'>
        <img src="facebook.png" alt="facebook-image" className='facebook-image-box'></img>
      </div>
      <div className='twitter-image-box'>
        <img src="twitter.png" alt="x-image" className='twitter-image'></img>
      </div>
      <div className='instagram-image-box'>
        <img src="instagram.png" alt="instagram-image" className='instagram-image'></img>
        </div>
    </div>
    <div className='footer-underline'></div>
    <div className='footer-copyright'>
      <p>&copy; 2024 Xerophyt. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer