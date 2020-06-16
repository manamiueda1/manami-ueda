import React from "react";
import "./App.css";
import portfolio from "./images/portfolio_img.jpg";
import fit from "./images/fit-minded-iphone-image.png";
// import Nav from "./Nav";
import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <header className="App-header">
          <h3 className="Three-headings">
            SOFTWARE ENGINEER, WEB DEVELOPER & YOGI
          </h3>

          <h1 className="Name">
            MANAMI <br></br> UEDA
          </h1>

          <div class="Bar-intro"></div>
          <div>
            <img src={linkedin} className="Linkedin" alt="linkedin"></img>
            <img src={github} className="Github" alt="github"></img>
          </div>
        </header>
        <br></br>
        <img
          src={portfolio}
          className="Portfolio_img"
          alt="portfolio_img"
        ></img>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="About-me">
        <h1>About Me</h1>

        <div class="Bar"></div>

        <br></br>
        <p className="About-me-p">
          For Manami Ueda, ethics is the central feature of her business
          mindset. A three-year veteran of the tech industry, Manami knows that
          when a company is ethical and respectful to its customers and
          employees, that its business thrives. She brings that knowledge to
          everything she does, whether it be coding, human resources, or
          advertising. A former assistant director for a mobile application
          development company in Chicago, Manami was also an integral part of an
          advertising technology company in New York. Furthermore, she is a
          recent graduate of Fullstack Academy, which bolstered her business
          savvy with incredible in-sights into coding and computer science. For
          Manami, the most exciting part of coding is seeing the results of what
          she is building – of witnessing people interact with programs and
          processes that she designed.
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
      <div className="Projects">
        <br></br>
        <h1>Projects</h1>
        <div class="Bar"></div>
        <br></br>
        <br></br>
        <div className="FitMinded">
          <h2>FitMinded</h2>
          <br></br>
          <br></br>
          <div className="fit">
            <img src={fit} className="Fit-img" alt="Fit-img"></img>

            <div className="Fit-description">
              <p>
                FitMinded is a progressive web application that connects
                individuals who have similar athletic interests. FitMinded
                allows users to set their athletic preferences and location so
                they can find the perfect training partner. Training for a
                triathlon but need to practice your freestyle? Use FitMinded to
                find other swimmers you can plan workouts with! Love
                rock-climbing but need a belaying buddy? Use FitMinded to find
                those also passionate in the climbing arts! Whatever your
                experience level or personal preference, FitMinded will help
                fitness enthusiasts connect with others.
                <br></br>
                <br></br>
                Technologies: Javascript, React.js, Node.js, MongoDB, Mongoose
                etc.
              </p>
            </div>
          </div>
        </div>

        <h2>Image-to-Voice</h2>
        <h2>Car-Ify</h2>
      </div>

      <div className="Resume">
        <h1>Resume</h1>
        <div class="Bar"></div>
      </div>
      <div className="Contact-Me">
        <h1>Contact Me!</h1>
        <div class="Bar"></div>
      </div>
    </div>
  );
}

export default App;
