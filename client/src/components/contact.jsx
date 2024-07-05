import React from 'react'
import './contact.css';

function Contact () {

  return (
  <div className='contact-bg'>
    <div className='contact-container'>
    <div className='contact-contents'>
      <div className='contact-texts'>
        <div className='contact-title-box'>
        <div className='contact-title'>Have a Project on <br></br>
            mind ?
        </div>
        </div>
        <div className='contact-desc-box'>
        <div className='contact-desc'>We can help you bring your ideas to life. Let’s <br></br>
            talk about what we can build and raise <br></br>
            together.
        </div>
        </div>
        <div className='contact-form-box'>
        <form>
            <div className='contact-fullname-box'>
              <label htmlFor="contact-fullname" className='contact-fullname-label'>Full Name</label>
              <input type='text' name='contact-fullname' required className='contact-fullname-input'></input>
            </div>
            <div className='contact-email-box'>
              <label htmlFor="contact-email" className='contact-email-label'>Mail id</label>
              <input type='email' name='email' required className='contact-email-input'></input>
            </div>
            <div className='contact-service-box'>
              <label htmlFor="contact-service" className='contact-service-label'>Service</label>
              <input type='text' required name='service' className='contact-service-input'></input>
            </div>
            <div className='contact-button-box'>
              <button className='contact-button-click'> &#11208; Connect us!</button>
            </div>
            </form>
        </div>
      </div>
      <div className='contact-image-box'>
        <img src="contact-image.png" alt="contact-image" className='contact-image'></img>
      </div>
    </div>
    </div>
    <div className='contact-sub-container'>
      <div className='contact-sub-contents'>
        <div className='contact-sub-title-box'>
        <div className='contact-sub-title'>Let us together build a <br></br>
            flourishing business</div>
        </div>
        <div className='contact-sub-desc-box'>
        <div className='contact-sub-desc'>When connected with us, you aren’t growing your business alone. <br></br>
            We have your back and put in our best to contribute to the growth <br></br>
            of your entire team and organization. So, if you are looking for the <br></br>
            right agency that’ll help you build a good online presence and <br></br>
            bring in more conversions and revenue, we are right here!
        </div>
        </div>
      </div>
    </div>
  </div>
    

  
);
}

export default Contact;
