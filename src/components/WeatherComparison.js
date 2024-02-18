import React, { useState, useEffect } from 'react';
import './Comparison.css';

const WeatherComparison = () => {
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://localhost:8001/cities');
        const data = await response.json();
        const formattedCities = data.map(city => ({
          id: city.id,
          name: city.name,
          country: city.country,
          current: city.current || 'N/A',
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
      if (response.ok) {
        setCities(cities.filter(city => city.id !== id));
      } else {
        console.log('Error deleting city', response.statusText);
      }
    } catch (error) {
      console.error("error deleting city", error);
    }
  };

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='overall'>
      <div className='comp-container'>
        <h2>Weather Comparison</h2>
        <input style={{ width: "100%", display: 'inline-block' }}
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="comparison-grid">
          {filteredCities.map((city, index) => (
            <div>
            <div key={index} className="city-card">
              <h3>{city.name}, {city.country}</h3>
              <p>Temperature: {city.temperature}°C</p>
              <p>Description: {city.description}</p>
              <div>
            </div>
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
