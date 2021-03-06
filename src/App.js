import React from "react";
import "./App.css";
import Nav from "./Nav";
import Intro from "./Intro.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./ContactMe";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="Content">
        <Intro />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
