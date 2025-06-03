import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle sending the message (e.g., API call)
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <TextField
        label="Your Message"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4 w-80"
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default ContactMe;