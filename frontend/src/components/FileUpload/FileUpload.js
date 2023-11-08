// FileUpload.js

import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="FileUpload">
      <input type="file" id="file" onChange={fileSelectedHandler} style={{display: 'none'}} />
      <label htmlFor="file" className="button">Choose File to be Encrypted</label>
    </div>
  );
};

export default FileUpload;
