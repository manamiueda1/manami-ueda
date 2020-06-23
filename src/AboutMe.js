import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div id="About-me">
      <h1>About Me</h1>

      <div class="Bar"></div>

      <br></br>
      <p className="About-me-p">
        Hi! I'm Manami, a full-stack software engineer based in New York City.
        Originally from Chicago, I began my career in the tech industry as a
        Product Manager for a mobile application development company. Shortly
        after that, I moved to New York City and joined an AdTech company as a
        Platform Sales Rep. I wanted to form a deeper understanding of the
        technology I was selling and create a more authentic bond between the
        product and the customer, which then led me to enroll in Fullstack
        Academy's Software Engineering Immersive Program. Now a recent graduate
        from Fullstack Academy, I am ready to start my next journey as a
        software engineer with an organization centered around a passionate,
        collaborative culture. Please check out my projects below and shoot me a
        message or email me at manamiueda1@gmail.com - cheers!
        <br></br>
        <br></br>
        <h3>Technologies I've Worked With</h3>
        <div class="Bar"></div>
        <br></br>
        <strong>Language:</strong> JavaScript (ES6+)
        <br></br>
        <strong>Frontend:</strong> React.js, Redux, HTML, CSS
        <br></br>
        <strong>Backend:</strong> Node.js, Express, Sequelize, PostgreSQL,
        Mongoose, MongoDB, RESTful API
        <br></br>
        <strong>DevOps:</strong> DevOps: Heroku, Firebase, TDD (Mocha, Chai,
        Jasmine)
        <br></br>
        <strong>Tools:</strong> npm, GitHub, GIT, Visual Studio Code, Postman,
        Postico, Compass
      </p>
    </div>
  );
}

export default AboutMe;
