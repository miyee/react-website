import React, { Component } from 'react';
import PeanutButter from './Images/peanutbutter.jpg';

class HomePage extends Component {
  render() {

    return (
      <div className="homePage">
        <div className="jumbotron">
          <h1>Michael Yee</h1>
        </div>
        
        <h2 className="text-center">Currently Under Construction.</h2>
        <p className="text-center">_______________________</p>

        <img className="peanutbutter" src={PeanutButter} alt="Peanut Butter Jelly Time"/>
      </div>
    );
  }
}

export default HomePage;
