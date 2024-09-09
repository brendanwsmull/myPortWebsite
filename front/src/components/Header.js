import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header>
      <NavLink exact to="/" className="name">
        Brendan Smull's Portfolio
      </NavLink>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav ref={menuRef} className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Project History
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeClassName="active">
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
