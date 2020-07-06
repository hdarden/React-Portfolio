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
            <strong><span onClick={("https://hdarden.github.io/INTown/")}>INTown</span></strong> is a front end web app that allows users from Charlotte, NC to explore
            different events, outdoor areas, popular places, and restaurants in
            their selected neighborhood. Google Maps and Ticketmaster APIs are implemented in into the app in order to request criteria for specific neighborhoods and deliver
            the informationto the user.
            </p>
            <p><strong>School Spot</strong> utilizes both front-end and
            back-end technology to cultivate a user experience that stores
            information within a MySQL database. The app allows teachers to post
            assignments and grades and students to keep track of assignments, due
            dates, and grades.
          </p>
          <p>
            <strong>Schedule-Me</strong> is a React.js web app that allows the user to login in and schedule appointments.
            Schedule-Me allows clients to view, request, and confirm appointments by viewing availability of a given business or contractor.
            
          </p>
          <p>
            <strong>The Burger Logger</strong> represents my first full stack web app. It implements MySQL, Express, Handlebars, and a homemade ORM
          to allow the user to create a burger, add it the the burger logger, and choose a burger to devour.
          </p>
          <p>
            <strong>Team Profile Generator</strong> is a Node CLI that uses npm inquirer to take in information about 
            employees and uses npm fs to generate an HTML webpage that displays summaries for each person. This Node CLI 
            includes unit tests in order to build better program design of the Team Profile Generator.
          </p>
          <p>
            <strong>another app</strong>
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
          </div> 
          https://drive.google.com/file/d/1lV3s5tGY8JhTBoKPVKqUBlXtbRL_qv6c/view?usp=sharing›
          */}
        
      </div>
    </div>
  );
}

export default Project;
