

import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [delisle, setDelisle] = useState("");
  const [gasMark, setGasMark] = useState("");
  const [leiden, setLeiden] = useState("");
  const [newton, setNewton] = useState("");
  const [rankine, setRankine] = useState("");

  // Calculate other scales based on both Celsius and Fahrenheit inputs
  const calculateOtherScales = () => {
    if (celsius !== "") {
      setKelvin((parseFloat(celsius) + 273.15).toFixed(2));
      setDelisle((100 - (5 * parseFloat(celsius)) / 9).toFixed(2));
      setGasMark(((parseFloat(celsius) - 100) / 5 + 1.85).toFixed(2));
      setLeiden((parseFloat(celsius) * 1.4 + 32).toFixed(2));
      setNewton((parseFloat(celsius) * 0.33).toFixed(2));
      setRankine(((parseFloat(celsius) + 273.15) * 9 / 5 + 459.67).toFixed(2));
    } else if (fahrenheit !== "") {
      setKelvin(((parseFloat(fahrenheit) - 32) * 5 / 9 + 273.15).toFixed(2));
      setDelisle((100 - (5 * (parseFloat(fahrenheit) - 32) / 9)).toFixed(2));
      setGasMark(((parseFloat(fahrenheit) - 212) / 8 + 1.85).toFixed(2));
      setLeiden(((parseFloat(fahrenheit) - 67.2) * 7 / 6).toFixed(2));
      setNewton(((parseFloat(fahrenheit) - 32) * 11 / 60).toFixed(2));
      setRankine(((parseFloat(fahrenheit) + 459.67) * 5 / 9).toFixed(2));
    }
  };

  // Improved function for calculating Celsius: handle both numeric and empty inputs
  const handleCelsiusChange = (event) => {
    const value = event.target.value;

    setCelsius(value);
    setFahrenheit(
      value !== "" ? convertToFahrenheit(parseFloat(value)) : ""
    );
    calculateOtherScales();
  };

  // Improved function for calculating Fahrenheit: handle both numeric and empty inputs
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;

    setFahrenheit(value);
    setCelsius(
      value !== "" ? convertToCelsius(parseFloat(value)) : ""
    );
    calculateOtherScales();
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <div className="temperature-converter">
      <h3>Temperature Converter</h3>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </label>
      <br />
      {/* Display other scales using state values */}
      <label>Kelvin: {kelvin}</label>
      <br />
      <label>Delisle: {delisle}</label>
      <br />
      <label>Gas Mark: {gasMark}</label>
      <br />
      <label>Leiden: {leiden}</label>
      <br />
      <label>Newton: {newton}</label>
      <br />
      <label>Rankine: {rankine}</label>
    </div>
  );
};

export default TemperatureConverter;