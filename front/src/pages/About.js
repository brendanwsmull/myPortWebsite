import React, { useEffect, useState } from "react";
import "./About.css"; // Import the CSS file

function About() {
  const [skills, setSkills] = useState({ languages: [], libraries: [] });

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((response) => response.json())
      .then((data) => {
        const languages = data.filter((skill) => skill.typ === "Lang");
        const libraries = data.filter((skill) => skill.typ === "Lib");
        setSkills({ languages, libraries });
      })
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div className="page-container">
      <h1>Learning More About Me</h1>
      <p>
        <h3>Introduction:</h3>
      </p>
      <p className="custom-p">
        Hello! My name is Brendan Smull, and I am currently a student at
        Appalachian State University with a deep enthusiasm for the field of
        Computer Science. My academic journey is driven by a passion for both
        web development and software engineering, where I aspire to make
        meaningful contributions to the technology landscape.
      </p>
      <p className="custom-p">
        My journey into computer science began in an unexpected way. The hit
        game Elder Scrolls V: Skyrim sparked my interest and ignited a totally
        healthy addiction to gaming. This fascination soon extended beyond
        gameplay as I delved into the world of mods, which introduced me to the
        basics of coding. This initial exposure to programming fueled my desire
        to understand the underlying mechanisms of software and web
        technologies, ultimately guiding me to pursue a degree in Computer
        Science at Appalachian State University. Here, I am dedicated to honing
        my skills and knowledge, preparing myself for a successful career in
        this dynamic and ever-evolving field.
      </p>
      <p>
        <h3>Education:</h3>
      </p>
      <div className="custom-p">
        <p>
          B.S. in Computer Science (still in school):
          <ul className="custom-bullets">
            <li>Appalachian State University - Boone, North Carolina</li>
            <li>GPA: 3.43</li>
            <li>Aug. 2021 - May 2025</li>
          </ul>
        </p>
      </div>
      {/* <p>
        <h3>Skills:</h3>
      </p> */}
      <div className="skills-container">
        <div className="skills-group">
          <h3>Languages</h3>
          <ul className="skills-grid">
            {skills.languages.length > 0 ? (
              skills.languages.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill.skill}
                </li>
              ))
            ) : (
              <p>No languages found.</p>
            )}
          </ul>
        </div>
        <div className="skills-group">
          <h3>Libraries</h3>
          <ul className="skills-grid">
            {skills.libraries.length > 0 ? (
              skills.libraries.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill.skill}
                </li>
              ))
            ) : (
              <p>No libraries found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
