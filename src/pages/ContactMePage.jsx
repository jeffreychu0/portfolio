import React from 'react';
import ContactMe from '../components/ContactMe';

const ContactMePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <ContactMe />
    </div>
  );
};

export default ContactMePage;