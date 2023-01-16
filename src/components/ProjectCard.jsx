import React from "react";
import "../css/ProjectCard.css"

export default function ProjectCard(props) {
  return (
    <div className="project-card-container">
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
