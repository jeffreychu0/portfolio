import React from 'react';

const funFacts = [
  "I can solve a Rubik's Cube in under a minute.",
  "Coffee enthusiast ☕️.",
  "I once hiked a volcano in Indonesia.",
  "I love building side projects with React.",
  "My favorite programming language is JavaScript.",
];

const AboutMe = () => (
  <div className="max-w-xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-8 mt-8">
    <div className="flex flex-col items-center">
      <img
        src="https://api.dicebear.com/7.x/identicon/svg?seed=Jeffrey"
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
          Email: <a href="mailto:jeffrey@example.com" className="text-blue-400 underline">jeffrey@example.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/jeffreychu" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeffreychu</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;