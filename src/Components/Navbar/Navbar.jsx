import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menuOpen from '../../assets/menu_open.svg';
import menuClose from '../../assets/menu_close.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu on resize to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <div className={`navbar fixed ${open ? 'menu-open' : ''}`}>
        <div className="brand-name">MiJu</div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${open ? 'nav-menu-open' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="nav-connect desktop-only"
        >
          Connect With Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          <img src={open ? menuClose : menuOpen} alt="" />
        </button>
      </div>

      {/* Mobile slide-out menu (overlay) */}
      <nav className={`mobile-nav ${open ? 'active' : ''}`} aria-hidden={!open}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-connect mobile-connect"
              onClick={handleLinkClick}
            >
              Connect With Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
