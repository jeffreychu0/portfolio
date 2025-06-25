import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-gray-800 text-white flex justify-between items-center p-4 px-8 fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <h1 className="text-lg font-bold">Jeffrey Chu</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
        <Link to="/contact" className="hover:underline">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;