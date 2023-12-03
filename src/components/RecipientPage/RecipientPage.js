import React, { useState } from 'react';
import { verifyLocation } from '../services/locationService';

const RecipientPage = ({ file, key, location }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyClick = async () => {
    const result = await verifyLocation(location);
    setIsVerified(result);
  };

  return (
    <div>
      <button onClick={handleVerifyClick}>Verify Location</button>
      {isVerified && <a href={file}>Download File</a>}
      {!isVerified && <p>Location verification failed.</p>}
    </div>
  );
};

export default RecipientPage;
