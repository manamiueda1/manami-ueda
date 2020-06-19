import React from "react";
import "./App.css";
import fit from "./images/fit-minded-iphone-image.png";
import imageToVoice from "./images/image-to-voice.png";
import carIfyImage from "./images/car-ify-image.png";

function Projects() {
  return (
    <div id="Projects">
      <h1>Projects</h1>
      <div class="Bar"></div>

      <div className="FitMinded">
        <h2>FitMinded</h2>

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

      <div className="Image-to-voice">
        <h2>Image-to-Voice</h2>

        <div className="imageTo">
          <img src={imageToVoice} className="imageMac" alt="imageMac"></img>

          <div className="Image-description">
            <p>
              Image-to-Voice is a progressive-web-app that allows image with
              text to turn into audio. Upload an image with text on it and the
              app will read it out loud to you. You can also pause and re-play
              the audio. This app was created in 2 days during a solo
              hack-a-thon.
              <br></br>
              <h4>Technologies Used:</h4>
              <div class="Short-bar"></div>
              <br></br>
              JavaScript, React.js, SpeechSynthesis API, Tesseract API, Bulma
            </p>
            <div>
              <a
                href="https://manami-stackathon.firebaseapp.com/"
                target="_blank"
                className="Try-demo"
                type="button"
              >
                Try Demo
              </a>
              <a
                href="https://github.com/manamiueda1/stackathon"
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
      <div className="Car-ify">
        <h2>Car-Ify</h2>

        <div className="Carify">
          <img src={carIfyImage} className="carImage" alt="carImage"></img>

          <div className="Car-description">
            <p>
              Car-Ify is an e-commerce website for buying cars. It allows you to
              filter your search, find your favorite cars and add them to your
              cart. You can either check out as a guest or sign in and view your
              order history.
              <br></br>
              <h4>Technologies Used:</h4>
              <div class="Short-bar"></div>
              <br></br>
              JavaScript, React.js, Redux.js, Node.js, Express, Sequelize,
              PostgreSQL
            </p>
            <div>
              <a
                href="https://car-ify.herokuapp.com/"
                target="_blank"
                className="Try-demo"
                type="button"
              >
                Try Demo
              </a>
              <a
                href="https://github.com/Car-Ify-1911FSA/Car-Ify-2020"
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
    </div>
  );
}

export default Projects;
