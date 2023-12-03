import React, { useState } from 'react';
import { verifyLocation } from './../../components/HandleLocation/LocationVerifier';

const Decrypt = () => {
  const [primaryKey, setPrimaryKey] = useState('');

  const handleVerifyLocation = async () => {
    const locationValid = await verifyLocation(primaryKey);
    if (!locationValid) {
      // Redirect to error page with map
    } else {
      // Redirect to page with input field for symmetric key
    }
    console.log("handleVerifyLocation is working");
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Enter file ID"
        value={primaryKey}
        onChange={(e) => setPrimaryKey(e.target.value)}
      />
      <button onClick={handleVerifyLocation}>Verify Location</button>
    </div>
  );
};

export default Decrypt;