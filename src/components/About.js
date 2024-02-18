import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about-container '>
      <h1>Weather App</h1>
      <p id="what">
        The Weather App is a simple application that provides real-time weather information for different cities around the world.
      </p>

      <h2>Features</h2>
      <ul>
        <li style={{fontWeight: "normal"}}>Get current weather information for a specific city.</li>
        <li style={{fontWeight: "normal"}}>View the current temperature, weather conditions, humidity, and wind speed.</li>
        <li style={{fontWeight: "normal"}}>Explore a 5-day weather forecast.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li style={{fontWeight: "normal"}}>React for building the user interface.</li>
        <li style={{fontWeight: "normal"}}>Fetch API for obtaining weather data.</li>
      </ul>

      <h2>How to Use</h2>
      <p>
        <div id="what" style={{fontWeight: "normal"}}>
        Enter the name of the city and its country in the search form to fetch the latest weather information.
        Explore the 5-day forecast for a detailed view.
        </div>
      </p>
    </div>
  );
};

export default About;
