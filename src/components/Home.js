import BackgroundDisplay from './BackgroundDisplay';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';
// import SearchHistory from './SearchHistory';
import React, { useState } from 'react';

const Home = () => {

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

  const handleSubmissions = async (values, setSubmitting, resetForm) => {
    try {
      const response = await fetch('http://localhost:8001/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
  if (!response.ok) {
    throw new Error(`Failed to submit data: ${response.status} - ${response.statusText}`);
  }
  
  resetForm();
  console.log('Data submitted successfully:', values);
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div>
      <BackgroundDisplay />
      <div className='container'>
      <WeatherCard selectedCity={selectedCity} />
      <WeatherForm handleSubmit={handleSubmit} handleSubmissions={handleSubmissions} />
      </div>
    </div>
  );
};

export default Home;