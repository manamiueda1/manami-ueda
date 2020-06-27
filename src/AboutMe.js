import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div id="About-me">
      <h1>About Me</h1>

      <div class="Bar"></div>

      <br></br>
      <p className="About-me-p">
        Hi! I'm Manami, a full-stack software engineer based in New York City. I
        began my career in the tech industry in Chicago as a Product Manager for
        a mobile application development company. Shortly after that, I moved to
        New York City and joined an AdTech company as a Platform Sales Rep. I
        discovered my love for coding when I developed an interest in
        understanding how websites and applications are being built from the
        ground up. I wanted to learn more and build actual projects, which then
        led me to enroll in Fullstack Academy's Software Engineering Immersive
        Program. Now a recent graduate from Fullstack Academy, I am ready to
        start my next journey as a software engineer with an organization
        centered around a passionate, collaborative culture. Please check out my
        projects below and shoot me a message or email me at
        manamiueda1@gmail.com - cheers!
        <br></br>
        <br></br>
        <h3>Technologies I've Worked With</h3>
        <div class="Bar"></div>
        <br></br>
      </p>
      <div className="Technology">
        Language: JavaScript (ES6+)
        <br></br>
        Frontend: React.js, Redux, HTML, CSS
        <br></br>
        Backend: Node.js, Express, Sequelize, PostgreSQL, Mongoose, MongoDB,
        RESTful API
        <br></br>
        DevOps: Heroku, Firebase, TDD (Mocha, Chai, Jasmine)
        <br></br>
        Tools: npm, GitHub, GIT, Visual Studio Code, Postman, Postico, Compass
      </div>
    </div>
  );
}

export default AboutMe;
