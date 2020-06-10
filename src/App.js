import React from "react";
import "./App.css";
import portfolio from "./portfolio_img.jpg";

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
      <div className="About-me"></div>
    </div>
  );
}

export default App;
