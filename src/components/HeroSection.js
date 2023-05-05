import React from "react";
import "./HeroSection.css";
import "../App.css";
import Button from "./Button";



function HeroSection({ navigate }) {
  return (
      <div className="hero-container">
        <img className = "img" src = "./frame-background.jpg" alt= "product frame"/>
          <div className = "text-overlay">
            <h3>CAPTURE</h3>
            <h4>YOUR BEST</h4>
            <h2>ROMANCE</h2>
            <Button className = "Button" navigate={navigate} />
          </div>    
      </div>
  );
}

export default HeroSection;
