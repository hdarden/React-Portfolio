import React from "react";
import NavTabs from "../NavTabs"
import "../css/styles.css"

function Skills () {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 sideNav">
                    <NavTabs />
                </div>
                <div className="col-md-10 skills">
                    <h1>Skills Page</h1>
                    <p>
                        Experience in HTML5, CSS3, Bootstrap, Javascript,
                        JQuery, AJAX, Git, React.js, Node.js, Handlebars.js, Express.js,
                        MySQL, Sequelize, MongoDB, Mongoose, APIs, Command Line, and RICS Software.
                    </p>
               
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="devicon-sequelize-plain"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="devicon-mysql-plain"></i></li>
                        <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
                        <li className="list-inline-item"><i className="fab fa-git"></i></li>
                        <li className="list-inline-item"><i className="fab fa-github"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                        <li className="list-inline-item"><i className="devicon-mongodb-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-jquery-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-heroku-original"></i></li>
                        <li className="list-inline-item"><i className="devicon-handlebars-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-express-original"></i></li>
                    </ul>
                 </div>   
            </div>
        </div>       
    )
}
export default Skills;