import axios from 'axios';

export const verifyLocation = async (location) => {
  try {
    // Make a request to your backend API
    const response = await axios.post('https://your-backend-api.com/verify-location', {
      location: location
    });

    // Return the verification result
    return response.data.isVerified;
  } catch (error) {
    console.error('An error occurred while verifying the location:', error);
    return false;
  }
};
