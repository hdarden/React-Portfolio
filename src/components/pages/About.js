import React from "react";
import NavTabs from "../NavTabs"
import "../css/styles.css"
import FullSizeRender from "../img/FullSizeRender.jpeg"
import Portfolio from "../img/Portfolio Resume.pdf"


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
              my skills on both the front end and back end. I 
              have a background in product line management, customer service,
              leadership, visual merchandising, and sales. 
            </p>
            <p>
              My goal as a web developer is to apply my exceptional capability in attention to detail in order to build new apps, improve current
              apps, and continually learn and implement new skills to become more
              well-rounded as a developer. I am passionate about engaging my audience by
              creating a positive user experience that is impactful and user
              friendly. I am excited to leverage my skills in
              both web development and customer service, in order to cultivate
              quality web applications. 
            </p>
  <br></br>          
            <div>
              <a href={Portfolio} target="blank"><img src={FullSizeRender} className="headshot"  alt="headshot" />
            </a></div>
  <br></br> 
            <ul className="list-inline social-icons">
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/helendarden/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>                     
                <li className="list-inline-item"><a className="social-icon" href="https://github.com/hdarden" target="blank"><i className="fab fa-github"></i></a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
