import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';

function Main () {

  return (
  <div className='main-container'>
    <div className='main-contents'>
        <div className='main-texts'>
            <div>
                <div className='main-pretitle'>Innovative Digital Marketing and IT Solutions</div>
            </div>
            <div className='main-title-text'>
            <div className='main-title'>Empowering</div>
            <div className='main-title main-title-color margin'>Your</div>
            <div className='main-title margin'>Digital Presence</div>
            </div>
            <div className='main-subtitle-text'>
            <div className='main-subtitle'>Xerophyt is a leading digital marketing and IT <br></br>
               service agency driving businesses forward with <br></br>
               cutting-edge technology and  
            </div>
            </div>
            <Link to="#contact"><div className='main-contact'>
                <button className='main-contact-button'>CONTACT NOW</button>
            </div></Link>
        </div>
        <div className='main-image'>
            <div>
                <img src='main-image.png'></img>
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
    <div className='why-us-desc'>We are the right term for your business. We have the expertise and <br></br>
        knowledge to offer impartial advice and services at an honest price.
    </div>
    </div>
    <div className='why-us-captionbox'>
    <div className='why-us-caption'>We are the right term for your business. We have the expertise and knowledge to offer <br></br>
        impartial advice and services at an honest price.
    </div>
    </div>
  </div>
    

  
);
}

export default Main;
