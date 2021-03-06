import React from "react";
import "./App.css";
import portfolio from "./images/portfolio_img.jpg";
import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
import mail from "./images/mail-logo.png";

function Intro() {
  return (
    <div id="Intro">
      <header className="App-header">
        <h3 className="Three-headings">
          FULL-STACK SOFTWARE ENGINEER & WEB DEVELOPER
        </h3>

        <h1 className="Name">
          MANAMI <br></br> UEDA
        </h1>

        <div class="Bar-intro"></div>

        <div className="Social">
          <a href="mailto:manamiueda1@gmail.com" target="_blank">
            <img src={mail} className="Mail" alt="mail"></img>
          </a>
          <a href="https://www.linkedin.com/in/manami-ueda/" target="_blank">
            <img src={linkedin} className="Linkedin" alt="linkedin"></img>
          </a>
          <a href="https://github.com/manamiueda1" target="_blank">
            <img src={github} className="Github" alt="github"></img>
          </a>
        </div>
      </header>

      <img src={portfolio} className="Portfolio_img" alt="portfolio_img"></img>
    </div>
  );
}

export default Intro;
