import React from "react";
import NavTabs from "../NavTabs";
import "../css/styles.css";
import InTown from "../img/F9749EA8-F884-4019-9E74-06F6AFF29217_1_105_c.jpeg"
import SchoolSpot from "../img/50C6DB0C-FFAE-4748-9457-069AD94477FC_1_201_a.jpeg"
import ScheduleMe from "../img/3F433DBF-C089-4B85-933E-32AD8C43F3F7_1_201_a.jpeg"
import Burger from "../img/77C7FF12-F910-4C62-95A0-9B6EF434A5AA_1_105_c.jpeg"
import TeamProf from "../img/6599367E-EA27-4924-B251-221BBE154ADA_1_201_a.jpeg"
import Weather from "../img/E2755C25-CD8F-4A55-A111-CD8AC7C4D88F_1_201_a.jpeg"

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
          <div className="media">
            <a
              href="https://github.com/hdarden/INTown"
              target="blank"
              alt="explore charlotte"
            >
              <img
                src={InTown}
                width="150"
                height="150"
                className="mr-3"
                alt="In town app"
              ></img>
            </a>
            <div className="media-body">
              <p>
                <a
                  href="https://hdarden.github.io/INTown/"
                  target="blank"
                  alt="explore charlotte"
                >
                  <strong style={styles.link}>INTown</strong>
                </a>{" "}
                is a front end web app that allows users from Charlotte, NC to
                explore different events, outdoor areas, popular places, and
                restaurants in their selected neighborhood. Google Maps and
                Ticketmaster APIs are implemented in into the app in order to
                request criteria for specific neighborhoods and deliver the
                informationto the user.
              </p>
            </div>
          </div>
          <br></br>
          <div className="media">
            <a
              href="https://github.com/hdarden/School-Spot"
              target="blank"
              alt="school spot app"
            >
              <img
                src={SchoolSpot}
                width="150"
                height="150"
                className="mr-3"
                alt="school spot app"
              ></img>
            </a>
            <div className="media-body">
              <p>
                <a
                  href="https://fast-beach-51043.herokuapp.com/"
                  target="blank"
                  alt="assignment scheduler"
                >
                  <strong style={styles.link}>School Spot</strong>
                </a>{" "}
                utilizes both front-end and back-end technology to cultivate a
                user experience that stores information within a MySQL database.
                The app allows teachers to post assignments and grades and
                students to keep track of assignments, due dates, and grades.
              </p>
            </div>
          </div>
          <br></br>
          <div className="media">
            <a
              href="https://github.com/ashleydeyoung/schedule-me"
              target="blank"
              alt="schedule me app"
            >
              <img
                src={ScheduleMe}
                width="150"
                height="150"
                className="mr-3"
                alt="schedule me app"
              ></img>
            </a>
            <div className="media-body">
              <p>
                <a
                  href="https://github.com/ashleydeyoung/schedule-me"
                  target="blank"
                >
                  <strong style={styles.link}>Schedule-Me</strong>
                </a>{" "}
                is a React.js web app that allows the user to login in and
                schedule appointments. Schedule-Me allows clients to view,
                request, and confirm appointments by viewing availability of a
                given business or contractor.
              </p>
            </div>
          </div>
          <br></br>
          <div className="media">
            <a
              href="https://github.com/hdarden/Burger-Logger"
              target="blank"
              alt="burger logger app"
            >
              <img
                src={Burger}
                width="150"
                height="150"
                className="mr-3"
                alt="burger logger app"
              ></img>
            </a>
            <div className="media-body">
            <p>
            <a
              href="https://github.com/hdarden/Burger-Logger"
              target="blank"
              alt="burger log"
            >
              <strong style={styles.link}>The Burger Logger</strong>
            </a>{" "}
            represents my first full stack web app. It implements MySQL,
            Express, Handlebars, and a homemade ORM to allow the user to create
            a burger, add it the the burger logger, and choose a burger to
            devour.
          </p>
            </div>
          </div>
          <br></br>
          <div className="media">
            <a
              href="https://github.com/hdarden/Team-Profile-Gen"
              target="blank"
              alt="team profile generator app"
            >
              <img
                src={TeamProf}
                width="150"
                height="150"
                className="mr-3"
                alt="team profile generator app"
              ></img>
            </a>
            <div className="media-body">
            <p>
            <a
              href="https://drive.google.com/file/d/1lV3s5tGY8JhTBoKPVKqUBlXtbRL_qv6c/view"
              target="blank"
              alt="CLI employee DB"
            >
              <strong style={styles.link}>Team Profile Generator</strong>
            </a>{" "}
            is a Node CLI that uses npm inquirer to take in information about
            employees and uses npm fs to generate an HTML webpage that displays
            summaries for each person. This Node CLI includes unit tests in
            order to build better program design of the Team Profile Generator.
          </p>
            </div>
          </div>
          <br></br>
          <div className="media">
            <a
              href="https://github.com/hdarden/Weather-Dashboard"
              target="blank"
              alt="weather dash app"
            >
              <img
                src={Weather}
                width="150"
                height="150"
                className="mr-3"
                alt="weather dash app"
              ></img>
            </a>
            <div className="media-body">
            <p>
            <a
              href="https://hdarden.github.io/Weather-Dashboard/"
              target="blank"
            >
              <strong style={styles.link}>Weather Dashboard</strong>
            </a>{" "}
            utilizes the OpenWeather API to retrieve data for searched cites.
            This app features HTML and CSS that is dynamically updated using
            jQuery.
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
             

  );
}

export default Project;
