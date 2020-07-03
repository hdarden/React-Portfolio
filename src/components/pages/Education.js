import React from "react";
import NavTabs from "../NavTabs"
import "../css/styles.css"

function Education() {
  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 about-content">
      <h1>Education</h1>
      <h3>University of North Carolina at Charlotte</h3>
      <h5>
       Full Stack Web Development
      </h5>
      <br></br>
      <h3>Gardner-Webb University</h3>
      <h5>Bachelor of Science</h5>
      <ul>
        <li>
          <strong>Major:</strong> Exercise Science; 
          <br></br>Preventative and Rehabilitative Health Science
        </li>
        <li>
          <strong>GPA:</strong> 3.35
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Education;
