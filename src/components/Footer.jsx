import React from 'react';
import profileImage from '../assets/profile_uncropped.jpeg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Jeffrey Chu
        </footer>
    );
};

export default Footer;