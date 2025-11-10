import React from "react";

import HeroSection from "./HeroSection/hero";
import About from "./About/about";
import WhyChooseUs from "./Why/why";
import Service from "./Service/service";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WhyChooseUs />
      <Service/>
    </>
  );
};

export default Home;
