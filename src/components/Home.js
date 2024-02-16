import BackgroundDisplay from './BackgroundDisplay';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';
// import SearchHistory from './SearchHistory';
import React, { useState } from 'react';

const Home = () => {

  const [selectedCity, setSelectedCity] = useState(null);
// const [searchHistory, setSearchHistory] = useState([]);

  // Function to handle form submission and update search history.
  function handleSubmit(city) {
    console.log('Submitting city: ', city);
    setSelectedCity(city);
    // setSearchHistory([...searchHistory, city]);
  }
  return (
    <div>
      <BackgroundDisplay />
      <WeatherCard selectedCity={selectedCity} />
      {/* <WeatherForm handleSubmit={handleSubmit} handleSubmissions={handleSubmissions} /> */}
    </div>
  );
};

export default Home;