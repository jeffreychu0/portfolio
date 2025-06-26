import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Testimonial from './Testimonial';
import julianImg from '../assets/julian.jpeg';

const testimonials = [
  {
    image: julianImg,
    title: 'Julian Marquard - Custom Software Engineering Specialist',
    testimonial: [
      'I had the true pleasure of working together with Jeffrey on novel autonomous missions with Hudson, our 4-legged robot.',
      'Jeffrey is a true doer, his ability to understand and solve advanced technical challenges is very remarkable',
      'What takes the average student 3 days to accomplish, takes Jeffrey half a day - my biggest problem is that I can\'t find enough work for him fast enough.'
    ],
    bgcolor: 'bg-purple-700', // brighter
  },
  {
    image: 'path/to/image2.jpg',
    title: 'Highly Recommend',
    testimonial: 'Professional and creative.',
    bgcolor: 'bg-green-700', // brighter
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  // Title animation: 0% to 25%
  const titleY = useTransform(scrollYProgress, [0, 0.25], ['80vh', '10vh']);
  const titlePosition = useTransform(scrollYProgress, [0, 0.25], ['absolute', 'fixed']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);

  // Testimonial segments: first at 50-75%, second at 75-100%
  const testimonialSegments = [
    [0.35, 0.55], // First testimonial
    [0.55, 0.75], // Second testimonial
  ];

  // Animate background: purple-900 for first, green-900 for second
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.30, 0.35, 0.50, 0.55, 1],
    ['#000000', '#000000', '#581c87','#581c87', '#14532d', '#14532d'] // purple-900, then green-900
  );

  return (
    <motion.section
      ref={ref}
      style={{ background: bgColor, minHeight: `${100 + testimonials.length * 100}vh`, position: 'relative' }}
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
        className="text-8xl font-bold text-center pt-8"
      >
        A few words from my coworkers
      </motion.h2>

      {/* Snapped Testimonials at Bottom */}
      <div
        className="fixed left-0 right-0 flex flex-col items-center"
        style={{ bottom: 150, zIndex: 20, pointerEvents: 'none' }}
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
                height: '50vh',
                bottom: 0,
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
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