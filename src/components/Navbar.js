import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/weather-form" className="nav-link">Weather Form</Link>
    </div>
  );
}

export default Navbar;