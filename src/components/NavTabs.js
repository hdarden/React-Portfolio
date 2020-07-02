import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
  
  <div className="sidNav">{/* /* "navbar navbar-expand-lg navbar-light bg-light"> */}
      <a className="navbar-brand" href="/">Helen Darden</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button> */}
      {/* <div class="collapse navbar-collapse" id="navbarNav"> */}
        <ul className="navbar-nav">
          <li className="nav-item active">
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/project"
              className={location.pathname === "/project" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
              <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      {/* </div> */}
  </div>

    /* <ul className="navbar navbar-expand-lg navbar-dark bg-dark">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project"
          className={location.pathname === "/project" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul> */
  );
}

export default NavTabs;
