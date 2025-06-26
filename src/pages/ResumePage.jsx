import React from 'react';
import Resume from '../components/Resume';

const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* <h1 className="text-4xl font-bold mb-6">Timeline of Achievements</h1> */}
      <Resume />
    </div>
  );
};

export default ResumePage;