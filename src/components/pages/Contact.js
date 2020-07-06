import React from "react";
import NavTabs from "../NavTabs"
import "../css/styles.css" 


function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 contact">
      <h1>Contact</h1>
      <p>
        Helen Darden
      </p>
      <p>
        Charlotte, NC
      </p>
      <p>
        (704)-999-4889
      </p>
      <p>
        <a href="mailto:hgdarden@gmail.com">hgdarden@gmail.com</a>
      </p>
      <p>

      </p>
    </div>
    </div>
    </div>
  );
}

export default Contact;
