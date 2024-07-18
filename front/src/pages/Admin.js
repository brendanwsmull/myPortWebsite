import React, { useState } from "react";
import "./Admin.css"; // Import the CSS file

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isIn, setIsIn] = useState(false);
  const [editVisible, setEditVisible] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    summery: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
  });
  const [deleteTitle, setDeleteTitle] = useState("");
  const [skillType, setSkillType] = useState("Lang");
  const [skillName, setSkillName] = useState("");
  const [deleteSkillName, setDeleteSkillName] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setMessage(data.message);
    if (data.message === "Login successful") setIsIn(true);
  };

  const handleAddProject = async () => {
    const response = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleDeleteProject = async () => {
    const response = await fetch(
      `http://localhost:5000/api/projects/${deleteTitle}`,
      {
        method: "DELETE",
      },
    );

    const data = await response.json();
    setMessage(data.message);
  };

  const handleAddSkill = async () => {
    const response = await fetch("http://localhost:5000/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ typ: skillType, skill: skillName }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleDeleteSkill = async () => {
    const response = await fetch(
      `http://localhost:5000/api/skills/${deleteSkillName}`,
      {
        method: "DELETE",
      },
    );

    const data = await response.json();
    setMessage(data.message);
  };

  const toggleEditVisibility = (section) => {
    setEditVisible(editVisible === section ? null : section);
  };

  return (
    <div className="page-container">
      <h1>Welcome to the Admin Page</h1>
      {!isIn && (
        <>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>{message}</p>
        </>
      )}

      {isIn && (
        <div>
          <h2
            className="edit-title"
            onClick={() => toggleEditVisibility("projects")}
          >
            <span
              className={`toggle-button ${editVisible === "projects" ? "open" : "closed"}`}
            />
            Edit Projects
          </h2>
          {editVisible === "projects" && (
            <div className="edit-section">
              <h3>Add New Project</h3>
              <input
                type="text"
                placeholder="Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Summery"
                value={newProject.summery}
                onChange={(e) =>
                  setNewProject({ ...newProject, summery: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="B1"
                value={newProject.b1}
                onChange={(e) =>
                  setNewProject({ ...newProject, b1: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="B2"
                value={newProject.b2}
                onChange={(e) =>
                  setNewProject({ ...newProject, b2: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="B3"
                value={newProject.b3}
                onChange={(e) =>
                  setNewProject({ ...newProject, b3: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="B4"
                value={newProject.b4}
                onChange={(e) =>
                  setNewProject({ ...newProject, b4: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="B5"
                value={newProject.b5}
                onChange={(e) =>
                  setNewProject({ ...newProject, b5: e.target.value })
                }
              />
              <button onClick={handleAddProject}>Add Project</button>

              <h3>Delete Project</h3>
              <input
                type="text"
                placeholder="Title"
                value={deleteTitle}
                onChange={(e) => setDeleteTitle(e.target.value)}
              />
              <button onClick={handleDeleteProject}>Delete Project</button>
            </div>
          )}
          <h2
            className="edit-title"
            onClick={() => toggleEditVisibility("skills")}
          >
            <span
              className={`toggle-button ${editVisible === "skills" ? "open" : "closed"}`}
            />
            Edit Skills
          </h2>
          {editVisible === "skills" && (
            <div className="edit-section">
              <h3>Add New Skill</h3>
              <select
                value={skillType}
                onChange={(e) => setSkillType(e.target.value)}
              >
                <option value="Lang">Language</option>
                <option value="Lib">Library</option>
              </select>
              <input
                type="text"
                placeholder="Skill"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
              <button onClick={handleAddSkill}>Add Skill</button>

              <h3>Delete Skill</h3>
              <input
                type="text"
                placeholder="Skill"
                value={deleteSkillName}
                onChange={(e) => setDeleteSkillName(e.target.value)}
              />
              <button onClick={handleDeleteSkill}>Delete Skill</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
