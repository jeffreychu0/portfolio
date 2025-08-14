import {useState, React} from 'react';

const TimelineItem = ({ title, date, description, image, align = 'left', isLast, onImageClick }) => {
  const isLeft = align === 'left';

  return (
    <>
      <div className={`flex flex-col md:flex-row items-center mb-24 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
        {/* Text */}
        <div className="flex-1 flex justify-end md:justify-end px-8">
          <div className={`bg-gray-800 p-10 rounded-t-lg md:rounded-2xl shadow-2xl max-w-6xl w-full ${isLeft ? 'text-left' : 'text-right'}`}>
            <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>
            <div className="md:text-lg text-blue-300 mb-4">{date}</div>
            <p className=" text-sm md:text-xl">{description}</p>
          </div>
        </div>
        {/* Line and Dot */}
        <div className="flex flex-col items-center mx-6">
          {/* Dot */}
          <div className="hidden md:block w-10 h-10 bg-gradient-to-br from-blue-500 to-gray-700 rounded-full border-8 border-white z-10" />
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-start md:justify-start px-8">
          <img
            src={image}
            alt={title}
            className="rounded-b-lg md:rounded-2xl w-full max-w-6xl aspect-video object-cover shadow-2xl cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={onImageClick}
            tabIndex={0}
            aria-label={`Enlarge image for ${title}`}
          />
        </div>
      </div>
    </>
  );
};

export default TimelineItem;