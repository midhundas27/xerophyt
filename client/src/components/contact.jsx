import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6103hxm",
        "template_a0kmefq",
        form.current,
        "uzXXlteQKCyX8-WdU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          console.log('Failed to send message.');
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className='contact-bg'>
      <div className='contact-container'>
        <div className='contact-contents'>
          <div className='contact-texts'>
            <div className='contact-title-box'>
              <div className='contact-title'>
                Have a Project on <br /> mind?
              </div>
            </div>
            <div className='contact-desc-box'>
              <div className='contact-desc'>
                We can help you bring your ideas to life. Let’s <br />
                talk about what we can build and raise <br />
                together.
              </div>
            </div>
            <div className='contact-form-box'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='contact-fullname-box'>
                  <label htmlFor="user_name" className='contact-fullname-label'>Full Name</label>
                  <input
                    type='text'
                    name='user_name'
                    required
                    className='contact-fullname-input'
                  />
                </div>
                <div className='contact-email-box'>
                  <label htmlFor="user_email" className='contact-email-label'>Mail id</label>
                  <input
                    type='email'
                    name='user_email'
                    required
                    className='contact-email-input'
                  />
                </div>
                <div className='contact-service-box'>
                  <label htmlFor="service" className='contact-service-label'>Service</label>
                  <input
                    type='text'
                    name='service'
                    required
                    className='contact-service-input'
                  />
                </div>
                <div className='contact-button-box'>
                  <button type='submit' className='contact-button-click'>
                    &#11208; Connect us!
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='contact-image-box'>
            <img src="contact-image.png" alt="contact-image" className='contact-image' />
          </div>
        </div>
      </div>
      <div className='contact-sub-container'>
        <div className='contact-sub-contents'>
          <div className='contact-sub-title-box'>
            <div className='contact-sub-title'>
              Let us together build a <br /> flourishing business
            </div>
          </div>
          <div className='contact-sub-desc-box'>
            <div className='contact-sub-desc'>
              When connected with us, you aren’t growing your business alone. <br />
              We have your back and put in our best to contribute to the growth <br />
              of your entire team and organization. So, if you are looking for the <br />
              right agency that’ll help you build a good online presence and <br />
              bring in more conversions and revenue, we are right here!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
