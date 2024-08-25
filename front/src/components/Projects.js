import React, { useState } from "react";
import "./Projects.css"; // Import the CSS file

const Projects = ({ projects }) => {  // Receive projects as a prop
  const [visibleProjects, setVisibleProjects] = useState({});

  const toggleVisibility = (index) => {
    setVisibleProjects((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <p className="project-title" onClick={() => toggleVisibility(index)}>
            <span
              className={`toggle-button ${visibleProjects[index] ? "open" : "closed"}`}
            />
            <b>{project.title}</b>
          </p>
          {visibleProjects[index] && (
            <>
              <p>{project.summery}</p>
              <ul>
                {project.b1 && project.b1 !== "NaN" && <li>{project.b1}</li>}
                {project.b2 && project.b2 !== "NaN" && <li>{project.b2}</li>}
                {project.b3 && project.b3 !== "NaN" && <li>{project.b3}</li>}
                {project.b4 && project.b4 !== "NaN" && <li>{project.b4}</li>}
                {project.b5 && project.b5 !== "NaN" && <li>{project.b5}</li>}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
