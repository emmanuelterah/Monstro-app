import React, { useState, useEffect } from 'react';

const SearchHistory = () => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/cities'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSearches(data.searches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

fetchData();
  }, []);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searches && searches.map((search, index) => (
          <li key={index}>{search.city}, {search.country}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

