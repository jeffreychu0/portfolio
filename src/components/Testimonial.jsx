import React from 'react';

const Testimonial = ({ image, title, testimonial, bgcolor }) => {
  // Ensure testimonial is always an array
  const testimonialLines = Array.isArray(testimonial) ? testimonial : [testimonial];

  return (
    <>
      <img
        src={image}
        className="h-full object-cover flex flex-col md:flex-row items-center gap-10 justify-center mx-auto rounded-2xl border-4 border-white"
      />
      <div
        className={`flex flex-col md:flex-row items-center gap-10 justify-center mx-auto p-10 rounded-2xl border-4 border-white ${bgcolor}`}
        style={{ width: '60%', height: '100%' }}
      >
        <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-3xl md:text-4xl mb-12">{title}</p>
          {testimonialLines.map((line, idx) => (
            <p key={idx} className="text-2xl md:text-3xl leading-snug mb-6">
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;