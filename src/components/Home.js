import React from 'react';
import WeatherCard from './WeatherCard';
import BackgroundDisplay from './BackgroundDisplay';

const Home = () => {
  return (
    <div>
      <BackgroundDisplay />
      <WeatherCard />
    </div>
  );
};

export default Home;