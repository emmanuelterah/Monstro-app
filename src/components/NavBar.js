import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="navbar-container">
      <FontAwesomeIcon icon={faCoffee} className="coffee-icon" />
      <ul>
      <NavLink className="samoa" to="/">Home</NavLink>
      <NavLink className="samoa" to="/About">About</NavLink>
      <NavLink className="samoa" to="/TemperatureConverter">TemperatureConverter</NavLink>
      </ul>

    <img src="" className="darkMode"></img>
    </div>
  );
}

export default NavBar;