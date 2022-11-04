import React from "react";
import "./Nav.css";
import mu from "./images/mu.png";

function Nav() {
  return (
    <div className="Nav">
      {/* <a href="#Intro">
        <img src={mu} className="Mu" alt="mu"></img>
      </a> */}

      <a class="Logo" href="#Intro">
        M
      </a>

      <ul className="menu">
        <li>
          <a class="border" href="#About-me">
            About Me
          </a>
        </li>
        <li>
          <a class="border" href="#Projects">
            Experience
          </a>
        </li>

        <li>
          <a class="border" href="#Resume">
            Resume
          </a>
        </li>
        <li>
          <a class="border" href="#Contact-me">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
