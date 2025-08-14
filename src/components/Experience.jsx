import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import NYITImage from '../assets/nyit.png';
import biomedImage from '../assets/biomedresearch.png';
import hudsonImage from '../assets/hudson.jpg';
import jaimeImage from '../assets/jaime.jpg';
import ffImage from '../assets/ff.jpg';
import photoboothImage from '../assets/photobooth2.png';
import mairImage from '../assets/mair.png';
import temiImage from '../assets/temi.png';
import nrealImage from '../assets/nreal.png';
import demoImage from '../assets/demo.png';
import frcImage from '../assets/frc.png';
import robotigersImage from '../assets/robotigers.png'
import cneImage from '../assets/cne.png'

const experiences = [
	{
		title: 'New York Institute of Technology',
		date: 'September 2024-Expected 2028',
		description:
			'College Student pursing a Bachelor of Science in Computer Science with a focus on software development and AI.',
		image: NYITImage,
	},
	{
		title: 'NYIT Biomedical Research Assistant',
		date: 'January 2025-Present',
		description:
			'Assisting in biomedical research for tissue engineering and regeneration. Work on 3D printing and designing scaffolds for biomedical engineers',
		image: biomedImage,
	},
	{
		title: 'Accenture Hudson Living Interaction',
		date: 'Febrary 2025-July 2025',
		description:
			'Explored how we can interact with robotics outside of controllers, including use of BCI or GenAI based systems to control a Boston Dynamics Robot Dog',
		image: hudsonImage,
	},
	{
		title: 'FIRST Software Mentor/Lead',
		date: 'January 2025-April 2025',
		description:
			'Mentored and led the software team for multiple FIRST Robotics Competition teams, including 1796, 1880, and 10229. Assisted a dozen students in learning software development skills for robotics. Trained them on basic robotics concepts and Java programming',
		image: frcImage,
	},
	{
		title: 'Accenture jAIme Jelly Bean Demo',
		date: 'September 2024-Present',
		description:
			'3D printed the Jelly Bean dispenser used, which is a GenAI based candy machine that dispenses candy based on mood.',
		image: jaimeImage,
	},
	{
		title: 'Accenture Finance Forward',
		date: 'June 2024-September 2024',
		description:
			'Various technival hotspots in the office had to be maintained and build back after being non-functional. I Reverse Engineered these places that we did not have the source code for, requiring a lot of data manipulation and understanding how the app works to bring them back to life',
		image: ffImage,
	},
	{
		title: 'Accenture AI Photo App',
		date: 'Janurary 2024-June 2024',
		description:
			'Designed the FE and BE of a GenAI Photos app, utilizing GenAI to place you into photos of famous artworks and places',
		image: photoboothImage,
	},
	{
		title: 'Accenture mAIr',
		date: 'September 2023-January 2024',
		description:
			'mAIr is a digital twin GenAI based app that allows you to ask questions to a digital twin of Mary Hamilton, one of the Managing Directors at Accenture. This project was awarded the "Best use of GenAI Award" by Billboard and was showcased to CES 2024 (138k participants) ',
		image: mairImage,
	},
	{
		title: 'Accenture Temi Demo',
		date: 'June 2023-September 2023',
		description:
			'Worked with the Temi Robot to assist in office navigation, allowing users to walk with it like a tour guide.',
		image: temiImage,
	},
	{
		title: 'Accenture NReal Demo',
		date: 'June 2023-September 2023',
		description:
			'Utilized the NReal AR Glasses to create a XR app that localizes virtual objects to the real world. Built using C#, Unity, and various AR Libraries',
		image: nrealImage,
	},
	{
		title: 'Accenture Tech Innovation Demo Showcase',
		date: 'February 2023-June 2023',
		description:
			'Over the course of my time working with Accenture\'s Technology Innovation Team, I had presented around 10+ demos of different variants to clients, MDs, and other groups. This exploratory period allowed me to learn about the technology Accenture uses and how to pitch it to clients.',
		image: demoImage,
	},
	{
		title: 'FIRST Robotigers Software Lead',
		date: 'October 2021-June 2024',
		description:
			'Led the software team for my FIRST Robotics Team 1796, the RoboTigers. Led a team of 5 students to program the entire robot. Also have presented to 30+ students on advanced programming concepts and created videos on learning software development skills that have accrued 5.5k views ',
		image: robotigersImage,
	},
	{
		title: 'CTE Cloud Network Engineering',
		date: 'October 2020-June 2024',
		description:
			'Enrolled into CTE coursework during my High School, which introduced me to various hardware and software skills such as 3D printing, soldering, electronics, networking, programming, cybersecurity, and cloud such as AWS.',
		image: cneImage,
	},
];

const Experience = () => {
	const [modalImage, setModalImage] = useState(null);

	return <>
		<section
			id="experience-section"
			className="bg-gradient-to-bl from-purple-900 via-blue-900 to-green-900 text-white py-12 px-4 md:px-8"
		>
			<h2 className="text-center text-4xl lg:text-6xl font-bold mb-12">Experience Timeline</h2>
			<div className="relative mx-auto max-w-7xl">
				{/* Vertical line, full height of parent */}
				<div className="hidden md:block absolute left-1/2 top-0 h-full w-2 bg-white transform -translate-x-1/2 z-0 rounded-lg"></div>
				{[...experiences].reverse().map((exp, idx) => (
					<TimelineItem
						key={idx}
						{...exp}
						align={idx % 2 === 0 ? 'left' : 'right'}
						isLast={idx === experiences.length - 1}
						onImageClick={() => setModalImage(exp.image)}
					/>
				))}
			</div>
		</section>
		{modalImage && (
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
				onClick={() => setModalImage(null)}
			>
				<div
					className="relative"
					onClick={e => e.stopPropagation()}
				>
					<img
						src={modalImage}
						alt="Enlarged"
  						className="max-w-[90vw] max-h-screen rounded-2xl shadow-2xl object-contain"
					/>
					<button
						className="absolute top-2 right-2 bg-gray-900 bg-opacity-80 text-white rounded-full p-2 hover:bg-opacity-100 transition"
						onClick={() => setModalImage(null)}
						aria-label="Close image preview"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		)}
		<section className="bg-gradient-to-bl from-blue-900 via-green-900 to-black-900 text-white py-20 px-4 md:px-8">
			{/* Testimonial content */}
		</section>
		<section className="bg-gradient-to-bl from-green-900 via-black to-black text-white py-20 px-4 md:px-8">
			{/* Testimonial content */}
		</section>
	</>
};

export default Experience;