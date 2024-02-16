import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
// import day from "../assets/icons/day.png";
// import night from "../assets/icons/night.png";

function NavBar() {
  return (
    <div className="navbar-container">
      <FontAwesomeIcon icon={faCloudSunRain} className="moon-icon" />
      <ul>
      <NavLink className="samoa" to="/">Home</NavLink>
      <NavLink className="samoa" to="/About">About</NavLink>
      <NavLink className="samoa" to="/TemperatureConverter">TemperatureConverter</NavLink>
      </ul>

    {/* <img src={night} className="dark-mode" alt="Night-Icon"></img> */}
    <FontAwesomeIcon icon={faCloudMoon} className="moon-icon"/>
    </div>
  );
}

export default NavBar;