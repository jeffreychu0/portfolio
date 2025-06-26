import React from 'react';
import profileImage from '../assets/profile_final.png'; 

const AboutMe = () => {
  return (
    <section className=" text-white py-12 px-8 flex flex-col md:flex-row items-center justify-center gap-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <img
        src={profileImage}
        alt="Jeffrey Chu"
        className="rounded-xl w-4/12 object-cover md:mr-12 self-start"
        style={{ marginLeft: '-2rem' }}
      />
      <div className="md:space-y-32 sm:space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold">Hello! I’m Jeffrey Chu</h2>
        <p className="max-w-2xl text-2xl">
          I’m a first-gen College Student pursuing my B.S. in Computer Science at New York Institute of Technology.
        </p>
        <p className="max-w-2xl text-2xl">
          As a passionate Software Engineer, I thrive on creating innovative solutions that make a difference. With background in full-stack, GenAI, Robotics, VR, and Cloud development, I am well-equipped to tackle complex challenges and deliver high-quality code solutions to any problems. My quote, "Let's Make it Happen", reflects on my journey and commitment to making anything work.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;