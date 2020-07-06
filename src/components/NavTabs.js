import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/styles.css";

function NavTabs() {
  const location = useLocation();

  return (
  
  <div className="sidNav">
      <a className="navbar-brand" href="/">Helen Darden</a>
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className={location.pathname === "/" ? "nav-link" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/education"
              className={location.pathname === "/education" ? "nav-link" : "nav-link "}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/project"
              className={location.pathname === "/project" ? "nav-link" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/skills"
              className={location.pathname === "/skills" ? "nav-link" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
  </div>
  );
}

export default NavTabs;
