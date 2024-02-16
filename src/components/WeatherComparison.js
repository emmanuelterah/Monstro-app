import React, { useState, useEffect } from 'react';
import './Comparison.css';


const WeatherComparison = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://localhost:8001/cities');
        const data = await response.json();
        const formattedCities = data.map(city => ({
          name: city.name,
          country: city.country,
          temperature: city.current ? city.current.temperature : 'N/A',
          description: city.current ? city.current.description : 'N/A'
        }));
        setCities(formattedCities);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather Comparison</h2>
      <div className="comparison-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <h3>{city.name}, {city.country}</h3>
            <p>Temperature: {city.temperature}°C</p>
            <p>Description: {city.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherComparison;