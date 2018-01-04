import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import BurgerMenu from 'react-burger-menu';

import HomePage from './Components/pages/homePage';
import AboutMe from './Components/pages/aboutMe';
import Projects from './Components/pages/projects';
import Contact from './Components/pages/contact';
import Workspace from './Components/pages/workspace';

class App extends Component {

  render() {
    const Menu = BurgerMenu['push'];
    return (
      <Router>
      <div className="App" id="outer-container">
        <Menu id="push" pageWrapId="page-wrap"
               className="nav-menu" outerContainerId="outer-container"
               customBurgerIcon={ <img src="https://image.flaticon.com/icons/png/512/56/56763.png" alt=""/> }
               width="240px" >
            <br/><br/>
            <Link id="home" className="menu-item" to="/" onClick={this.isOpen="false"}>Home</Link>
            <Link id="aboutme" className="menu-item" to="/About" onClick={this.isOpen="false"}>About Me</Link>
            <Link id="projects" className="menu-item" to="/Projects" onClick={this.isOpen="false"}>Projects</Link>
            <Link id="contact" className="menu-item" to="/Contact" onClick={this.isOpen="false"}>Contact</Link>
            <Link id="workspace" className="menu-item" to="/Workspace" onClick={this.isOpen="false"}>Workspace</Link>
        </Menu>
        <div id="page-wrap">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={AboutMe} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Workspace' component={Workspace} />

        </div>

        <br/><br/>
      </div>
      </Router>
    );
  }
}

export default App;
