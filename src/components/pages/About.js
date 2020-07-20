import React from "react";
import NavTabs from "../NavTabs";
import "../css/styles.css";
import FullSizeRender from "../img/FullSizeRender.jpeg";


function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 home">
          <h1>About</h1>
          <p>
            I am a full stack web developer, continually learning and building
            my skills on both the front end and back end. I have a background in
            product line management, customer service, leadership, visual
            merchandising, and sales.
          </p>
          <p>
            My goal as a web developer is to apply my exceptional capability in
            attention to detail in order to build new apps, improve current
            apps, and continually learn and implement new skills to become more
            well-rounded as a developer. I am passionate about engaging my
            audience by creating a positive user experience that is impactful
            and user friendly. I am excited to leverage my skills in both web
            development and customer service, in order to cultivate quality web
            applications.
          </p>
          <br></br>
          <div>
            <a href="https://docs.google.com/document/d/1mX9wBoz-1rJdzUdvD0JGe3VE9UEtcpJqsiOjiQA6bo0/edit?usp=sharing" target="blank">
              <img src={FullSizeRender} className="headshot" alt="headshot" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
