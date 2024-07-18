// Header.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="name">Brendan Smull's Portfolio</div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/about" activeClassName="active">
              {" "}
              About
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/projects" activeClassName="active">
              {" "}
              Project History
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/resume" activeClassName="active">
              {" "}
              Resume
            </NavLink>
          </li>
          |
          <li>
            <NavLink to="/admin" activeClassName="active">
              {" "}
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
