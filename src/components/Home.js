import BackgroundDisplay from './BackgroundDisplay';
import WeatherCard from './WeatherCard';
// import SearchHistory from './SearchHistory';
import React, { useState } from 'react';

const Home = () => {

  const [selectedCity, setSelectedCity] = useState(null);
// // const [searchHistory, setSearchHistory] = useState([]);

//   // Function to handle form submission and update search history.
// eslint-disable-next-line
  function handleSubmit(city) {
    console.log('Submitting city: ', city);
    setSelectedCity(city);
    // setSearchHistory([...searchHistory, city]);
  }
  return (
    <div>
      <BackgroundDisplay />
      <WeatherCard selectedCity={selectedCity} />
    </div>
  );
};

export default Home;