import closeIcon from "./close-icon.png";
import menuIcon from "./menu-icon.png";
import DarkenOverlay from "./DarkenOverlay";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  console.log('navbar is ok');
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="date bingo logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Link>
        <div
          className={`darken-overlay ${click ? "open" : ""}`}
        />

        {/*Hamburger Menu*/}
        <div className="hamburger-menu" onClick={handleClick}>
          <img
            src={click ? closeIcon : menuIcon}
            alt="Hamburger menu"
            className={click ? "close-icon" : "menu-icon"}
          />
        </div>

        {/*Navigation Links*/}
        <div className={`menu ${click ? "open" : ""}`} >
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/how-to" className="nav-links" onClick={closeMenu}>
                How To
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/date-bingo" className="nav-links" onClick={closeMenu}>
                Date Bingo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-links" onClick={closeMenu}>
                My Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMenu}>
                Sign-up/Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-links" onClick={closeMenu}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/privacy-policy" className="nav-links" onClick={closeMenu}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <DarkenOverlay open={click} closeMenu={closeMenu}/>
      </div>
    </nav>
  );
};

export default Navbar;
