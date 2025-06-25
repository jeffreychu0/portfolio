import React from 'react';

const TimelineItem = ({ title, date, description, image, align = 'left', isLast }) => {
  const isLeft = align === 'left';
  return (
    <div className={`flex flex-col md:flex-row items-center mb-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      {/* Text */}
      <div className="flex-1 flex justify-end md:justify-end px-4 mb-8 md:mb-0">
        <div className={`bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full ${isLeft ? 'text-right' : 'text-left'}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="text-sm text-blue-300 mb-2">{date}</div>
          <p>{description}</p>
        </div>
      </div>
      {/* Line and Dot */}
      <div className="flex flex-col items-center mx-4">
        {/* Vertical line above dot */}
        {/* <div className={`w-1 ${isLast ? 'h-1/2' : 'h-12 md:h-24'} bg-blue-500`} /> */}
        {/* Dot */}
        <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-10" />
        {/* Vertical line below dot
        {!isLast && <div className="w-1 h-12 md:h-24 bg-blue-500" />} */}
      </div>
      {/* Image */}
      <div className="flex-1 flex justify-start md:justify-start px-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full max-w-md aspect-video object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default TimelineItem;