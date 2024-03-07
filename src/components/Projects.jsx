import React from "react";
import Project from "./Project";
import projects from "../db/db";

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="project-container">
        {projects.map((project) => (
          <Project key={project.id} properties={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
