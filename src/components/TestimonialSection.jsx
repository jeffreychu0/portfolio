import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Testimonial from './Testimonial';

const testimonials = [
  {
    image: 'path/to/image1.jpg',
    title: 'Amazing Work!',
    testimonial: 'This was a fantastic experience.',
    bgcolor: 'bg-purple-900',
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Highly Recommend',
    testimonial: 'Professional and creative.',
    bgcolor: 'bg-green-900',
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
    const [show, setShow] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  // Title: starts centered, scrolls up, then sticks to top
  const titleY = useTransform(scrollYProgress, [0, 0.20, 0.30], ['40vh', '10vh', '10vh']);
  const titlePosition = useTransform(scrollYProgress, [0, 0.15], ['absolute', 'fixed']);

  // Background color transition
  const bgColor = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ['#000', '#f3f4f6']
  );

  // Testimonial card animations
  // Each testimonial gets its own scroll segment
  const testimonialSegments = testimonials.map((_, i) => {
    const start = 0.3 + i * 0.3; // Increase the gap between starts
    const end = start + 0.3;     // Increase the duration each is visible
    return [start, end];
  });

  // Animate title opacity: hidden at first, fades in between 0.15 and 0.22 scroll progress
  const titleOpacity = useTransform(scrollYProgress, [0, 0, 0], [0, 0, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ background: bgColor, minHeight: `${80 + testimonials.length * 40}vh`, position: 'relative' }}
      className="flex flex-col items-center w-full transition-colors duration-700"
    >
      {/* Animated Title */}
      <motion.h2
        style={{
          position: titlePosition,
          top: 0,
          left: 0,
          right: 0,
          y: titleY,
          zIndex: 10,
          opacity: titleOpacity,
        }}
        className="text-4xl font-bold text-center pt-8"
      >
        What People Say
      </motion.h2>

      {/* Snapped Testimonials at Bottom */}
      <div
        className="fixed left-0 right-0 flex flex-col items-center"
        style={{ bottom: 500, zIndex: 20, pointerEvents: 'none' }} // <-- increase bottom value
      >
        {testimonials.map((t, i) => {
          const [start, end] = testimonialSegments[i];
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            [0, 1, 1, 0]
          );
          const y = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            [40, 0, 0, 40]
          );

          return (
            <motion.div
              key={i}
              style={{
                opacity,
                y,
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                pointerEvents: 'auto',
              }}
              className="flex justify-center"
            >
              <Testimonial {...t} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TestimonialSection;