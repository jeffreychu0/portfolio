import React from 'react';
import profileImage from '../assets/profile.jpg';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl p-4 bg-gray-800 text-white">
      <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">Jeffrey Chu</h1>
      <p className="mt-2 text-center">
        As a passionate software engineer, I thrive on creating innovative solutions that make a difference. With a strong foundation in full-stack development, I enjoy tackling complex challenges and delivering high-quality code. My journey in tech is driven by curiosity and a commitment to continuous learning.
      </p>
    </div>
  );
};

export default AboutMe;