import React, { useState } from 'react';
import BackgroundDisplay from './components/BackgroundDisplay';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import SearchHistory from './components/SearchHistory';
import TemperatureConverter from './components/TemperatureConverter';
import About from './components/About';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      // Replace this URL with your actual weather data API
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
    <div className="App">
      <BackgroundDisplay selectedCity={selectedCity} />
      <WeatherForm handleSubmit={handleSubmit} />
      <WeatherCard selectedCity={selectedCity} />
      <SearchHistory />
      <TemperatureConverter />
      <About/>
    </div>
  );
};

export default App;

