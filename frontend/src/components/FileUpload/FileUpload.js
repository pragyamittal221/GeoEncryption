// FileUpload.js

import React, { useState } from 'react';
// import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="FileUpload">
      <input type="file" onChange={fileSelectedHandler} />
    </div>
  );
};

export default FileUpload;
