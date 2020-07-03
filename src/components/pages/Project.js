import React from "react";
import NavTabs from "../NavTabs";
import "../css/styles.css";

function Project() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sideNav">
          <NavTabs />
        </div>
        <div className="col-md-10 project">
          
          <h1>Projects</h1>
          <p>
            INTown is a multi-page app that allows users from Charlotte explore
            different events, outdoor areas, popular places, and restaurants in
            their selected neighborhood. School Spot uses both front-end and
            back-end technology to cultivate a user experience that stores
            information within a MySQL database. The app allows teachers to post
            assignments and grades and students to keep track of assignment due
            dates and course grades.
          </p>
          </div>
         {/*  <div className="row">
            <div className="col-md-4">
              <a href={`https://hdarden.github.io/INTown/`} target="blank">
                <img src={`./assets/img/F9749EA8-F884-4019-9E74-06F6AFF29217_1_105_c.jpeg`} className="card-img rounded-0" alt="Project 1 img--INTown">
            </a>
              <a href={"https://github.com/hdarden/INTown"} target="blank"><h4>INTown Repo</h4></a>
          </div>
          <div className="col-md-4">
              <a href="https://fast-beach-51043.herokuapp.com/" target="blank">
                <img src="./assets/img/50C6DB0C-FFAE-4748-9457-069AD94477FC_1_201_a.jpeg" className="card-img rounded-0" alt="Project 2 School Spot">
            </a>
              <a href="https://github.com/hdarden/School-Spot" target="blank"><h4>School Spot Repo</h4></a>
          </div>
          <div className="col-md-4">
            <a href="https://arcane-wave-65165.herokuapp.com/" target="blank">
              <img src="./assets/img/77C7FF12-F910-4C62-95A0-9B6EF434A5AA_1_105_c.jpeg" className="card-img rounded-0" alt="First full stack web app--burger Logger">
            </a>
            <a href="https://github.com/hdarden/Burger-Logger" target="blank"><h4>Burger Logger Repo</h4></a>
          </div>
          </div> */}
        
      </div>
    </div>
  );
}

export default Project;
