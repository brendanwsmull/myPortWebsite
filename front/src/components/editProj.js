import React, { useState } from "react";

function EditProj() {
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
  const [message, setMessage] = useState("");

  const handleAddProject = async () => {
    const response = await fetch("localhost:5000/api/projects", {
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
    const response = await fetch(`localhost/api/projects/${deleteTitle}`, {
      method: "DELETE",
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="edit-section">
      <h3>Add New Project</h3>
      <input
        type="text"
        placeholder="Title"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Summery"
        value={newProject.summery}
        onChange={(e) => setNewProject({ ...newProject, summery: e.target.value })}
      />
      <input
        type="text"
        placeholder="B1"
        value={newProject.b1}
        onChange={(e) => setNewProject({ ...newProject, b1: e.target.value })}
      />
      <input
        type="text"
        placeholder="B2"
        value={newProject.b2}
        onChange={(e) => setNewProject({ ...newProject, b2: e.target.value })}
      />
      <input
        type="text"
        placeholder="B3"
        value={newProject.b3}
        onChange={(e) => setNewProject({ ...newProject, b3: e.target.value })}
      />
      <input
        type="text"
        placeholder="B4"
        value={newProject.b4}
        onChange={(e) => setNewProject({ ...newProject, b4: e.target.value })}
      />
      <input
        type="text"
        placeholder="B5"
        value={newProject.b5}
        onChange={(e) => setNewProject({ ...newProject, b5: e.target.value })}
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

      <p>{message}</p>
    </div>
  );
}

export default EditProj;
