import React from "react";
import "../css/ProjectContainer.css";
import ProjectCard from "./ProjectCard";
import SnapchatAcademyLogo from "../images/SnapchatAcademyLogo.svg";
import MarkMyWords from "../images/mark-my-words-icon.svg";
import PocketCoach from "../images/pocket-coach-logo.svg";
import NaurtoFilter from "../images/camera.svg";
import Cards from "../images/cards.svg";
import Timer from "../images/timer.svg";
function ProjectContainer() {
  const cards = [
    {
      src: `${SnapchatAcademyLogo}`,
      alt: 'Snapchat Academy Logo',
      title: 'SnapLOVE',
      href:'https://github.com/sugarfig/SnapLove',
      description: 'The goal of this feature is to help promote a social change. It addresses the lack of representation and inclusivity of BIPOC LGBTQ+ individuals. SnapLOVE is a Snap layer in Snap Map that allows its users to find resources and opportunities in their area.'
    },
    {
      src: `${MarkMyWords}`,
      alt: 'Mark My Words Logo',
      title: 'Mark My Words',
      href:'https://github.com/3100ashley/CS4540-Collab',
      description: 'Mark My Words is a Mozilla browser extension that allows users to highlight text and take notes as they read. All highlighted text and notes will be saved to the web page or PDF. '
    },
    {
      src: `${NaurtoFilter}`,
      alt: 'Camera Logo',
      title: 'Naurto Filter',
      href:'https://github.com/3100ashley/naruto-snap-lens--ml5',
      description: 'Developed a Naurto based filter using p5.js and ml5.js. Using event logic to add in a new drawing. The Naurto head band will appear at all times. When the user smile whiskers will appear.'
    },
    {
      src: `${PocketCoach}`,
      alt: 'Pocket Coach Logo',
      title: 'Pocket Coach',
      href:'https://csb-x4yhom.netlify.app/',
      description: 'Worked with a team of engineers to build a prototype mobile application with React.js to help users be motivated to exercise and workout more.'
    },
    {
      src: `${Timer}`,
      alt: 'Timer Logo',
      title: 'Pomodoro Timer',
      href:'https://github.com/3100ashley/pomodoro',
      description: 'Created a time management timer using React.js to promote productivity.'
    },
    {
      src: `${Cards}`,
      alt: 'Cards Logo',
      title: 'Memory Game',
      href:'https://github.com/3100ashley/memory-game',
      description: 'Developed and published  a responsive and interactive game using HTML, CSS, and JavaScript on Github Pages.'
    },
  ]
  return (
    <div id="projects" className="project-container">
      <h1>Projects</h1>
      <div className="project-cards">
        {cards.map((props) => (
          <ProjectCard key={props.title} {...props}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
