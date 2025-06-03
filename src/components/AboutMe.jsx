import React from 'react';
import profileImage from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white">
      <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">Your Name</h1>
      <p className="mt-2 text-center">
        This is a brief description about yourself. You can include your background, interests, and any other information that you would like to share with visitors to your portfolio.
      </p>
    </div>
  );
};

export default AboutMe;