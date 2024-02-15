import React, { useState } from 'react';
import BackgroundDisplay from './BackgroundDisplay';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';
import SearchHistory from './SearchHistory';
import TemperatureConverter from './TemperatureConverter';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch(`http://localhost:8001/weather?city=${values.city}&country=${values.country}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setSelectedCity(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      actions.resetForm();
    }
  };

  return (
    <div>

      <BackgroundDisplay selectedCity={selectedCity} />

      <WeatherForm handleSubmit={handleSubmit} />

      <WeatherCard selectedCity={selectedCity} />

      <SearchHistory />

      <TemperatureConverter />
    </div>
  );
};

export default App;
