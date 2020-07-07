import React from "react";
import NavTabs from "../NavTabs";
import Portfolio from "../img/Portfolio Resume.pdf";
import "../css/styles.css";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 contact">
          <h1>Contact</h1>
          <p>Helen Darden</p>
          <p>Charlotte, NC</p>
          <p>(704)-999-4889</p>
          <p>
            <a href="mailto:hgdarden@gmail.com">hgdarden@gmail.com</a>
          </p>
          <p>
            <a href={Portfolio} target="blank">Resume
            </a>
          </p>
          <ul className="list-inline social-icons">
                <li className="list-inline-item"><a className="social-icon" href="https://www.linkedin.com/in/helendarden/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>                     
                <li className="list-inline-item"><a className="social-icon" href="https://github.com/hdarden" target="blank"><i className="fab fa-github"></i></a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
