import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';

function Main () {

  return (
  <div className='main-container'>
    <div>
        <div className='main-pretitle'>Innovative Digital Marketing and IT Solutions</div>
    </div>
    <div className='main-contents'>
        <div className='main-texts'>
            <div className='main-title-text'>
            <div className='main-title'>Empowering</div>
            <div className='main-title main-title-color margin'>Your</div>
            <div className='main-title margin'>Digital Presence</div>
            </div>
            <div className='main-subtitle-text'>
            <div className='main-subtitle'>Xerophyt is a leading digital marketing and IT service agency, offering innovative strategies
                 and customized solutions to boost online presence and business growth.
            </div>
            </div>
            <Link to="#contact"><div className='main-contact'>
                <button className='main-contact-button'>CONTACT NOW</button>
            </div></Link>
        </div>
        <div className='main-image-box'>
            <div>
                <img className='main-image' src='main-image.png'></img>
            </div>
        </div>
    </div>
    <div className='hire-us-textbox'>
    <div className='hire-us-text'>Hire Us For</div>
    </div>
    <div className='hire-us-options'>
        <div className='hire-us-option-list'>
            <div className='hire-us-option-icon'>
                <img src="marketing-image.png" alt="design-icon"></img>
            </div>
            <div className='hire-us-option-title'>Design</div>
            <div className='hire-us-option-content'>Our web design team has <br></br>
                ample years of experience <br></br>
                in the core areas of design <br></br>
                to build a website that you <br></br>
                need.
            </div>
        </div>
        <div className='hire-us-option-list'>
            <div className='hire-us-option-icon'>
                <img src="development-image.png" alt="development-icon"></img>
            </div>
            <div className='hire-us-option-title'>Development</div>
            <div className='hire-us-option-content'>Looking out for customized <br></br>
                solutions for your <br></br>
                websites? Our team will <br></br>
                develop and deliver a <br></br>
                website that’ll serve your <br></br>
                purpose
            </div>
        </div>
        <div className='hire-us-option-list'>
            <div className='hire-us-option-icon'>
                <img src="marketing-image.png" alt="marketing-icon"></img>
            </div>
            <div className='hire-us-option-title'>Marketing</div>
            <div className='hire-us-option-content'>With researched digital <br></br>
                marketing, we will ensure <br></br>
                that new customers and <br></br>
                clients are able to find your <br></br>
                business.
            </div>
        </div>
    </div>
    <div className='why-us-textbox'>
    <div className='why-us-title'>Why Choose Us?</div>
    </div>
    <div className='why-us-descbox'>
    <div className='why-us-desc'>We are distinguished by our dedication to excellence, innovative solutions, and personalized service. 
    </div>
    </div>
    <div className='why-us-captionbox'>
    <div className='why-us-caption'>We use the latest digital marketing strategies and IT innovations to drive business growth 
        and keep our clients ahead in a competitive market.
    </div>
    </div>
  </div>
    

  
);
}

export default Main;
