import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResumePage from './pages/ResumePage';
import ContactMePage from './pages/ContactMePage';
import './styles/tailwind.css';
import './styles/gradient.css';
import HomePage from './pages/HomePage';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white overflow-hidden w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactMePage />} />
        </Routes>
        <ChatWidget/>
      </div>
    </Router>
  );
}

export default App;