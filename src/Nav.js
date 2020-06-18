import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <a href="#Intro">
        <h1 className="Mu">MU</h1>
      </a>
      <div className="Nav-links">
        <li>
          <a class="border" href="#About-me">
            About Me
          </a>
        </li>
        <li>
          <a class="border" href="#Projects">
            Projects
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
      </div>
    </div>
  );
}

export default Nav;
