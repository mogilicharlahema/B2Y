import React, { useState } from "react";
import "./Navbar.css";
import b2ylogo from "../../assets/Logos/b2ylogo.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={b2ylogo} alt="B2Y Logo" className="logo_img" />
        <span className="logo_sub">you believe we achieve</span>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#careers">Careers</a>
        <button className="get-started-btn mobile-btn">Contact Us</button>
      </div>

      <button className="get-started-btn desktop-btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
