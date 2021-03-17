import React from "react";
import {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

//import components
import Nav from "./components/Nav";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import SingleProj from './components/SingleProj';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import "./scss/App.css";
import { socials, projectsArr} from "./data/data"

const App = (props) => {

    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={ProjectList} />
          <Route path="/contact" component={Contact} />
          {/* <Route exact path="/singleproject/:i" component={() => <SingleProj projArr={projectsArr} />} /> */}
          <Route exact path="/singleproject/:i" component={SingleProj} /> 
          <Footer socials={socials}/>
    </div>
    </BrowserRouter>
    );
  }

const Home = (props) => {
  
  return (
    <div>
      <Header socials={socials} />
      <ProjectList projArr={projectsArr}/>
      <About />
      <Contact />
  </div>
  )
}

export default App;
