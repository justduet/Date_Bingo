import React from 'react';
import './DarkenOverlay.css'; 

const DarkenOverlay = ({ open, closeMenu }) => {
  const handleClick = () => {
    if (open) {
      closeMenu();
    }
  }
  return (
    <div className={`darken-overlay ${open ? 'open' : ''}`} onClick={handleClick} />
  );
};

export default DarkenOverlay;