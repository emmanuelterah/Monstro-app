## Author Name

This was a group project.  The authors of this project are Emmanuel Nyaanga, Derrick Ndinya, Enoch Kibet, Efjeniah, Edith Chelang'at.


## Weather App Components README
Overview
This Weather App is a React-based application designed to provide users with weather information for a selected city. It includes various components for displaying weather data, managing forecasts, and navigating through different sections of the application.

## Components

WeatherCard.js
Description
The WeatherCard component displays current weather information and a 5-day forecast for a selected city. It dynamically updates the weather icon based on the weather description fetched from a local server.

## Dependencies
React
useState, useEffect from React
Weather icons: clear, partlycloudy, cloud, rain, sun
Fetch API for retrieving weather data
Usage
Fetches a list of cities from the server on component mount.
Allows users to select a city from a dropdown menu.
Displays current weather information: temperature, weather conditions, humidity, and wind speed.
Presents a 5-day forecast with date, min and max temperatures, and weather description.

WeatherForm.js
Description
The WeatherForm component is a Formik-powered form for users to submit weather forecasts for a specific city. It validates input fields, dynamically adds forecast entries, and submits data to the server via a POST request.

## Dependencies
React
Formik, Form, Field, ErrorMessage from 'formik'
Usage
Allows users to input city, country, and forecasts (date, min temperature, max temperature, description).
Validates input fields and displays errors.
Dynamically adds forecast entries on button click.
Submits data to the server using a POST request.

NavBar.js
Description
The NavBar component serves as the navigation bar, offering links to different sections of the application. It features FontAwesome icons for a visually appealing design.

## Dependencies
React
NavLink from 'react-router-dom'
FontAwesome icons: faCloudMoon, faCloudSunRain
Usage
Displays navigation links to Home, About, and TemperatureConverter sections.
Stylishly incorporates moon and cloud icons.

## App.js
Description
The App component is the main entry point for the application. It manages the selectedCity state, handles form submissions, and renders key components for a cohesive user experience.

## Dependencies
React
BackgroundDisplay, WeatherCard, WeatherForm, SearchHistory, TemperatureConverter, About, Home components
Routes, Route from 'react-router-dom'
Usage
Manages the selectedCity state for dynamic content rendering.
Handles form submissions and fetches weather data based on user input.
Renders key components, including the navigation bar, background display, weather card, weather form, and search history.

TemperatureConverter.js
Description
The TemperatureConverter component allows users to convert temperatures between Celsius and Fahrenheit.

## Dependencies
React
useState from React
Usage
Provides input fields for Celsius and Fahrenheit.
Converts temperatures dynamically as the user types.

BackgroundDisplay.js
Description
The BackgroundDisplay component dynamically changes the background image based on the weather conditions of the selected city.

## Dependencies
React
useState, useEffect from React
Background images: cloud, rain, sun, clear, partlycloudy
Usage
Updates the background image based on the weather conditions of the selected city.
Provides a visually appealing background for the application.
Instructions for Running the App

## Features

    Current Weather: View real-time weather conditions, including temperature, humidity, wind speed, and more, for any specified location.

    Weather Forecast: Access hourly and daily forecasts to plan activities or trips accordingly. The forecast includes details such as temperature trends, precipitation probability, and wind direction.

    Location-based Weather: Get weather updates based on the user's current location, allowing for quick and convenient access to local weather information.

    Search Functionality: Easily search for weather forecasts in any location worldwide. The search feature supports autocomplete to streamline the process of finding specific locations.

    Multiple Locations: Save multiple locations for quick access to weather information for frequently visited or preferred places.

    Customization Options: Personalize the app by adjusting settings such as temperature units (Celsius or Fahrenheit), wind speed units, and time formats to suit individual preferences.

    User-friendly Interface: Enjoy a clean and intuitive user interface with easy-to-navigate menus, clear icons, and minimalistic design for a seamless user experience.

    Offline Access: Access previously viewed weather data even when offline, ensuring users can check weather forecasts regardless of internet connectivity.

## Technologies Used

    Frontend: HTML, CSS, JavaScript (React.js)
    Website hosting: Vervel.
    API hosting: Render.

## Installation

To run the Weather App locally, follow these steps:

    Clone the repository: git clone https://github.com/your/repository.git
    Navigate to the project directory: cd monstro-app
    Install dependencies: npm install
    Start the development server: npm start
    Open your browser and visit http://localhost:3000 to access the Weather App.

## Contributors

    Emmanuel Nyaanga - Scrum Master.
    Derrick Ndinya - Developer
    Enoch Kibet - Developer
    Edith Chelang'at - Developer
    Efjeniah 

## License

This project is licensed under the Just React Group.