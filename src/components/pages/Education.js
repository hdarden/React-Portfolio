import React from "react";
import NavTabs from "../NavTabs";
import "../css/styles.css";

function Education() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 about-content">
          <h1>Education</h1>
          <h2>University of North Carolina at Charlotte</h2>
          <h4>Certificate</h4>
          <h4>Full Stack Web Development</h4>
          <br></br>
          <br></br>
          <h2>Gardner-Webb University</h2>
          <h4>Bachelor of Science</h4>
          <h4>Exercise Science: Preventative and Rehabilitative Health Science</h4>
          <h5><strong>GPA:</strong> 3.35</h5>
        </div>
      </div>
    </div>
  );
}

export default Education;
