import React from "react";
import "./Pages.css";
import smullbwPicture from "../images/smullbwPicture.jpg";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to my personal website!</h1>
      <p>
        Here you'll find everything you need to know about me, my journey in
        computer science, and the projects I've been involved in.
      </p>
      <p>
        <strong>Home:</strong>
      </p>
      <p className="custom-p">
        This is the landing page, your gateway to exploring my professional
        journey. Feel free to navigate through the various sections to learn
        more about my background, projects, and how to get in touch with me.
      </p>
      <p>
        <strong>About:</strong>
      </p>
      <p className="custom-p">
        Curious about my journey in computer science? The About page provides a
        detailed overview of my education, including my degrees and any relevant
        certifications, as well as my professional experience. From internships
        to full-time positions, this page sheds light on my career trajectory
        and the skills I've developed along the way.
      </p>
      <p>
        <strong>Project History:</strong>
      </p>
      <p className="custom-p">
        Explore the Project History page to delve into the various projects I've
        undertaken. From software development to machine learning applications,
        each project showcases my technical expertise and problem-solving
        abilities. Detailed descriptions and, where possible, links to demos or
        repositories will give you a deeper understanding of my work.
      </p>
      <p>
        <strong>Resume:</strong>
      </p>
      <p className="custom-p">
        Looking for a concise overview of my skills and experiences? The Resume
        page features my official resume, highlighting key accomplishments,
        technical proficiencies, and educational background. Whether you're a
        recruiter or a potential collaborator, this page provides a quick
        snapshot of what I bring to the table.
      </p>
      <p>
        <strong>Contact:</strong>
      </p>
      <p className="custom-p">
        Ready to reach out? The Contact page is your one-stop destination for
        getting in touch with me. From LinkedIn to GitHub, you'll find links to
        my social media profiles, along with my preferred methods of contact.
        Additionally, you can check my availability for new opportunities or
        collaboration projects.
      </p>
      <p>
        Thank you for visiting my website! I hope you find it informative and
        engaging. If you have any questions or would like to connect, don't
        hesitate to reach out. Let's collaborate and innovate together!
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <img
          src={smullbwPicture}
          alt="If not loading, something must be wrong"
          className="styled-image"
        />
        <p>-Brendan Smull 2021</p>
      </div>
    </div>
  );
}

export default Home;
