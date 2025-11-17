import React from 'react'
import './Hero.css'
import logo from '../../assets/logo.jpg'
import resume from '../../assets/resume.pdf'  // <-- Import resume file

const Hero = () => {
  return (
    <div className='hero'>
      <img src={logo} alt='profile-image' className='profile'/>

      <h1>
        <span> I'm Mihraj ,</span><br/> A Full-Stack-Web-Developer
      </h1>

      <p>Passionate about building modern, responsive, and scalable web applications</p>

      <div className="hero-action">

        <div className="hero-connect">
          Connect With Me
        </div>

        {/* ===== RESUME DOWNLOAD BUTTON ===== */}
        <a href={resume} download="Mihraj_Resume.pdf" className="hero-resume">
          My Resume
        </a>

      </div>
    </div>
  )
}

export default Hero
