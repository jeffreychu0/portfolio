import React from 'react';
import TimelineItem from './TimelineItem';

const experiences = [
	{
		title: 'Accenture Tech Youth Apprentice',
		date: '2022-2025',
		description:
			'3 year Apprenticeship program dedicated to introducing high school/college students to software development by completing projects and assisting in day to day office activities.',
		image: 'https://via.placeholder.com/400x225',
	},
	{
		title: 'NYIT Robotics Club',
		date: '2023-Present',
		description:
			'Lead developer for the robotics club, building autonomous robots for competitions.',
		image: 'https://via.placeholder.com/400x225?text=Robotics',
	},
	{
		title: 'Personal Portfolio Project',
		date: '2024',
		description:
			'Designed and built a personal portfolio website using React and Tailwind CSS.',
		image: 'https://via.placeholder.com/400x225?text=Portfolio',
	},
];

const Experience = () => (
	<section
		id="experience-section"
		className="text-white py-12 px-4 md:px-8"
		style={{
			background: `
                linear-gradient(16deg, rgba(17,24,39,0.3) 0%, #1e3a8a 100%,
                linear-gradient(180deg, rgba(0,0,0,0) 85%, #000 100%)
            `,
		}}
	>
		<h2 className="text-center text-6xl font-bold mb-12">Experience Timeline</h2>
		<div className="relative mx-auto max-w-5xl">
			{/* Vertical line, full height of parent */}
			<div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0 rounded-lg"></div>
			{experiences.map((exp, idx) => (
				<TimelineItem
					key={idx}
					{...exp}
					align={idx % 2 === 0 ? 'left' : 'right'}
					isLast={idx === experiences.length - 1}
				/>
			))}
		</div>
	</section>
);

export default Experience;