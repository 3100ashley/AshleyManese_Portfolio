import React from "react";
import "../css/ExperienceContainer.css";
import Card from "react-bootstrap/Card";
import USU from "../images/USULogo.svg";
import SnapLogo from "../images/SnapchatLogo.svg";
import SnapAcademyLogo from "../images/SnapchatAcademyLogo.svg";
import DFSLogo from "../images/DFSLogo.svg";

function ExperienceContainer() {
  return (
    <div id="experience" className="experience-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9DFDC"
          fill-opacity="1"
          d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="experience-content">
        <h1>Experience</h1>
        <div className="cards">
          <Card className="card-container">
            <Card.Img className="card-image" variant="top" src={USU} />
            <Card.Body>
              <Card.Title>Junior Web Developer</Card.Title>
              <p>CSULA University Student Union: Graffix</p>
              <p>September 2021 - Present</p>
              <Card.Text>
                <ul>
                  <li>
                    Updating the student union website with current information
                    and fixing legacy code accessibility issues
                  </li>
                  <li>
                    Assisting in planning the transition of the existing
                    technology stack to use the Next.js framework
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-container">
            <Card.Img className="card-image" variant="top" src={SnapLogo} />
            <Card.Body>
              <Card.Title>Software Engineer Intern</Card.Title>
              <p>Snap Inc.</p>
              <p>May 2022 - August 2022</p>
              <Card.Text>
                <ul>
                  <li>
                    Enhanced an internal tool’s UI to increase user autonomy and
                    efficiencies across teams by removing and reordering columns
                  </li>
                  <li>
                    Increased code coverage 5% by building production level unit
                    tests
                  </li>
                  <li>
                    Worked in a team to build a utility within an internal tool
                    to provide/deny access to users based on their role by
                    building its service layer
                  </li>
                  <li>
                    Mentored a Snap scholar by guiding them through mock
                    technical and behavior interviews. As well as reviewing
                    resumes and portfolios.
                  </li>
                </ul>
      
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-container">
            <Card.Img className="card-image" variant="top" src={DFSLogo} />
            <Card.Body>
              <Card.Title>STEM Instructor/Mentor</Card.Title>
              <p>Dreams for Schools</p>
              <p>September 2021 - December 2021</p>
              <Card.Text>
                <ul>
                  <li>
                    Develop curriculum to guide over 17 elementary schools
                    students with game development using Scratch
                  </li>
                  <li>
                    Responsibilities include organizing various STEM-related
                    activities, such as building a basic application, to teach
                    computer science fundamentals and cultivate curiosity
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-container">
            <Card.Img
              className="card-image"
              variant="top"
              src={SnapAcademyLogo}
            />
            <Card.Body>
              <Card.Title>Snapchat Scholar</Card.Title>
              <p>Snap Engineering Academy</p>
              <p>June 2021 - August 2021</p>
              <Card.Text>
                <ul>
                  <li>
                    Worked in a cross-functional team to implement a mobile
                    prototype feature on SnapMaps, called SnapLOVE, to help
                    provide resources for the LGBTQIA+ community
                  </li>
                  <li>
                    Worked closely with the nonprofit, Outfest, as well as
                    Snapchat engineers, designers, and marketers
                  </li>
                  <li>Focused on creating a responsive front-end using React Native and sending  data to users using Firebase</li>
                </ul>
        
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f9dfdc"
          fill-opacity="1"
          d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,165.3C672,203,768,213,864,197.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
export default ExperienceContainer;
