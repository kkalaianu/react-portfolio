import React from 'react';
import './project.css';



const Project = ({ title, description, link }) => {
  return (
    <div className="pt-3 pb-3" id="projects">
      <div className='project'></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
};

const Projects = () => {
  const projects = [
    
    
    
    {
      title: 'Expense Tracker App',
      description: 'This is a Finance app to track your daily expenses and keep to up to date. User friendly and easy to use.',
      link: 'https://kkalaianu.github.io/expense-tracker-/Expense%20tracker%20app/index.html',
    },
    {
      title: 'Quiz App',
      description: 'Basic Quiz app, to test your computer knowledge. Also, The question and its options changed in every page reload.',
      link: 'https://kkalaianu.github.io/quiz-app',
    },
    {
      title: 'Music List App',
      description:'If you are a Music Lover!, then its the best app for you to collect your music collection in one place.',
      link: 'https://kkalaianu.github.io/music-list/',
    },
    
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  
  );
};

export default Projects;
