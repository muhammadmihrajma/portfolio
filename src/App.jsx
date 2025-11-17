import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS FOR SMOOTH SCROLL */}
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="portfolio">
        <MyWork />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
