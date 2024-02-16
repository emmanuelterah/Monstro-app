import React, { useState } from 'react';
import BackgroundDisplay from './components/BackgroundDisplay';
// import WeatherCard from './components/WeatherCard';
// import WeatherForm from './components/WeatherForm';
// import SearchHistory from './components/SearchHistory';
import TemperatureConverter from './components/TemperatureConverter';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import './App.css';

const App = () => {


  return (
    <div className="App">
      <BackgroundDisplay /*selectedCity={selectedCity} *//>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/TemperatureConverter' element={<TemperatureConverter/>}/>
      </Routes>
      
    </div>
  );
};

export default App;


