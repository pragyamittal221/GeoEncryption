// LocationVerifier.js

import axios from 'axios';
const fileService = require('../Database/databaseService');

export const verifyLocation = async (primaryKey) => {
  try {
    // Fetch the location associated with the primary key from your server
    const fileLocation = await fileService.getLocation(primaryKey);

    // If no file exists with this ID, send an alert
    if (!fileLocation) {
      alert('No file exists with this ID');
      return false;
    }

    // Get the user's current location using the Google Maps API
    // Note: You'll need to replace 'YOUR_API_KEY' with your actual API key
    const { data } = await axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY`);
    const userLocation = data.location;

    // Compare the user's location with the file location
    // This is a simple example that checks if the locations are exactly the same
    // You might want to allow for some variance in the locations depending on your requirements
    if (userLocation.lat === fileLocation.lat && userLocation.lng === fileLocation.lng) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
