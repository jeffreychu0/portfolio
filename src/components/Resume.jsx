import React from 'react';

const RESUME_PDF_URL = '/resume.pdf'; // Now served from public/

const Resume = () => (
  <section className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex flex-col items-center justify-start py-12 px-4 w-full">
    <h1 className="text-5xl font-bold text-white mb-8 mt-16">My Resume</h1>
    <div className="w-full max-w-6xl bg-gray-900 rounded-xl shadow-lg overflow-hidden" style={{ height: '75vh' }}>
      <iframe
        src={RESUME_PDF_URL}
        title="Resume PDF"
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  </section>
);

export default Resume;