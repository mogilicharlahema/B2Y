import React from "react";
import "./why.css";
import {
  FaLightbulb,
  FaCogs,
  FaLock,
  FaHeadset,
  FaChartLine,
  FaCloud,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import image1 from "../../assets/Images/image1.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLightbulb className="feature-icon" />,
      title: "Cutting-Edge Innovation",
      desc: "We design scalable, future-ready IT solutions that keep your business ahead of competitors.",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "High Efficiency",
      desc: "Our agile processes maximize performance and minimize downtime across your projects.",
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: "Advanced Security",
      desc: "Enterprise-grade protection for your infrastructure and sensitive business data.",
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "24/7 Technical Support",
      desc: "Round-the-clock assistance to ensure your systems always run smoothly.",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Proven Growth",
      desc: "Data-driven insights and analytics that fuel business expansion and revenue growth.",
    },
    {
      icon: <FaCloud className="feature-icon" />,
      title: "Cloud Expertise",
      desc: "We specialize in scalable cloud architecture that ensures flexibility and cost efficiency.",
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: "Skilled Team",
      desc: "A passionate group of certified developers, designers, and project managers.",
    },
    {
      icon: <FaRocket className="feature-icon" />,
      title: "Fast Project Delivery",
      desc: "Our streamlined workflow guarantees quality outcomes without unnecessary delays.",
    },
  ];

  return (
    <section className="whychoose-section" id="whychooseus">
      <div className="whychoose-container">
        <div className="whychoose-content">
          <h2 className="whychoose-heading">Why Choose Us?</h2>

          <div className="vertical-scroll">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="icon-wrapper">{item.icon}</div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whychoose-image">
          <img src={image1} alt="Our IT Team" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
