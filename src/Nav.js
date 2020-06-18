import React from "react";
import "./Nav.css";
import github from "./images/github-logo.png";

function Nav() {
  return (
    <div className="Nav">
      <img src={github} className="Github" alt="github"></img>

      <div className="Nav-links">
        <li>
          <a href="#About-me">About Me</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>

        <li>
          <a href="#Resume">Resume</a>
        </li>
        <li>
          <a href="#Contact-me">Contact</a>
        </li>
      </div>
    </div>
  );
}

export default Nav;
