import React from "react";
import "./App.css";
import fit from "./images/fit-minded-iphone-image.png";

function Projects() {
  return (
    <div id="Projects">
      <br></br>
      <h1>Projects</h1>
      <div class="Bar"></div>

      <div className="FitMinded">
        <h2>FitMinded</h2>

        <br></br>
        <div className="fit">
          <img src={fit} className="Fit-img" alt="Fit-img"></img>

          <div className="Fit-description">
            <p>
              FitMinded is a progressive web application that connects
              individuals who have similar athletic interests. FitMinded allows
              users to set their athletic preferences and location so they can
              find the perfect training partner. Training for a triathlon but
              need to practice your freestyle? Use FitMinded to find other
              swimmers you can plan workouts with! Love rock-climbing but need a
              belaying buddy? Use FitMinded to find those also passionate in the
              climbing arts! Whatever your experience level or personal
              preference, FitMinded will help fitness enthusiasts connect with
              others.
              <br></br>
              <h4>Technologies Used:</h4>
              <div class="Short-bar"></div>
              <br></br>
              Javascript, React.js, Node.js, MongoDB, Mongoose etc.
            </p>
            <div>
              <a
                href="http://fit-minded-ny.herokuapp.com/"
                target="_blank"
                className="Try-demo"
                type="button"
              >
                Try Demo
              </a>
              <a
                href="https://github.com/Fit-Minded/fit-minded"
                target="_blank"
                className="View-code"
                type="button"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2>Image-to-Voice</h2>
      <h2>Car-Ify</h2>
      <div id="Resume">
        <h1>Resume</h1>
        <div class="Bar"></div>
      </div>
      <div id="Contact-me">
        <h1>Contact</h1>
        {/* <div class="Bar"></div> */}
      </div>
    </div>
  );
}

export default Projects;
