import React, { useState } from "react";

function EditSkills() {
  const [skillType, setSkillType] = useState("Lang");
  const [skillName, setSkillName] = useState("");
  const [deleteSkillName, setDeleteSkillName] = useState("");
  const [message, setMessage] = useState("");

  // API key
  const apiKey = process.env.React_App_Api_Key;

  const handleAddSkill = async () => {
    const response = await fetch("http://" + process.env.React_App_IP + ":5000/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,  // Include the API key here
      },
      body: JSON.stringify({ typ: skillType, skill: skillName }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleDeleteSkill = async () => {
    const response = await fetch("http://" + process.env.React_App_IP + ":5000/api/skills/${deleteSkillName}", {
      method: "DELETE",
      headers: {
        "x-api-key": apiKey,  // Include the API key here
      },
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="edit-section">
      <h3>Add New Skill</h3>
      <select value={skillType} onChange={(e) => setSkillType(e.target.value)}>
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

      <p>{message}</p>
    </div>
  );
}

export default EditSkills;
