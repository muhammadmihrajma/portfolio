import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I’m currently available to take on new projects, so feel free to send 
            me a message about what you’d like to build.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>muhammadmihrajma@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 9039032004</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Kochi, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your Email" required />

          <label>Your Message</label>
          <textarea rows="6" placeholder="Enter your Message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
