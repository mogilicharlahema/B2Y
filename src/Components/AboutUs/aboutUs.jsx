import React from "react";
import "./aboutUs.css";
import {
  FaProjectDiagram,
  FaSmileBeam,
  FaUsersCog,
  FaRegCalendarAlt,
  FaTrophy,
} from "react-icons/fa";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

import image1 from "../../assets/Images/image1.jpg";
import loudstier from "../../assets/Logos/loudstier.png";
// import mantralabs from "../../assets/Logos/"
import mcdmf from "../../assets/Logos/mcdmf.png";
import sustaine from "../../assets/Logos/sustaine.png";
import tri from "../../assets/Logos/tri.png";



const AboutUs = () => {
  return (
    <>
    
      <section className="aboutus-hero-section">
        <div className="aboutus-overlay">
          <div className="aboutus-content">
            <h1>About Us</h1>
            <p className="aboutus-text">
              At <strong>B2Yinfy Solutions</strong>, we are a dedicated
              technology company specializing in crafting innovative software
              products and delivering comprehensive IT services. We empower
              businesses to thrive by building scalable digital solutions
              tailored to their unique needs and fostering a smarter digital
              future.
            </p>
          </div>
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="aboutus-stats-section">
        <div className="aboutus-stats-container">
          <div className="aboutus-stat-box">
            <FaProjectDiagram className="aboutus-icon" />
            <h2>20+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="aboutus-stat-box">
            <FaSmileBeam className="aboutus-icon" />
            <h2>10+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="aboutus-stat-box">
            <FaUsersCog className="aboutus-icon" />
            <h2>15+</h2>
            <p>Team Members</p>
          </div>

          <div className="aboutus-stat-box">
            <FaRegCalendarAlt className="aboutus-icon" />
            <h2>2+</h2>
            <p>Years Experience</p>
          </div>

          <div className="aboutus-stat-box">
            <FaTrophy className="aboutus-icon" />
            <h2>15+</h2>
            <p>Project Awards</p>
          </div>
        </div>
      </section>
 {/* story section */}
<section className="aboutus-story-modern">
  <div className="aboutus-story-inner">
    <div className="aboutus-story-text">
      <h2 className="aboutus-story-title">Our Story</h2>
      <h3 className="aboutus-story-subtitle">
        Building technology that empowers businesses worldwide
      </h3>

      <p>
        <strong>B2Yinfy Solutions</strong> was founded in <strong>2023</strong> with a clear vision —
        to revolutionize how businesses leverage technology. We are both a{" "}
        <strong>product</strong> and <strong>service-based company</strong>, dedicated to delivering
        end-to-end software solutions that help enterprises scale efficiently and innovate
        confidently.
      </p>

      <p>
        From our early beginnings as a passionate team of developers, we’ve evolved into a
        trusted partner for companies across industries. Our expertise spans product engineering,
        web development, cloud solutions, and digital transformation — always with a focus on
        creativity, performance, and impact.
      </p>

      <p>
        At <strong>B2Yinfy Solutions</strong>, we don’t just build technology — we craft experiences
        that inspire. With a global mindset and customer-first approach, we’re shaping the
        digital future, one innovation at a time.
      </p>

      <div className="aboutus-story-points">
        <div><span>✔</span> Innovation & Scalability</div>
        <div><span>✔</span> Global Delivery Model</div>
        <div><span>✔</span> Expertise & Experience</div>
        <div><span>✔</span> Dedicated Support</div>
      </div>
    </div>

    <div className="aboutus-story-image">
      <img src={image1} alt="B2Yinfy Team" />
    </div>
  </div>
</section>

{/* === WHAT DRIVES US SECTION === */}
<section className="aboutus-purpose-section">
  <div className="aboutus-purpose-inner">
    <h2 className="aboutus-purpose-title">What Drives Us</h2>
    <p className="aboutus-purpose-subtitle">
      Our foundation is built on a shared purpose — to deliver technology that
      transforms businesses, empowers innovation, and drives long-term success.
    </p>

    <div className="aboutus-purpose-cards">
      <div className="purpose-card">
        <div className="purpose-icon"><FaBullseye /></div>
        <h3>Our Mission</h3>
        <p>
          To empower businesses with cutting-edge digital solutions that enhance
          performance, scalability, and innovation — enabling them to achieve
          sustainable growth in a dynamic world.
        </p>
      </div>

      <div className="purpose-card">
        <div className="purpose-icon"><FaEye /></div>
        <h3>Our Vision</h3>
        <p>
          To be a globally trusted technology partner, recognized for creating
          intelligent, impactful, and customer-focused digital ecosystems that
          inspire progress and redefine possibilities.
        </p>
      </div>

      <div className="purpose-card">
        <div className="purpose-icon"><FaHandshake /></div>
        <h3>Our Values</h3>
        <p>
          We believe in innovation, integrity, collaboration, and continuous
          improvement — delivering excellence through teamwork, creativity, and
          commitment to our clients’ success.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="aboutus-clients-section">
  <div className="aboutus-clients-inner">
    <h2 className="aboutus-clients-title">Our Trusted Clients</h2>
    <p className="aboutus-clients-subtitle">
      We collaborate with forward-thinking companies across industries — empowering them with reliable technology solutions, seamless integrations, and innovative digital products that drive measurable business growth.
    </p>

    <div className="aboutus-clients-slider">
      <div className="aboutus-clients-track">
       
        <div className="client-logo"><img src={loudstier} alt="Loudstier" /></div>
        {/* <div className="client-logo"><img src={mantralabs} alt="Mantra Labs" /></div> */}
        <div className="client-logo"><img src={mcdmf} alt="MCDMF" /></div>
        <div className="client-logo"><img src={sustaine} alt="Sustaine" /></div>
        <div className="client-logo"><img src={tri} alt="TRI" /></div>

        <div className="client-logo"><img src={loudstier} alt="Loudstier" /></div>
        {/* <div className="client-logo"><img src={mantralabs} alt="Mantra Labs" /></div> */}
        <div className="client-logo"><img src={mcdmf} alt="MCDMF" /></div>
        <div className="client-logo"><img src={sustaine} alt="Sustaine" /></div>
        <div className="client-logo"><img src={tri} alt="TRI" /></div>
      </div>
    </div>
  </div>
</section>

 


    </>
  );
};

export default AboutUs;
