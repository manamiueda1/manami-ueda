import React from "react";
import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro.js";
import AboutMe from "./AboutMe.js";

import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="Content">
        <Intro />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
