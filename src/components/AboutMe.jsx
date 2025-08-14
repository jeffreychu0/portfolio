import React from 'react';
import profileImage from '../assets/profile_final.png'; 

const AboutMe = () => {
  return (
    <section className=" text-white py-12 px-8 flex flex-col md:flex-row items-center justify-center gap-16 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      <img
        src={profileImage}
        alt="Jeffrey Chu"
        className="rounded-xl w-8/12 md:w-4/12 object-cover md:mr- self-center md:self-start"
      />
      <div className="md:space-y-32 space-y-12">
        <h2 className="text-lg md:text-6xl font-bold">Hello! I’m Jeffrey Chu</h2>
        <p className="max-w-2xl text-sm md:text-2xl">
          I’m a first-gen College Student pursuing my B.S. in Computer Science at New York Institute of Technology.
        </p>
        <p className="max-w-2xl text-sm md:text-2xl">
          As a passionate Software Engineer, I thrive on creating innovative solutions that make a difference. With background in full-stack, GenAI, Robotics, VR, and Cloud development, I am well-equipped to tackle complex challenges and deliver high-quality code solutions to any problems. My quote, "Let's Make it Happen", reflects on my journey and commitment to making anything work.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;