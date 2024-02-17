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
          id: city.id,
          name: city.name,
          country: city.country,
          current: city.current.name || 'N/A', // Record the current city value or set to 'N/A' if not available
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

  const deleteCity = async (id) => {
    try {
        const response = await fetch(`http://localhost:8001/cities/${id}`, {
           method: 'DELETE',
        });
        if(response.ok){
            setCities(cities.filter(city => city.id !== id ))

        }else {
             console.log('Error deleting city' , response.statusText)
        }
    }catch(error) {
      console.error("error deleting city" , error)
    }
};

  return (
    <div className='overall'>
    <div className='comp-container'>
      <h2>Weather Comparison</h2>
      <div className="comparison-grid">
        {cities.map((city, index) => (
          <div>
          <div key={index} className="city-card">
            <h3>{city.name}, {city.country}</h3>
            <p>Temperature: {city.temperature}°C</p>
            <p>Description: {city.description}</p>
          </div>
          <div>
          <button className="comp-button" onClick={() => deleteCity(city.id)}>Delete City</button>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WeatherComparison;



