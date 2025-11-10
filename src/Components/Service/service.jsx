import React, { useState } from "react";
import "./service.css";
import { FaBrain, FaLaptopCode, FaUserTie, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [activeTab, setActiveTab] = useState("ai");

  const services = {
    ai: {
      icon: <FaBrain />,
      title: "AI Solutions",
      desc: "Empowering your business with advanced AI tools, automation, and predictive analytics for smarter decisions and seamless performance.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    },
    dev: {
      icon: <FaLaptopCode />,
      title: "Development",
      desc: "We craft scalable, secure, and high-performance web and mobile applications tailored to your business goals.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    },
    consulting: {
      icon: <FaUserTie />,
      title: "Consulting",
      desc: "Get expert insights and strategies to transform your digital presence and optimize technology-driven growth.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
  };

  const active = services[activeTab];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
        
          <h1>Our Services.</h1>
          <p>
            We deliver excellence through technology, innovation, and strategy.
            Explore how we empower businesses through digital transformation.
          </p>
          <button className="explore-btn">
            Explore More <FaArrowRight />
          </button>
        </div>

 
        <div className="tabs">
          <button
            className={`tab ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            <FaBrain /> AI Solutions
          </button>
          <button
            className={`tab ${activeTab === "dev" ? "active" : ""}`}
            onClick={() => setActiveTab("dev")}
          >
            <FaLaptopCode /> Development
          </button>
          <button
            className={`tab ${activeTab === "consulting" ? "active" : ""}`}
            onClick={() => setActiveTab("consulting")}
          >
            <FaUserTie /> Consulting
          </button>
        </div>

       
        <div className="service-card">
          <div className="service-info">
            <div className="icon">{active.icon}</div>
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
            <button className="chat-btn">Let’s Explore </button>
          </div>

          <div className="service-image">
            <img src={active.image} alt={active.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
