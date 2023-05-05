import 'semantic-ui-css/semantic.min.css'
import "../../App.css";
import HowToImg from '../pages-background.jpg'

import React from 'react';


export default function HowTo() {
  return (
    <div className="how-to-container">
        <img className = "how-to-img" src = {HowToImg} alt= "product frame"/>
        <div className="text-overlay2">
        <h1>How it works</h1>
        <p>Discover new dates and make a photo gallery filled with your memories</p>
        </div>
        <div className="steps-container">
          <div className="item">
          <h3>Step 1:</h3>
            <p>Flip a card (any card)</p>
            <img src="./bingo-card.png" alt="bingo-date card"/> 
          </div>
          <div className="item">
          <h3>Step 2:</h3>
            <p>Go on your magical date (take photos)</p>
            <img src="./champagne.png" alt="champagne and flowers"/>
          </div>
          <div className="item">
          <h3>Step 3:</h3>
            <p>Create your photo gallery</p>
            <img src="./gallery.png" alt="gallery template"/>
          </div>
        </div>
      </div>
        
)}
