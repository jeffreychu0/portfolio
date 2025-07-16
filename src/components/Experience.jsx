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
			'Assisting in biomedical research for tissue engineering and regeneration. Focused on 3D printing and assisting the biomedical engineers',
		image: biomedImage,
	},
	{
		title: 'Accenture Hudson Living Interaction',
		date: 'Febrary 2025-Present',
		description:
			'Worked with our Hudson Robot Dog to create demos using Living interaction features. Such examples include mind controlling, voice commanding, and more. I managed the backend and was the main POC for backend development',
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
			'jAIme is a GenAI based demo that generates a recipe of Jelly Beans based on your mood and choice of flavors. I 3D printed, soldered, and solutioned the connection to the Frontend for the Jelly Bean Dispenser to the JAIme demo',
		image: jaimeImage,
	},
	{
		title: 'Accenture Hives (Finance Forward)',
		date: 'June 2024-September 2024',
		description:
			'The Hives are a series of technology demos located around 1MW. I worked on Finance Forward, the stock ticker demo on 63 and revamped the Hive after being non-functional for years. Required a lot of hacky scripting and troubleshooting since we did not have source code',
		image: ffImage,
	},
	{
		title: 'Accenture Hives (Photobooth)',
		date: 'Janurary 2024-June 2024',
		description:
			'The Photobooth, located on floor 61, is a part of the New Consumer Hive. We had swapped out the old Disney Wakanda app for our own Accenture themed AI images. I had helped build the Frontend and explored different AI\'s to use for the backend',
		image: photoboothImage,
	},
	{
		title: 'Accenture mAIr',
		date: 'September 2023-January 2024',
		description:
			'mAIr is a digital twin GenAI based demo that allows you to interact with a digital version of Mary Hamilton, one of the Managing Directors at Accenture. I had researched how we could use GenAI to respond to questions from documents and web scraped information for mAIr to use. ',
		image: mairImage,
	},
	{
		title: 'Accenture Temi Demo',
		date: 'June 2023-September 2023',
		description:
			'Temi is a Robotics demo that allows you to interact with the office robot for navigation and information. I had worked on the whole demo, including setting up/mapping Temi, the GUI, and additional functionality such as Q/A voice interactions. ',
		image: temiImage,
	},
	{
		title: 'Accenture NReal Demo',
		date: 'June 2023-September 2023',
		description:
			'Nreal is a XR demo that showcases the possibilities of Extended Reality. The demo localizes the virtual world and anchors virtual objects to the real world. I had built the whole demo using Unity and C#',
		image: nrealImage,
	},
	{
		title: 'Accenture Liquid Studio Demo Showcase',
		date: 'February 2023-June 2023',
		description:
			'Over the course of my time in Liquid Studio, I have presented around 10+ demos of different variants to clients, MDs, and other groups. This time period was spent learning about the different demos in the lab oriented towards training myself on the demos within the space and how to present them.',
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
			<h2 className="text-center text-6xl font-bold mb-12">Experience Timeline</h2>
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