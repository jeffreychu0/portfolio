import React from 'react';
import Timeline from '../components/Timeline';

const TimelinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* <h1 className="text-4xl font-bold mb-6">Timeline of Achievements</h1> */}
      <Timeline />
    </div>
  );
};

export default TimelinePage;