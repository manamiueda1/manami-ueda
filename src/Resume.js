import React from "react";
import "./App.css";
// import resumeImg from "./images/Manami_Ueda_Resume.png";
import resumePdf from "./images/Manami_Ueda_Resume_website.pdf";
function Resume() {
  return (
    <div id="Resume">
      <h1>Resume</h1>
      <div class="Bar"></div>
      {/* <img src={resumeImg} alt="resume" className="ResumeImg"></img> */}
      <div className="Resume-link">
        <a href={resumePdf} target="_blank" className="Try-demo" type="button">
          View Resume
        </a>
        <a
          href={resumePdf}
          download
          target="_blank"
          className="View-code"
          type="button"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
