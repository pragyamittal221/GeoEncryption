import React from 'react';
import FileUpload from './../../components/FileUpload/FileUpload';
import EmailInput from './../../components/EmailInput/EmailInput';
import KeyInput from './../../components/KeyInput/KeyInput';
import LocationInput from './../../components/HandleLocation/LocationInput';
import SubmitButton from './../../components/SubmitButton/SubmitButton';
import './Encrypt.css';

const Encrypt = () => {
  return (
    <div className="container" >
      <div className="input-field">
        <div className="otherButton">
            <FileUpload />
        </div>
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
        <div className='otherButton'>
            <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default Encrypt;

