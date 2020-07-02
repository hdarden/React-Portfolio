import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
