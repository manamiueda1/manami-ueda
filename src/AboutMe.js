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
        from Fullstack Academy, I have enhanced my knowledge on what it means to
        be a part of how a product is developed and the incredible feeling that
        comes with helping others understand the product from the ground up.
        That aside, when I’m not coding, I can be found doing inversions in the
        yoga studio or whipping up new recipes in the kitchen.
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
