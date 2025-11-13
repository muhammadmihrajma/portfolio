import React from 'react'
import './Hero.css'
import logo from '../../assets/logo.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={logo} alt='profile-image' className='profile'/>
        <h1><span> I'm Mihraj ,</span><br/> A Full-Stack-Web-Developer</h1>
        <p>Passionate about building modern, responsive, and scalable web applications</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect With Me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>

  )
}

export default Hero