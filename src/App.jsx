import React from "react";
import Home from "./Components/home";
import Footer from "./Components/Footer/footer";  
import AboutUs from "./Components/AboutUs/aboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";

import "./App.css";
import Whatsapp from "./Components/Whatsapp/whatsapp";



function App() {
  return (
    <Router>
      <Navbar /> 
    <Whatsapp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}


export default App;
