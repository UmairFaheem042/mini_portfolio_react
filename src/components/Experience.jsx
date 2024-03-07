import React from "react";
import Project from "./Project";
import experience from "../db/experience";

const Experience = () => {
  return (
    <div className="projects">
      <h3>Work Experience</h3>
      <div className="project-container">
        {experience.map((experience) => (
          <Project key={experience.id} properties={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
