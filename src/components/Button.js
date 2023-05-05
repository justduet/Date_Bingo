import React from 'react';
import "./Button.css";
import buttonIcon from "../components/arrow-button.png";
import { useNavigate } from 'react-router-dom'; 



const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Logic for navigating to another page
    navigate('/how-to'); // Using navigate function to navigate to '/another-page'
  }
  return (
    <button className="Button" onClick={handleClick}> 
      <img className ="button-icon" src={buttonIcon} alt= "arrow" />
    </button>
  );
};

export default Button;
