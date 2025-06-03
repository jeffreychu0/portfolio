import React from 'react';

const Timeline = () => {
  const achievements = [
    { year: '2023', title: 'Started Portfolio Website', description: 'Created a personal portfolio website to showcase my projects and skills.' },
    { year: '2022', title: 'Completed React Course', description: 'Finished an advanced React course to enhance my front-end development skills.' },
    { year: '2021', title: 'Internship at XYZ Company', description: 'Gained practical experience in web development during a summer internship.' },
    { year: '2020', title: 'Graduated with a Degree in Computer Science', description: 'Earned a Bachelor’s degree in Computer Science from ABC University.' },
  ];

  return (
    <div className="timeline-container">
      <h2 className="text-3xl font-bold mb-4">My Achievements</h2>
      <ul className="timeline">
        {achievements.map((achievement, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-year">{achievement.year}</div>
            <div className="timeline-content">
              <h3 className="font-semibold">{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;