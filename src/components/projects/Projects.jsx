import React from "react";
import Project from "../project/Project";
import "./projects.css";
import data from "../../update";
export default function Projects() {
  return (
    <div className="projects">
      {data.map((project) => (
        <Project img={project.img} title={project.title} text={project.text} />
      ))}
    </div>
  );
}
