import React from 'react'
import './about.css';

function About () {

  return (
  <div className='about-container'>
    <div className='about-bg'>
        <div className='about-contents'>
            <div className='about-texts'>
                <div className='about-text'>
                    <div className='about-text-title'>About Us</div>
                    <div className='about-text-desc'>We are a team of 40 web experts with over 12 years <br></br>
                        of experience in website building and marketing <br></br>
                        help businesses grow online</div>
                </div>
                <div className='about-text'>
                    <div className='about-text-mini-title'>Mission</div>
                    <div className='about-text-mini-desc'>Our mission is to empower our clients to use the internet to <br></br>
                        its full potential by providing affordable, effective, custom <br></br>
                        design and marketing solutions.</div>
                </div>
                <div className='about-text'>
                    <div className='about-text-mini-title'>Vision</div>
                    <div className='about-text-mini-desc'>Our vision is to become a global leader in providing the <br></br>
                        best and unique web design and marketing services to <br></br>
                        improve our client’s productivity and business strength.</div>
                </div>
            </div>
            <div className='about-image-box'>
                <img src="about-image.jpg" alt="about-image" className='about-image'></img>
            </div>
        </div>
    </div>
   
  </div>
    

  
);
}

export default About;
