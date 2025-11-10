import React, { useEffect, useRef } from "react";
import "./about.css";
import aboutImg from "../../assets/Images/image4.jpg";

const About = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const heading = headingRef.current;
    if (heading) observer.observe(heading);
    return () => {
      if (heading) observer.unobserve(heading);
    };
  }, []);

  return (
    <>
     
      <div className="about-heading-wrapper">
        <h2 className="about-heading" ref={headingRef}>
          About Us
        </h2>
      </div>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="About B2Y" className="about-image" />
            <div className="about-image-overlay"></div>
          </div>

          <div className="about-content">
            <h2 className="about-title">Empowering Digital Transformation</h2>
            <p className="about-description">
              At <strong>B2Y</strong>, we’re a forward-thinking team of innovators
              transforming businesses through technology. Our mission is to craft
              future-ready software, cloud, and IT solutions that fuel growth,
              efficiency, and innovation.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span>🚀</span>
                <p>Agile development with cutting-edge tech</p>
              </div>
              <div className="highlight">
                <span>💡</span>
                <p>Smart solutions built for scalability</p>
              </div>
              <div className="highlight">
                <span>🤝</span>
                <p>Reliable partnership & transparent communication</p>
              </div>
              <div className="highlight">
                <span>⚙️</span>
                <p>24×7 support & maintenance</p>
              </div>
            </div>

            <button className="about-button">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
