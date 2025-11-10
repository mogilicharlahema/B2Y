import React from "react";
import "./footer.css";
import b2ylogo from "../../assets/Logos/b2ylogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <div className="footer-header">
            <img src={b2ylogo} alt="B2Y Logo" className="footer-logo" />
            <span className="footer-text">
              B2Y is a dynamic and innovative IT solutions provider dedicated to
              empowering businesses with cutting-edge technology.
            </span>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@b2yinfysolutions.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Address */}
        <div className="footer-column">
          <h4>Address</h4>
          <p className="footer-address">
            <FaMapMarkerAlt className="icon" />
            <span>
              301/302, 3rd Floor, Saket Callipolis,<br />
              Sarjapur - Marathahalli Road,<br />
              Doddakannelli, Bengaluru, Karnataka 560035
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 B2Y Infy Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
