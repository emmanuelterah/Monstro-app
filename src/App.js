import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar'; // Corrected import statement

import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/TemperatureConverter" component={TemperatureConverter} />
      </div>
    </Router>
  );
}

export default App;
