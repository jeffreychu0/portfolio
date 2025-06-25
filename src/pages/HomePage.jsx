import React from 'react';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <AboutMe /> 
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
};


export default HomePage;