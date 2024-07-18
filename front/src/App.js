// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Resume from "./pages/Resume";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
