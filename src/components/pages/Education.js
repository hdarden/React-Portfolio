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
          <h3>University of North Carolina at Charlotte</h3>
          <h5>Certificate</h5>
          <h5>Full Stack Web Development</h5>
          <br></br>
          <br></br>
          <h3>Gardner-Webb University</h3>
          <h5>Bachelor of Science</h5>
          <h5>Exercise Science: Preventative and Rehabilitative Health Science</h5>
          <h6><strong>GPA:</strong> 3.35</h6>
        </div>
      </div>
    </div>
  );
}

export default Education;
