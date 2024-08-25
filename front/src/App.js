// App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Resume from "./pages/Resume";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({ languages: [], libraries: [] });
  const apiKey = process.env.React_App_Api_Key;

  useEffect(() => {
    // Fetch projects once when the app loads
    fetch("http://" + process.env.React_App_IP + ":5000/api/projects", {
      headers: {
        "x-api-key": apiKey,  // Include the API key here
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data.reverse())) // Reverse the order of projects
      .catch((error) => console.error("Error fetching projects:", error));

    // Fetch skills once when the app loads
    fetch("http://" + process.env.React_App_IP + ":5000/api/skills", {
      headers: {
        "x-api-key": apiKey,  // Include the API key here
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const languages = data.filter((skill) => skill.typ === "Lang");
        const libraries = data.filter((skill) => skill.typ === "Lib");
        setSkills({ languages, libraries });
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, [apiKey]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About skills={skills} />} /> {/* Pass skills as prop */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectsPage projects={projects} />} /> {/* Pass projects as prop */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
