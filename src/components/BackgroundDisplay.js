import React, { useEffect, useState } from "react";

import cloud from "../assets/image/cloud.jpg"
import rain from "../assets/image/rain.jpg";
import sun from "../assets/image/sun.jpg";
import clear from "../assets/image/clear.jpg";
import partlycloudy from "../assets/image/partly cloudy.jpg";


const BackgroundDisplay = ({selectedCity}) => {
const [image, setImage] = useState(cloud);
  

useEffect(() => {
    if (selectedCity && selectedCity.current) {
      const description = selectedCity.current.description.toLowerCase();
      if (description.includes('cloud')) {
        setImage(cloud);
      } else if (description.includes('rain')) {
        setImage(rain);
      } else if (description.includes('sun')) {
        setImage(sun);
      } else if (description.includes('clear')) {
        setImage(clear);
      } else if (description.includes('partly cloudy')) {
        setImage(partlycloudy);
      }
    
    }
  }, [selectedCity]);

  
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}> 
      <img src={image} alt="cities_image" className='h-screen w-full' />
      </div>
      )
  }
  
  export default BackgroundDisplay;
