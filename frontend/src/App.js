import React from 'react';
import FileUpload from './components/FileUpload/FileUpload';
import EmailInput from './components/EmailInput/EmailInput';
import KeyInput from './components/KeyInput/KeyInput';
import LocationInput from './components/LocationInput/LocationInput';
import SubmitButton from './components/SubmitButton/SubmitButton';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="input-field">
        <FileUpload />
      </div>
      <div className="input-field">
        <EmailInput />
      </div>
      <div className="input-field">
        <KeyInput />
      </div>
      <div className="input-field">
        <LocationInput />
      </div>
      <div className="input-field">
        <SubmitButton />
      </div>
    </div>
  );
};

export default App;
