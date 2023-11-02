import React, { useState } from 'react';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <input type="text" value={location} onChange={handleLocationChange} placeholder="Location" />
  );
};

export default LocationInput;
