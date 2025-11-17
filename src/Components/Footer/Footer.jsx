import React from "react";
import "./Footer.css";
import mailicon from "../../assets/mail_icon.svg";
import callicon from "../../assets/call_icon.svg";
import instagramicon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-center">

        {/* TITLE */}
        <h2 className="footer-title">MiJu</h2>

        {/* DESCRIPTION */}
        <p className="footer-text">
          Full-Stack Developer building modern, responsive and powerful web experiences.
        </p>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <a href="mailto:muhammadmihrajma@gmail.com">
            <img src={mailicon} alt="mail" />
          </a>

          <a
            href="https://wa.me/919039032004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={callicon} alt="whatsapp" />
          </a>

          <a
            href="https://instagram.com/miihrxj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramicon} alt="instagram" />
          </a>
        </div>

      </div>

      <hr className="footer-line" />

      <p className="footer-bottom">© 2025 MiJu — All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
