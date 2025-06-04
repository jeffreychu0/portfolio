import React from 'react';
import profileImage from '../assets/profile.jpeg'; 

const funFacts = [
  "I really enjoy rock climbing! Especially bouldering.",
  "Current Freshman at New York Institute of Technology.",
  "I love landscape and urban photography.",
  "I love landscape and urban photography.",
];

const AboutMe = () => (
  <div className="max-w-xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-8 mt-8">
    <div className="flex flex-col items-center">
      <img
        src={profileImage}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
      />
      <h1 className="text-3xl font-bold mb-2">Jeffrey Chu</h1>
      <p className="text-center mb-6">
        Hi! I'm Jeffrey, a passionate software engineer who loves building creative solutions and learning new technologies. I enjoy collaborating with others and turning ideas into reality through code.
      </p>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Fun Facts</h2>
        <ul className="list-disc list-inside space-y-1">
          {funFacts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Contact</h2>
        <p>
          Email: <a href="mailto:jeffrey.chu06@gmail.com" className="text-blue-400 underline">jeffrey.chu06@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/jeffreychu06/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeffreychu06</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;