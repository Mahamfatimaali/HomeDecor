import React from 'react';
import logo from './images/furnirologo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col1">
            <div className="flex-logo">
            <a href="/"><img src={logo} className="logo-footer" alt="logo" /></a>
            <p>Home Styler</p>
            </div>
            <p>We are one of the leading interior design and remodeling studios available for all of your residential and commercial interior design needs.</p>
          </div>
          <div className="footer-col2">
            <h3>Office</h3>
            <p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                Shahrah e faisal Road
              </a>
            </p>
            <p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                P.E.C.H.S block#6
              </a>
            </p>
            <p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                Karachi, Pakistan
              </a>
            </p>
            <p className="email-id">
              <a href="mailto:Furnirointeriordesign@gmail.com">homestyler@gmail.com</a>
            </p>
            <h4 className="tel"><a href="tel:1111111111">+92-1111111111</a></h4>
          </div>
          <div className="footer-col3">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col4">
            <h3>Newsletter</h3>
            <form id="footer-form">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Enter your email id" />
              <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
            </form>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-pinterest"></i></a>
            </div>
          </div>
          <div className="bottom-bar">
            <a href="/" target="_blank">
              <p>&copy; 2023 HomeStyler. All rights reserved</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
