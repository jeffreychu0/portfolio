import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle sending the message (e.g., API call)
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-900 to-green-900">
      <Paper
        elevation={6}
        className="flex flex-col items-center p-10 rounded-3xl"
        style={{ minWidth: 380, maxWidth: 480, width: '90%' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <EmailIcon fontSize="large" className="text-purple-700" />
          <Typography variant="h4" className="font-bold text-gray-800">
            Contact Me
          </Typography>
        </div>
        <Typography variant="subtitle1" className="mb-6 text-gray-600 text-center">
          Have a question, opportunity, or just want to say hello? <br />
          Fill out the form below and I'll get back to you soon.
        </Typography>
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-6 w-full"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSend}
          style={{ textTransform: 'none', fontWeight: 600, fontSize: 18 }}
        >
          Send Message
        </Button>
        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/jeffreychu06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" className="text-purple-700 hover:text-purple-900 transition-colors" />
          </a>
          <a
            href="https://github.com/Jc-10243296"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" className="text-gray-800 hover:text-black transition-colors" />
          </a>
        </div>
      </Paper>
    </div>
  );
};

export default ContactMe;