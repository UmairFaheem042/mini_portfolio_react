import React from "react";
import experience from "../db/experience";
import Project from "./Project";

const Skills = () => {
  return (
    <div className="projects">
      <h3>Skills</h3>
      <div className="project-container">
        {/* {experience.map((experience) => (
          <Project properties={experience} />
        ))} */}
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
