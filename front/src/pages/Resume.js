import React from "react";

function Resume() {
  const resumeLink =
    "https://docs.google.com/document/d/1jDJL7aVs3eX0MU5-y0ksr7rpGIBrQbAWhUDN_iyzsfU/edit?usp=sharing";

  return (
    <div className="page-container">
      <h1>Current Resume Version</h1>
      <div style={{ textAlign: "center" }}>
        <iframe
          src={resumeLink}
          width="900"
          height="1058"
          style={{ border: "none", overflow: "hidden" }}
          embedded="true"
          title="Embedded Google Document"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
