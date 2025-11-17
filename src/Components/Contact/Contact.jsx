import React, { useRef, useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [senderInfo, setSenderInfo] = useState({ name: '', email: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const name = formData.get('user_name');
    const email = formData.get('user_email');

    try {
      await emailjs.sendForm(
        'service-portfolio-miju',
        'template-contact-us',
        form.current,
        'u20CgkYAKPqC0ah0q'
      );

      setSenderInfo({ name, email });
      setSubmitStatus('success');
      e.target.reset();

      setTimeout(() => {
        setSubmitStatus(null);
        setSenderInfo({ name: '', email: '' });
      }, 7000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm available for new projects — feel free to send a message about
            what you'd like to build.
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
        <form ref={form} onSubmit={sendEmail} className="contact-right">

          {/* NAME FIELD (letters only) */}
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your Name"
            required
            disabled={isSubmitting}
            pattern="[A-Za-z ]+"
            title="Only alphabets are allowed"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
            }}
          />

          {/* EMAIL FIELD (must end with @gmail.com) */}
          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Gmail ID"
            required
            disabled={isSubmitting}
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            title="Email must be a valid Gmail address (example@gmail.com)"
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
            disabled={isSubmitting}
          ></textarea>

          {/* SUCCESS */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              <strong>✓ Message Sent Successfully!</strong>
              <p>
                Thanks {senderInfo.name}! I received your message at{' '}
                {senderInfo.email}. I will get back to you soon.
              </p>
            </div>
          )}

          {/* ERROR */}
          {submitStatus === 'error' && (
            <div className="status-message error">
              <strong>✗ Failed to send message</strong>
              <p>Please try again or email me directly at:  
                <br />
                <b>muhammadmihrajma@gmail.com</b>
              </p>
            </div>
          )}

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
