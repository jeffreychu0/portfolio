import React from 'react';

const Timeline = () => {
  const achievements = [
    { timeStart: '2020', timeEnd: '2024', title: 'High School (Technology CTE)', description: 'Began my High school CTE Program, which introduced me to programming (HTML, CSS, Javascript, Python)' },
    { timeStart: '2021', timeEnd: '2021', title: 'Motherboard Website', description: 'Created my first website for a school project using base HTML, CSS, and Javascript.' },
    { timeStart: '2021', timeEnd: '2024', title: 'FIRST Robotics', description: 'Introduced to Java, became introduced to how software interacts with physical items. By 2024, we created a robot that was ranked 4th in its ability to score during the autonomous period and 7th worldwide.' },
    { timeStart: '2022', timeEnd: '2023', title: 'Accenture Tech School & Creative Classroom (Now known as CASA)', description: 'Introduced to Agile methodologies, workplace habits/competency, and thought processes on dealing with clients.' },
    { timeStart: '2023', timeEnd: '2023', title: 'Liquid Studio\'s demos', description: 'Began learning about the demos within Liquid Studio and became familiar with various teammates within the space.'},
    { timeStart: '2023', timeEnd: '2023', title: 'NREAL demo', description: 'Created a VR based Demo using the NReal XR Glasses with Unity by learning languages such as C#' },
    { timeStart: '2023', timeEnd: '2023', title: 'Temi demo', description: 'Created a Robotics demo showcasing how the Temi Robot can navigate you to various places in the office' },
    { timeStart: '2023', timeEnd: '2024', title: 'mAIr demo', description: 'Created a GenAI based demo that creates a digital twin of Accenture leadership who was trained to answer questions regarding Accentures Tech Vision and the CES Itinerary. This was later awarded the "Best use of GenAI" by CES 2024' },
    { timeStart: '2024', timeEnd: '2024', title: 'Hives Photobooth (Phase 1)', description: 'Photobooth is an app that uses AI generates an image based on a photo you take at the Hive. Introduced to React and was provided a month to learn about it. Once finished, I began exploring how some of the hardware can be utilized and programmed it using C++. Lastly, worked with other Accenture LS apprentices to build out a web-ui for the new Photobooth app on Floor 61' },
    { timeStart: '2024', timeEnd: '2024', title: 'Hives Photobooth (Phase 2)', description: 'Once the new UI was built out, began exploring the possibility of using a new AI system to generate our images. We explored a repo called ComfyUI and used it to explore how AI can generate images based on specific prompts' },
    { timeStart: '2024', timeEnd: '2024', title: 'Finance Forward Hive', description: 'The Finance Forward Hive, located on Floor 63, needed to be revamped because a lot of the items within the Hive were non-functional. Worked on revamping it using additional scripts to get the space functional again.' },
    { timeStart: '2024', timeEnd: '2025', title: 'jAIme Jelly Bean Dispenser', description: 'jAIme is a AI based demo that dispenses Jelly beans based on your mood. Managed the process of 3d printing, building, and connecting the hardware of the dispensers to the Frontend' },
    { timeStart: '2025', timeEnd: '2025', title: 'BCI x Hudson', description: 'Hudson is the robot dog that we had bought from Boston Dynamics (they call it Spot). We worked on integrating a Brain-computer-interface to help control the sensitivity of movements that control hudson. This was later turned into a demo with a UI' },
    { timeStart: '2025', timeEnd: '2025', title: 'Hudson x AI', description: 'After building out BCI, we began working on a new AI workflow of Hudson that can analyze what it sees in front of it. I had become the main POC for any code that needs to be created for Hudson.' },
  ];

  return (
    <div className="timeline-container m-8">
      <h2 className="text-3xl font-bold mb-4">My Timeline</h2>
      <ul className="timeline">
        {achievements.map((achievement, index) => (
          <li key={index} className="timeline-item m-4 max-w-7xl">
            <div className="timeline-year">{achievement.timeStart} - {achievement.timeEnd}</div>
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