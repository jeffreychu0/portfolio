import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-gray-700 text-white"
      />
      <div>
        <Link to="/" className="mx-2 hover:text-blue-400">Home</Link>
        <Link to="/about" className="mx-2 hover:text-blue-400">About Me</Link>
        <Link to="/timeline" className="mx-2 hover:text-blue-400">Timeline</Link>
        <Link to="/contact" className="mx-2 hover:text-blue-400">Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;