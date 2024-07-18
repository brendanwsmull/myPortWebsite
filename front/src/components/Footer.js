// add footer here
// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Brendan Smull. All rights reserved.
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/brendan-smull-362858256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/brendanwsmull"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/brendan_smull/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:brendanwsmull@gmail.com">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
