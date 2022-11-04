import React from "react";
import "./App.css";
import openfinImage from './images/openfin-img.png'
import CCFL from './images/CCFL.png'
import nebulaAcademy from './images/nebula-academy.png'

function Projects() {
  return (
    <div id="Projects">
      <h1 className="professional-experience">Professional Eperience</h1>
      <div class="Bar"></div>

      <div className="FitMinded">
        <h2>OpenFin</h2>
        <h3>Software Engineer</h3>
        <h4 className='date'>November 2021 - Present</h4>

        <div className="fit">
          <div class="fit-images">
            <img src={openfinImage} className="openFinImage" alt="openFinImage"></img>
          </div>
          <p>
            Move Fast. Break Nothing. OpenFin is the operating system for enterprise productivity, enabling app distribution, workspace management and workflow automation. Used by 90% of global financial institutions, OpenFin deploys more than 3,500 desktop applications to more than 2,400 buy-side and sell-side firms. OpenFin investors include Bain Capital Ventures, Barclays, CME Ventures, DRW Venture Capital, HSBC, ING Ventures, J.P. Morgan, NYCA Partners, Pivot Investment Partners, Standard Chartered and Wells Fargo Strategic Capital among others. The company is based in New York with offices in London and presence in Hong Kong.
            <br></br><br></br>
            <h4>Technologies</h4>
            <div class="Short-bar"></div>
            <br></br>
            TypeScript, React.js, Redux.js, Node.js, Styled-Componenets, Storybook
          </p>
          <div className="buttons">
            <a
              href="https://www.openfin.co/"
              target="_blank"
              className="Try-demo"
              type="button"
            >
              Website
            </a>
          </div>
        </div>
      </div>

      <div className="Image-to-voice">
        <h2>Coding Career Fastlane</h2>
        <h3>Software Engineer</h3>
        <h4 className='date'>June 2021 - December 2021</h4>

        <div className="imageTo">
          <img src={CCFL} className="imageMac" alt="imageMac"></img>

          <p>
            Coding Career Fastlane is a coaching platform that helps recent coding cootcamp grads find their first Software Engineering job. 
            <br></br><br></br>
            <h4>Technologies Used</h4>
            <div class="Short-bar"></div>
            <br></br>
            JavaScript, React.js, Tailwind, Firebase (Database)
          </p>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/company/coding-career-fast-lane/about/"
              target="_blank"
              className="Try-demo"
              type="button"
            >
              Website
            </a>
          </div>
        </div>
      </div>
      <div className="Car-ify">
        <h2>Nebula Academy</h2>
        <h3>Software Engineer and Instructor</h3>
        <h4 className='date'>September 2020 - May 2021</h4>

        <div className="Carify">
          <img src={nebulaAcademy} className="carImage" alt="carImage"></img>

          <p>
            Nebula Academy’s mission is to use cognitive learning and coaching models to create positive outcomes across education and professional development communities, where technology is used as a tool for supporting productive and engaging learning experiences. Founded in 2015 and based in Cold Spring Harbor, New York, Nebula Academy, a DBA of LC Consulting, specializes in Coaching, Professional Development, Team Building and Collaboration both in person and online. We pride ourselves on the technology platforms we choose to teach and utilize within our everyday business. In order to model and teach how technology increases potential and productivity, we must understand it in real-world applications. 
            <br></br><br></br>
            <h4>Technologies Used</h4>
            <div class="Short-bar"></div>
            <br></br>
            JavaScript, React.js, Redux.js, Node.js, Express, Sequelize,
            PostgreSQL
          </p>
          <div className="buttons">
            <a
              href="https://www.nebulaacademy.com/"
              target="_blank"
              className="Try-demo"
              type="button"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
