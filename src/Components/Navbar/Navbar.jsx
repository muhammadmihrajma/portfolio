import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar fixed">
      <div className="brand-name">MiJu</div>

      <ul className="nav-menu">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-80}>
            Services
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500} offset={-80}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        className="nav-connect"
      >
        Connect With Me
      </Link>
    </div>
  );
};

export default Navbar;