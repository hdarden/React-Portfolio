import React from "react";
import "../components/css/styles.css";

function Header () {
    return (
      <header>
        <div className="container-fluid">
          <h1 className="display-4 justify-content">Helen Darden</h1>
          <p className="lead header">
            Full Stack Web Developer
          </p>
        </div>
      </header>
    );
}

export default Header