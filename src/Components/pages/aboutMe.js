import React, { Component } from 'react';

import longboarding from './Images/longboarding.jpg';
import moviedog from './Images/movie-dog.jpeg';
import videogames from './Images/videogames.jpg';

class AboutMe extends Component {
  render() {

    return (
      <div className="about">
        <div className="jumbotron">
          <h1>About Me</h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col education">
              <h3>Education</h3>
              <h5>University of California, San Diego</h5>
              <ul className="square-list">
                <li>September 2014 - June 2018</li>
                <li>B.S. Mathematics/Computer Science</li>
                <li>GPA: 3.652</li>
              </ul>
              <h5>Skills</h5>
              <ul className="square-list">
                <li>Experienced in agile development to deliver applications rapidly</li>
                <li>Works effectively in an individual or group setting</li>
                <li>Adapts to new technologies quickly</li>
              </ul>

            </div>
            <div className="col programming">
              <h3>Programming Tools</h3>
              <h5>Languages</h5>
              <ul className="square-list">
                <li>Java/JavaScript</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>python</li>
                <li>Linux Shell Scripting</li>
                <li>Assembly</li>
              </ul>
              <h5>Tools/Frameworks</h5>
              <ul className="square-list">
                <li>ReactJS</li>
                <li>Git</li>
                <li>Android Studio</li>
                <li>Microsoft Office</li>
                <li>GDB & Valgrind</li>
              </ul>
            </div>
            <div className="col relevant-coursework">
              <h3>Relevant Coursework</h3>
              <h5>Computer Science</h5>
              <ul className="square-list">
                <li>Data Structures and Object Oriented Design</li>
                <li>Software Tools and Techniques</li>
                <li>Computer Organization and Systems Programming</li>
                <li>Design & Analysis of Algorithms</li>
                <li>Software Engineering and Design Patterns</li>
                <li>Theory of Computation</li>
              </ul>
              <h5>Mathematics</h5>
              <ul className="square-list">
                <li>Modern Algebra</li>
                <li>Numerical Analysis & Linear Algebra</li>
                <li>Probability and Combinatorics</li>
              </ul>
            </div>
          </div>
        </div>

        <br/><br/>
        <p className="text-center">_____________________________________</p>
        <h1 className="text-center">What I'm Doing When I'm Not Coding</h1>
        <div className="container">
          
          <div className="row fun-row">
            <div className="col-4 fun-col">
              <img className="fun-img1" src={longboarding} alt="Longboarding"/>
            </div>
            <div className="col-4 fun-col">
              <img className="fun-img2" src={moviedog} alt="Movies"/>
            </div>
            <div className="col-4 fun-col">
              <img className="fun-img3" src={videogames} alt="Video Games"/>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <h2 className="text-center">Longboarding</h2>
            </div>
            <div className="col-4">
              <h2 className="text-center">Watching Movies</h2>
            </div>
            <div className="col-4">
              <h2 className="text-center">Playing Video Games</h2>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default AboutMe;
