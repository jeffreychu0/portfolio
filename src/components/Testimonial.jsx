import React from 'react';

const Testimonial = (image, title, testimonial, bgcolor) => {
    return (
      <div className="flex flex-col md:flex-row items-start gap-6 justify-center max-w-4xl mx-auto p-6 rounded-xl {bgcolor}">
        <img src={image} className="w-48 h-48 rounded-xl object-cover" />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm mt-2">
            {testimonial}
          </p>
        </div>
      </div>
    );
};

export default Testimonial;