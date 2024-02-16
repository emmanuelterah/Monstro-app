import React, { useState, useEffect } from 'react';

import clear from "../assets/image/clear.jpg";
import partlycloudy from "../assets/image/partly cloudy.jpg";
import cloud from "../assets/image/cloud.jpg";
import rain from "../assets/image/rain.jpg";
import sun from "../assets/image/sun.jpg";


const WeatherCard = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [icon, setIcon] = useState('cloud');

useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch('http://localhost:8001/cities');
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchCityData();
  }, []);


const handleCityChange = (event) => {
    const selectedCityIndex = event.target.value;
    setSelectedCity(cities[selectedCityIndex]);
  };


useEffect(() => {
    if (selectedCity && selectedCity.current) {
      const description = selectedCity.current.description.toLowerCase();
      if (description.includes('cloud')) {
        setIcon(cloud);
      } else if (description.includes('rain')) {
        setIcon(rain);
      } else if (description.includes('sun')) {
        setIcon(sun);
      } else if (description.includes('clear')) {
        setIcon(clear);
      } else if (description.includes('partly cloudy')) {
        setIcon(partlycloudy);
      }
    
    }
  }, [selectedCity]);


return (
    <div className="weather-card">
        <div className='text-center' style={{margin:'25px 25px'}}>
      <label htmlFor="citySelector" className='fs-6 text-center'>Select a City: <span style={{padding:"3px"}}></span></label>
      <select id="citySelector" onChange={handleCityChange} defaultValue="">
        <option value="" disabled hidden>Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={index}>
            {`${city.name}, ${city.country}`}
          </option>
        ))}
      </select>
      </div>
      
        
      {selectedCity && (
        <div className='container py-5'>
          
        <div className='card text-bg-info bg-opacity-10' style={{width: '27rem'}}>
            <img src={icon} className='card-img-top mx-auto p-5' style={{width: '18rem',height: '18rem'}} alt='weather'/>
            <div className='card-body'>
                <h2 className='card-title text-center badge text-info-emphasis py-0 fs-5'>{`${selectedCity.name}, ${selectedCity.country}`}</h2>
            </div>
            <ul className='list-group list-group-flush'>
          <li className='list-group-item text-bg-info mb-0 bg-opacity-10'>Current Temperature: {selectedCity.current.temperature}°C</li>
          <li className='list-group-item text-bg-info mb-0 bg-opacity-10'>Weather Conditions: {selectedCity.current.description}</li>
          <li className='list-group-item text-bg-info mb-0 bg-opacity-10'>Humidity: {selectedCity.current.humidity}%</li>
          <li className='list-group-item text-bg-info mb-0 bg-opacity-10'>Wind Speed: {selectedCity.current.wind_speed} km/h</li>
            </ul>
        </div>

        <div className='mx-5'>
          <div className='card text-bg-info mb-2 bg-opacity-10' style={{width: '25rem', height: '18rem'}}>
            <img src={icon} className='card-img-top mx-auto p-5' style={{width: '18rem',height: '12rem'}} alt='weather'/>
          <div className='card-body'>
            <ul className="list-group list-group-horizontal">
            {selectedCity.forecast.map(item => (
              <li className='list-group-item border border-black rounded mx-2 badge text-info-emphasis pt-3' style={{width: '20rem',height: '4rem'}} key={item.date}>
                {item.date}: <br/>{item.temperature_min}°C - {item.temperature_max}°C, <br/>{item.description}
              </li>
            ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;