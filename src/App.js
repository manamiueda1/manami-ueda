import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./portfolio_img.jpg";

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
      <header className="App-header">
        <h3>SOFTWARE ENGINEER, WEB DEVELOPER & YOGI</h3>
        <h1 className="Name">
          MANAMI <br></br> UEDA
        </h1>
        <img
          src="portfolio_img.jpg"
          alt="portfolio_shot"
          width="100"
          height="100"
        ></img>
      </header>
    </div>
  );
}

export default App;
