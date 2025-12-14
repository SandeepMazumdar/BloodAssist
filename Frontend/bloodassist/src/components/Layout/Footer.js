// src/components/Layout/Footer.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>About us</h3>
            <i className="aboutus">BloodAssist is a online website for blood donation support.
        Our aim is to provide 24/7 support on blood donation services like finding donors at any urgency level, 
        accessibility of information on blood donation camp, highly secured storage of any blood component,etc.</i>
        </div>

        <div className="box">
          <h3>Extra links</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> account info </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> privacy policy </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> terms & conditions </a>
        </div>

        <div className="box">
          <h3>Contact us</h3>
          <a href="#"> <i className="fas fa-phone"></i> +91 7250928202 </a>
          <a href="#"> <i className="fas fa-envelope"></i> bloodassist@gmail.com </a>
            <div className="share">
              <a href="#"> <i className="fa-brands fa-facebook"></i></a>
              <a href="#"> <i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"> <i className="fa-brands fa-instagram"></i></a>
              <a href="#"> <i className="fa-brands fa-linkedin"></i></a>
              <a href="#"> <i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>

      </div>

      <div className="credit"><p>&copy; 2024 <span><a href="#">Blood Assist.</a></span> All Rights Reserved &reg;.</p></div>
    </footer>
  );
}

export default Footer;
