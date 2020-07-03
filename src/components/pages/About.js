import React from "react";
import NavTabs from "../NavTabs"
import "../css/styles.css"


function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 home">
          <h1>About Page</h1>
          <p>
            I am a full stack web developer, continually learning and building
            my skills on both the front-end and back-end. I also
            have a background in product line management, customer service,
            leadership, visual merchandising, and sales. My educational
            background consists of a Certificate in full stack web development
            from UNC Charlotte and a Bachelor’s of Science degree in Exercise
            Science. I am an effective communicator with exceptional capability
            in attention to detail and passionate about engaging my audience by
            creating a positive user experience that is impactful and user
            friendly.
          </p>
          <p>
            My goal as a web developer is to build new apps, improve current
            apps, and continually learn and implement new skills to become more
            well-rounded as a developer. I am excited to leverage my skills in
            both web development and customer service, in order to cultivate
            quality web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
