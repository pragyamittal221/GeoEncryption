import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <input type="email" value={email} onChange={handleEmailChange} placeholder="Recipient's Email" />
  );
};

export default EmailInput;
