import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMePage from './pages/AboutMePage';
import TimelinePage from './pages/TimelinePage';
import ContactMePage from './pages/ContactMePage';
import './styles/tailwind.css';
import './styles/gradient.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white overflow-hidden w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;