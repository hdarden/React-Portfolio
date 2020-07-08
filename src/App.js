import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Education from "./components/pages/Education"
import Skills from "./components/pages/Skills";

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Route exact path="/React-Portfolio" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
