import React from "react";
import Projects from "../components/Projects";

function ProjectsPage({ projects }) {  // Receive projects as a prop
  return (
    <div className="page-container">
      <h1>Welcome to my Projects Page</h1>
      <p>
        Here you will find all of the projects that I have worked on and thought
        were worth displaying here. These projects include personal,
        professional, and just fun tasks that I've done. Any projects that are
        open source I will link the Git Repo to, but I apologize if some
        projects are not open source and thus am unable to link the code. Thank
        you for your time and if you have any questions about any of these
        projects, please feel free to contact me!
      </p>
      <Projects projects={projects} />  {/* Pass projects as prop */}
    </div>
  );
}

export default ProjectsPage;
