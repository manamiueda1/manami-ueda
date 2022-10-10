import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div id="About-me">
      <h1 className="about-me">About Me</h1>

      <div class="Bar"></div>

      <br></br>
      <p>
        Hi! I'm Manami, a Software Engineer at OpenFin based in New York City. 
        {/* I began my career in the tech industry in Chicago as a Product Manager for
        a mobile application development company. I discovered my love for coding 
        when I developed an interest in understanding how websites and applications 
        are being built from the ground up. I wanted to learn more and build actual projects, which then
        led me to enroll in Fullstack Academy's Software Engineering Immersive
        Program.  */}
        <br></br>
        <br></br>
        <h3>Technologies I've Worked With</h3>
        <div class="Bar"></div>
        <br></br>
        <div className="Technology">
          <b>Language:</b> JavaScript (ES6+) TypeScript
          <br></br>
          <strong>Frontend:</strong> React.js, Redux, HTML, CSS, Styled-Components
          <br></br>
          <strong>Backend:</strong> Node.js, Express, Sequelize, PostgreSQL,
          Mongoose, MongoDB, RESTful API
          <br></br>
          <strong>DevOps:</strong> Heroku, Firebase, TDD (Mocha, Chai, Jasmine)
          <br></br>
          <strong>Tools:</strong> npm, GitHub, GIT, Visual Studio Code, Postman,
          Postico, Compass
        </div>
      </p>
    </div>
  );
}

export default AboutMe;
