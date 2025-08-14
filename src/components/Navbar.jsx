import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      className={`bg-black bg-opacity-70 text-white flex justify-between items-center p-4 px-8 fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="flex items-center gap-6">
        <h1 className=" text-sm md:text-lg lg:text-xl font-bold">Jeffrey Chu</h1>
        <a
          href="mailto:jeffreychu0@gmail.com"
          aria-label="Email"
        >
          <EmailIcon style={{ fontSize: '2.0rem' }} className="text-purple-700 hover:text-purple-400 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeffreychu0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon style={{ fontSize: '2.0rem' }} className="text-purple-700 hover:text-purple-900 transition-colors" />
        </a>
        <a
          href="https://github.com/jeffreychu0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon style={{ fontSize: '2.0rem' }} className="text-gray-800 hover:text-black transition-colors" />
        </a>
      </div>
      <nav className="space-x-4 text-sm md:text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
      </nav>
    </header>
  );
};

export default Navbar;