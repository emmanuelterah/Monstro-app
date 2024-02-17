import React, { useState } from 'react';
import BackgroundDisplay from './components/BackgroundDisplay';
// import WeatherCard from './components/WeatherCard';
// import WeatherForm from './components/WeatherForm';
// import SearchHistory from './components/SearchHistory';
import TemperatureConverter from './components/TemperatureConverter';
import About from './components/About';
import NavBar from './components/NavBar'
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import './App.css';
import WeatherComparison from './components/WeatherComparison';
import WeatherForm from './components/WeatherForm';

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
    <div className="App">
      <BackgroundDisplay selectedCity={selectedCity}/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/TemperatureConverter' element={<TemperatureConverter/>}/>
        <Route path='/WeatherForm' element={<WeatherForm handleSubmit={handleSubmit} handleSubmissions={handleSubmissions}/>}/>
        <Route path='/WeatherComparison' element={<WeatherComparison />}/>
      </Routes>
      
    </div>
  );
}

export default App;


