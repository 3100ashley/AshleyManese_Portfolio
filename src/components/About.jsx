import React from "react";
import "../css/About.css";
import Profile from "../images/ashley_manese.JPEG";
import Item from "../components/Item";

function About() {
  const languageItems = [
    { text: "Javascript" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "Node.js" },
    { text: "React.js" },
    { text: "React Native" },
    { text: "Next.js" },
    { text: "Java" },
    { text: "Typescript" },
    { text: "Go" },
  ];
  const databaseItems = [
    { text: "MySQL" },
    { text: "MongoDB" },
    { text: "Firebase" },
  ];
  const otherItems = [
    { text: "git" },
    { text: "npm" },
    { text: "Canva" },
    { text: "Chrome DevTools" },
    { text: "Jira" },
    { text: "board games" },
    { text: "cooking" },
    { text: "painting" },
  ];
  return (
    <div id="about" className="about-container">
      <div className="about-container-content">
        <h1>Hello World</h1>
        <p>
          Computer Science student at California State University, Los Angeles
          with experience in software development. Recently completed a program
          called, Snap Engineering Academy and honing skills in web development.
          I'm interested in becoming a full stack engineer and in the future
          create products that help educate K-12 students with computer science.
        </p>
        <div>
          <h3>Languages</h3>
          <div className="about-items-container">
            {languageItems.map((p) => (
              <Item key={p.text} text={p.text}></Item>
            ))}
          </div>
        </div>
        <div>
          <h3>Databases</h3>
          <div className="about-items-container">
            {databaseItems.map((p) => (
              <Item key={p.text} text={p.text}></Item>
            ))}
          </div>
        </div>
        <div>
          <h3>Other</h3>
          <div className="about-items-container">
            {otherItems.map((p) => (
              <Item key={p.text} text={p.text}></Item>
            ))}
          </div>
        </div>
      </div>
      <img src={Profile} alt="profile" className="profile-img"/>
    </div>
  );
}

export default About;
