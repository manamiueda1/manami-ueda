import React from "react";
import "./App.css";
import portfolio from "./portfolio_img.jpg";
import Nav from "./Nav";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <h1
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         MANAMI <br></br> UEDA
  //       </h1>
  //     </header>
  //   </div>
  // );
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
        <p>
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
        </p>
      </div>
      <div className="Projects">
        <h1>Projects</h1>
        <h2>Fit-Minded</h2>
        <h2>Image-to-Voice</h2>
        <h2>Car-Ify</h2>
      </div>

      <div className="Resume">
        <h1>Resume</h1>
      </div>
      <div className="Contact-Me">
        <h1>Contact Me!</h1>
      </div>

      <div className="Tech-stack">
        <h1>Technologies I've used</h1>
      </div>
    </div>
  );
}

export default App;
