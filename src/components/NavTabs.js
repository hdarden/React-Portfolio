import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
  
  <div className="sidNav">
      <a className="navbar-brand  text-white" href="/">Helen Darden</a>
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className={location.pathname === "/" ? "nav-link  text-white" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/education"
              className={location.pathname === "/education" ? "nav-link  text-white" : "nav-link"}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/project"
              className={location.pathname === "/project" ? "nav-link  text-white" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/skills"
              className={location.pathname === "/skills" ? "nav-link  text-white" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link  text-white" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
  </div>
  );
}

export default NavTabs;
