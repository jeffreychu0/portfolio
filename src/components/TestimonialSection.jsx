import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Testimonial from './Testimonial';
import julianImg from '../assets/julian.jpeg';
import orlandoImg from '../assets/orlando.jpeg';
import ericImg from '../assets/eric.jpeg'
import ashwinImg from '../assets/ashwin.png'

const testimonials = [
  {
    image: julianImg,
    title: 'Julian Marquard - Custom Software Engineering Specialist',
    testimonial: [
      'I had the true pleasure of working together with Jeffrey on novel autonomous missions with Hudson, our 4-legged robot.',
      'Jeffrey is a true doer, his ability to understand and solve advanced technical challenges is very remarkable',
      'What takes the average student 3 days to accomplish, takes Jeffrey half a day - my biggest problem is that I can\'t find enough work for him fast enough.'
    ],
  },
  {
    image: orlandoImg,
    title: 'Orlando Gil - Creative Technologist',
    testimonial: [
      "Jeffrey is without a doubt—just as, if not more reliable than any analyst or consultant I’ve worked with at Accenture. His technical curiosity and commitment to excellence has helped our team innovate, develop and deliver bold ideas under time crunch. Over the last couple of years, he has not only improved his technical depth—but has grown into a more confident speaker, even owning full client demo presentations. Without a doubt, Jeffrey will be missed and in his place there will be Shaq-sized shoes to fill. Thank you so much for all your hard work and can’t wait to see future Jeffrey!"
    ],
  },
  {
    image: ericImg,
    title: 'Eric Guzman - SW/App/Cloud Tech Support Specialist',
    testimonial: [
      "It was an absolute pleasure working with Jeffrey Chu on the Finance Forward Hive project. His contributions were nothing short of invaluable, and I wholeheartedly recommend him for his exceptional technical skills and problem-solving abilities.",
      "Jeffrey's work on the Finance Forward Hive was critical to our success. When my team encountered significant challenges in updating the mock stock portfolio ticker, Jeffrey stepped in and expertly reverse-engineered the system. He quickly diagnosed the issues and implemented effective solutions, allowing us to move forward seamlessly.",
      "Beyond that, Jeffrey also tackled the complex task of adjusting the navigation wheel, a component my colleague and I had struggled to get working. His ability to untangle intricate technical problems and deliver precise, functional adjustments truly impressed me.",
      "Jeffrey is, without a doubt, one of the most valuable employees I have had the privilege of working with here. His expertise, dedication, and impact are unparalleled, and I would gladly choose to collaborate with \"another Jeffrey\" over many others I've encountered. Any team would be fortunate to have him."
    ],
  },
  {
    image: ashwinImg,
    title: 'Ashwin Pozath - Tech Innovation Engineering Assoc Manager',
    testimonial: [
      "It has been a privilege to work alongside Jeffrey across a wide range of innovative and technically complex projects at Liquid Studio. Throughout 2023 to 2025, Jeffrey consistently demonstrated exceptional creativity, technical depth, and a strong collaborative spirit.",
      "He quickly ramped up on Liquid Studio’s ecosystem, forming strong connections within the team and immersing himself in demo development. From building immersive experiences using NReal XR glasses to designing robotics navigation with Temi, Jeffrey proved his ability to merge hardware with intuitive user interfaces, often under tight timelines.",
      "His work on the mAIr GenAI demo, which was recognized as the Best Use of GenAI at CES 2024, showcased his ability to apply cutting-edge technologies like retrieval-augmented generation, scripting with AWS, and web scraping to build solutions that are not only functional but impactful.",
      "Jeffrey’s contributions to Hive Photobooth and Finance Forward Hive demonstrate his range—from learning and applying React in just a month to programming embedded systems in C++ and even physically soldering hardware components to bring installations back to life.",
      "With jAIme Jelly Bean Dispenser, he further bridged the gap between AI and physical interactivity, leading 3D printing, hardware integration, and frontend-backend connectivity. His deep involvement in Hudson’s BCI and AI integrations pushed boundaries on how brain-computer interfaces and machine vision can interact in real time, and he eventually became the main point of contact for all of Hudson’s technical developments.",
      "Jeffrey approaches every challenge with curiosity, technical rigor, and a can-do attitude. He has been an invaluable asset to our team and continues to push the envelope of what’s possible with emerging tech. I look forward to seeing where his creativity and technical excellence take him next."
    ],
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Title animation
  const titleY = useTransform(scrollYProgress, [0, 0.135], ['80vh', windowWidth < 768 ? '4vh' : '10vh']);
  const titlePosition = useTransform(scrollYProgress, [0, 0.135], ['absolute', 'fixed']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.135], [0, 1, 1]);

  // Testimonial segments
  const testimonialSegments = [
    [0.20, 0.40],
    [0.40, 0.60],
    [0.60, 0.80],
    [0.80, 1.00],
  ];

  const gradients = [
    'from-black to-black',
    'from-gray-900 via-purple-800 to-gray-900',
    'from-gray-900 via-purple-800 to-gray-900',
    'from-gray-900 via-purple-800 to-gray-900',
    'from-gray-900 via-purple-800 to-gray-900',
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v < 0.20) setBgIndex(0);
      else if (v < 0.40) setBgIndex(1);
      else if (v < 0.60) setBgIndex(2);
      else if (v < 0.80) setBgIndex(3);
      else setBgIndex(4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center w-full transition-colors duration-700"
      style={{ minHeight: `${100 + testimonials.length * 100}vh`, position: 'relative', overflow: 'hidden' }}
    >
      {/* Gradient overlays */}
      {gradients.map((g, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 w-full h-full bg-gradient-to-br ${g} pointer-events-none`}
          initial={{ opacity: i === bgIndex ? 1 : 0 }}
          animate={{ opacity: i === bgIndex ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ zIndex: 0 }}
        />
      ))}
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
          pointerEvents: titleOpacity.get() > 0.5 ? 'auto' : 'none', // Add this line
        }}
        className="text-3xl md:text-8xl font-bold text-center pt-8"
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

          // Combine testimonial array into a single string and measure length
          const textLength = t.testimonial.join(' ').length;
          let fontSize = 'text-3xl'; // default
          if (windowWidth < 768) {
            if (textLength > 1500) fontSize = 'extra-small';
            else if (textLength > 700) fontSize = 'text-sm';
            else if (textLength > 200) fontSize = '';
          } else if (windowHeight < 901) {
            if (textLength > 1500) fontSize = 'text-xs';
            else if (textLength > 700) fontSize = 'text-md';
            else if (textLength > 200) fontSize = 'text-2xl';
          } else if (windowHeight < 1081) {
            if (textLength > 1500) fontSize = 'text-xs';
            else if (textLength > 700) fontSize = 'text-lg';
            else if (textLength > 200) fontSize = 'text-3xl';
          } else { 
            if (textLength > 1500) fontSize = 'text-sm';
            else if (textLength > 700) fontSize = 'text-xl';
            else if (textLength > 200) fontSize = 'text-3xl';
          }
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
                pointerEvents: opacity.get() > 0.5 ? 'auto' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Testimonial {...t} fontSize={fontSize} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TestimonialSection;