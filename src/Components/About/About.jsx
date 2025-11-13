import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/logo.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt='banner' className='template'/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} className='profile-image' alt='profile-image'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Aspiring full-stack developer passionate about coding and creating meaningful web experiences.</p>
                    <p>Interned at Zoople, gaining hands-on experience in building real-world web applications.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><p>Tailwind</p><hr style={{width:"45%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
             <div className="about-achievement">
                <h1>1+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>6+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About