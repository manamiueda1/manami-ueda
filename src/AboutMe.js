import React from "react";
import "./App.css";

function AboutMe() {
  return (
    <div id="About-me">
      <h1>About Me</h1>

      <div class="Bar"></div>

      <br></br>
      <p className="About-me-p">
        For Manami Ueda, ethics is the central feature of her business mindset.
        A three-year veteran of the tech industry, Manami knows that when a
        company is ethical and respectful to its customers and employees, that
        its business thrives. She brings that knowledge to everything she does,
        whether it be coding, human resources, or advertising. A former
        assistant director for a mobile application development company in
        Chicago, Manami was also an integral part of an advertising technology
        company in New York. Furthermore, she is a recent graduate of Fullstack
        Academy, which bolstered her business savvy with incredible in-sights
        into coding and computer science. For Manami, the most exciting part of
        coding is seeing the results of what she is building – of witnessing
        people interact with programs and processes that she designed.
        <br></br>
        <br></br>
        <h3>Technologies I've Worked With</h3>
        <div class="Bar"></div>
        <br></br>
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
      </p>
    </div>
  );
}

export default AboutMe;
