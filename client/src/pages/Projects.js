import React from 'react';
import Slideshow from '../components/Slideshow';

const projectSlides = [
  {
    image: '/images/ddc.png',
    title: 'Dog Gone Daycare',
    description: 'Developed a database web application to allow clients to track various owners and dogs, their bookings, and associated kennels and/or services during their stays. Designed MySQL database with N:M & 1:M relationships, with full CRUD functionality. Utilized Handlebars for building user interface with Node as the backend for database interactions and manipulaions',
  },
  {
    image: '/images/dish_diary.png',
    title: 'Dish Diary',
    description: 'Developed a full-stack web application for users to keep track the dishes eaten at various restaurants. Perform Create, Retrieve, Update, and Delete on the database using the React frontend and REST backend ',
  },
  {
    image: '/images/microservice.png',
    title: 'Currency Microservice',
    description: 'Developed a currency microservice for a teammate to utilize for their project. The microservice uses RESTful API for communication and PostgreSQL for its database.',
  },
];

const projectVideos = [
  {
    title: 'Music App Demo',
    url: 'https://www.youtube.com/embed/-DVGVBg4P80',
  },
  {
    title: 'Currency Microservice Demo',
    url: 'https://www.youtube.com/embed/cd6N2mXVSfg',
  },
];

const Projects = () => {
  return (
    <div>
      <div className="header-box">
        <h1>Projects</h1>
      </div>
      <Slideshow slides={projectSlides} />
      <div className="header-box">
        <h1>Project Demos</h1>
      </div>
      <div className="header-box">
        <div className="video-section">
          {projectVideos.map((video, index) => (
            <div key={index} className="video-card">
              <h2>{video.title}</h2>
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;