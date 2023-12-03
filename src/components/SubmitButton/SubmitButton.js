import React from 'react';
import { sendEmail } from '../services/apiService';

const SubmitButton = ({ email, file, key, location }) => {
  const handleSubmit = async () => {
    try {
      await sendEmail(email, file, key, location);
      alert('Email sent successfully!');
    } catch (error) {
      alert('An error occurred while sending the email.');
    }
  };
//Need to call saveFile function from databaseServices.js
  return (
    <button onClick={handleSubmit}>Submit</button>
  );
};

export default SubmitButton;
