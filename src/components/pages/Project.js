import React from "react";
import NavTabs from "../NavTabs";
import "../css/styles.css";

const styles = {
  link: {
    color: "rgb(86, 96, 202)"
    
  }
}
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
            <a href="https://hdarden.github.io/INTown/" target="blank" alt="explore charlotte"><strong style={styles.link}>INTown</strong></a> is a front end web app that allows users from Charlotte, NC to explore
            different events, outdoor areas, popular places, and restaurants in
            their selected neighborhood. Google Maps and Ticketmaster APIs are implemented in into the app in order to request criteria for specific neighborhoods and deliver
            the informationto the user.
            </p>
            <p>
              <a href="https://fast-beach-51043.herokuapp.com/" target="blank" alt="assignment scheduler"><strong style={styles.link}>School Spot</strong></a> utilizes both front-end and
            back-end technology to cultivate a user experience that stores
            information within a MySQL database. The app allows teachers to post
            assignments and grades and students to keep track of assignments, due
            dates, and grades.
          </p>
          <p>
            <a href="https://github.com/ashleydeyoung/schedule-me" target="blank"><strong style={styles.link}>Schedule-Me</strong></a> is a React.js web app that allows the user to login in and schedule appointments.
            Schedule-Me allows clients to view, request, and confirm appointments by viewing availability of a given business or contractor.
            
          </p>
          <p>
            <a href="https://github.com/hdarden/Burger-Logger" target="blank" alt="burger log"><strong style={styles.link}>The Burger Logger</strong></a> represents my first full stack web app. It implements MySQL, Express, Handlebars, and a homemade ORM
          to allow the user to create a burger, add it the the burger logger, and choose a burger to devour.
          </p>
          <p>
            <a href="https://github.com/hdarden/Team-Profile-Gen" target="blank" alt="CLI employee DB"><strong style={styles.link}>Team Profile Generator</strong></a> is a Node CLI that uses npm inquirer to take in information about 
            employees and uses npm fs to generate an HTML webpage that displays summaries for each person. This Node CLI 
            includes unit tests in order to build better program design of the Team Profile Generator.
          </p>
          <p>
            <a href="https://hdarden.github.io/Weather-Dashboard/" target="blank"><strong style={styles.link}>Weather Dashboard</strong></a> utilizes the OpenWeather API to retrieve data for searched cites. This app features HTML and CSS that is 
            dynamically updated using jQuery.
          </p>
          </div>
      </div>
    </div>
  );
}

export default Project;
