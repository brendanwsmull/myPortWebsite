import React, { useState } from "react";
import "./Admin.css";
import EditProj from "../components/editProj";
import EditSkills from "../components/editSkills";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isIn, setIsIn] = useState(false);
  const [editVisible, setEditVisible] = useState(null);

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
          <h2 className="edit-title" onClick={() => toggleEditVisibility("projects")}>
            <span className={`toggle-button ${editVisible === "projects" ? "open" : "closed"}`} />
            Edit Projects
          </h2>
          {editVisible === "projects" && <EditProj />}

          <h2 className="edit-title" onClick={() => toggleEditVisibility("skills")}>
            <span className={`toggle-button ${editVisible === "skills" ? "open" : "closed"}`} />
            Edit Skills
          </h2>
          {editVisible === "skills" && <EditSkills />}
        </div>
      )}
    </div>
  );
}

export default Admin;
