import React, { useEffect, useState } from "react";
import clear from '../assets/image/clear.jpg';
import sun from '../assets/image/sun.jpg';
import cloud from '../assets/image/cloud.jpg';
import rain from '../assets/image/rain.jpg';
import partlycloudy from '../assets/image/partly cloudy.jpg';

const BackgroundDisplay = ({selectedCity}) => {
const [image, setImage] = useState('cloud');
  

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
        
      <img src={image} alt="cities_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
      
      )
  }
  
  export default BackgroundDisplay;
