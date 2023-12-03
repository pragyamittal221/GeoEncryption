import React, { useState } from 'react';

const KeyInput = () => {
  const [key, setKey] = useState('');

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  return (
    <input type="text" value={key} onChange={handleKeyChange} placeholder="Encryption Key" />
  );
};

export default KeyInput;
