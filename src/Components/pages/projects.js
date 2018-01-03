import React, { Component } from 'react';
import ks from './Images/ks.jpg';
import bacon from './Images/kevinbacon.jpg';
import autocomplete from './Images/autocomplete.png';

class Projects extends Component {
  render() {

    return (
      <div className="projects">
        <div className="jumbotron">
          <h1>Projects</h1>
        </div>
        
        <div className="container-fluid">
          {/* KITCHEN SYNC PROJECT */}
          <div className="row project-row-odd">
            <div className="col-5">
              <h2 className="text-center">Kitchen Sync</h2>
              <ul className="square-list">
                <li>
                  <a href="https://kitchensyncrz.herokuapp.com/" target='_blank'
                     rel="noopener noreferrer">Deployed Website</a>
                </li>
                <li>
                  Created using the ReactJS framework and Bootstrap
                  with Amazon Web Services for the database,
                  Kitchen Sync is a personalized kitchen assistant which
                  keeps track of your kitchen, allows you to quickly 
                  find recipes, and helps you plan meals.
                </li>
                <li>
                  Worked in a group of 11 students over a 10 week course
                  to mimic an agile development life cycle.
                </li>
                <li>
                  Emphasis was placed on early planning and designing of the 
                  application, as well as documentation, in order to make 
                  development as smooth as possible.
                </li>

              </ul>
            </div>
            <div className="col-7">
              <img src={ks} alt="Kitchen Sync" className="ks-picture"/>
            </div>
          </div>
          {/* KEVIN BACON PROJECT */}
          <div className="row project-row-even">
            <div className="col-7">
              <img src={bacon} alt="Kevin Bacon" className="bacon-picture"/>
            </div>
            <div className="col-5">
              <h2 className="text-center">Six Degrees of Kevin Bacon</h2>
              <ul className="square-list">
                <li>
                  <a href="https://oracleofbacon.org/" target='_blank'
                     rel="noopener noreferrer">More Information</a>
                </li>
                <li>
                  Using C++ implemented a program which loads the IMDB 
                  movie database, consisting of thousands of actors and movies, 
                  to find the 'Kevin Bacon Number' of any 
                  actor in the list.
                </li>
                <li>
                  Learned the importance of choosing optimal data structures by 
                  working with large data, as well as graph structures to 
                  systematically map the relationships between various actors.
                </li>
              </ul>
            </div>
          </div>
          {/* AUTOCOMPLETE PROJECT */}
          <div className="row project-row-odd">
            <div className="col-5">
              <h2 className="text-center">AutoComplete</h2>
              <ul className="square-list">
                <li>
                  With C++, implemented a feature to predict words based on user 
                  input, as seen on nearly all text based applications. This was 
                  accomplished using a Ternary Search Tree and loading in a 
                  personal dictionary.
                </li>
                <li>
                  Based on a prefix entered, the program will return the top words 
                  that begin with the prefix, sorted by highest frequency (as noted 
                  in the personal dictionary).
                </li>
                <li>
                  Focused on the choice of data structure to optimize memory and 
                  runtime, as well as being able to efficiently find the most 
                  frequent words to return.
                </li>

              </ul>
            </div>
            <div className="col-7">
              <img src={autocomplete} alt="AutoComplete from Google" className="ac-picture"/>
            </div>
          </div>
          {/* EXTRA PROJECT 
          <div className="row project-row-even">
            <div className="col-7">
              <img src={bacon} alt="Kevin Bacon" className="bacon-picture"/>
            </div>
            <div className="col-5">
              <h2 className="text-center">Six Degrees of Kevin Bacon</h2>
              <ul className="square-list">
                <li>
                  <a href="https://oracleofbacon.org/" target='_blank'
                     rel="noopener noreferrer">More Information</a>
                </li>
                <li>
                  Using C++ implemented a program which loads the IMDB 
                  movie database, consisting of thousands of actors and movies, 
                  to find the 'Kevin Bacon Number' of any 
                  actor in the list.
                </li>
                <li>
                  Learned the importance of choosing optimal data structures by 
                  working with large data, as well as graph structures to 
                  systematically map the relationships between various actors.
                </li>
              </ul>
            </div>
          </div>*/}
          
          


        </div>
      </div>
    );
  }
}

export default Projects;
