import BackgroundDisplay from './BackgroundDisplay';
import WeatherCard from './WeatherCard';
import React, { useState } from 'react';

const Home = () => {

  const [selectedCity, setSelectedCity] = useState(null);
// eslint-disable-next-line
  function handleSubmit(city) {
    console.log('Submitting city: ', city);
    setSelectedCity(city);
  }
  return (
    <div>
      <BackgroundDisplay />
      <WeatherCard selectedCity={selectedCity} />
    </div>
  );
};

export default Home;