import React from "react";
import "./hero.css";
import hero from "../../assets/Images/hero.png"; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
       
        <div className="hero-content">
          <h1>
            Empowering <span className="highlight">Innovation</span> with{" "}
            <span className="highlight">B2Y Infy Solutions</span>
          </h1>
          <p>
            Transform your business with intelligent IT services and scalable
            digital products. We blend creativity and technology to craft smart
            solutions that drive performance, automation, and growth.
          </p>
          <button className="hero-btn">Let’s Collaborate</button>
        </div>

        <div className="hero-image">
        
            <img src={hero} alt="B2YInfy Hero" />
         
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
