import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <h2>Dog Gone Daycare</h2>
      <ul>
        <li>Developed a database web application to allow clients to track various owners and dogs, their bookings, and
        associated kennels and/or services during their stays</li>
        <li>Designed MySQL database with N:M & 1:M relationships, with full CRUD functionality</li>
        <li>Utilized Handlebars for building user interface with Node as the backend for database interactions and
        manipulations</li>
        <li>Used AJAX for asynchronous task</li>
      </ul>
      <h2>Dish Diary</h2>
      <ul>
        <li>Developed a full-stack web application for users to keep track the dishes eaten at various restaurants</li>
        <li>Perform Create, Retrieve, Update, and Delete on the database using the React frontend and REST backend</li>
        <li>Frontend designed with usuability in mind, creating the most appropriate experience for users.</li>
      </ul>
      <h2>Checkers Variant</h2>
      <ul>
        <li>Developed a playable implemention of checker with modified rules</li>
        <li>Designed classes to leverage inheritance, composition, and polymorphism for efficiency</li>
        <li>Designed unit tests to validate to components are working as intended</li>
      </ul>
    </div>
  );
}

export default Projects;