import React from 'react';

const Testimonial = ({ image, title, testimonial, bgcolor, fontSize }) => {
  // Ensure testimonial is always an array
  const testimonialLines = Array.isArray(testimonial) ? testimonial : [testimonial];

  return (
    <div className="flex flex-col md:flex-row items-center md:gap-10 justify-center mx-auto w-full">
      {/* Image top for md and smaller, left for larger screens */}
      <img
        src={image}
        className=" max-h-24 md:max-h-96 md:h-full object-cover rounded-2xl border-4 border-white mb-6 md:mb-0 md:mr-6"
        alt={title}
      />
      <div
        className={`flex flex-col justify-center h-auto max-h-full p-4 md:p-10 rounded-2xl border-4 border-white ${bgcolor} w-full md:w-3/5`}
      >
        <p className="font-bold text-xl md:text-4xl mb-2 md:mb-6">{title}</p>
        {testimonialLines.map((line, idx) => {
          // Use inline style for extra-small, otherwise use Tailwind class
          const style = fontSize === 'extra-small' ? { fontSize: '0.65rem' } : {};
          return (
            <p
              key={idx}
              style={style}
              className={`${fontSize !== 'extra-small' ? fontSize : ''} leading-snug mb-4`}
            >
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;