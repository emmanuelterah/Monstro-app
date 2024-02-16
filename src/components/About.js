import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='about-container '>
      <h1>Weather App</h1>
      <p>
        The Weather App is a simple application that provides real-time weather information for different cities around the world.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Get current weather information for a specific city.</li>
        <li>View the current temperature, weather conditions, humidity, and wind speed.</li>
        <li>Explore a 5-day weather forecast.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li>React for building the user interface.</li>
        <li>Fetch API for obtaining weather data.</li>
      </ul>

      <h2>How to Use</h2>
      <p>
        <div id="what">
        Enter the name of the city and its country in the search form to fetch the latest weather information.
        Explore the 5-day forecast for a detailed view.
        </div>
      </p>
    </div>
  );
};

export default About;
