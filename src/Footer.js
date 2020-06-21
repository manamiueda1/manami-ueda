import React from "react";
import "./App.css";
import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
import mail from "./images/mail-logo.png";

function Footer() {
  return (
    <div id="Footer">
      <div className="Footer-content">
        <div className="Footer-links">
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
        <span> © Manami Ueda, 2020 All rights reserved. </span>
      </div>
    </div>
  );
}

export default Footer;
