import React, { Component } from 'react';
import LinkedInIcon from './Images/linkedin.png';
import GithubIcon from './Images/social-github-outline.png';
import Gmail from './Images/gmail.png';

class Contact extends Component {
  render() {
    return (
        <div className="contact">
            <div className="jumbotron">
                <h1>Contact</h1>
            </div>

            <div className="container">
                <div className="row">
                    <p className="text-right col">Name</p>
                    <p className="text-left col">Michael Yee</p>
                </div>
                <div className="row">
                    <p className="text-right col">Phone Number</p>
                    <p className="text-left col">(626) 679 7541</p>
                </div>
                <div className="row">
                    <p className="text-right col">Email Address</p>
                    <p className="text-left col">michaelyeeeee@gmail.com</p>
                </div>
                <div className="row">
                    <p className="text-right col">Location</p>
                    <p className="text-left col">San Diego, CA</p>
                </div>
            </div>

            <br/>
            <p className="text-center">________________________</p>
            <div className="social-icons">
                <a href='https://github.com/miyee' target='_blank' rel='noopener noreferrer'>
                    <img className="github" src={GithubIcon} alt="Github"/>
                </a>  
                <a href="mailto:michaelyeeeee@gmail.com">
                    <img className="gmail" src={Gmail} alt="Gmail"/>
                </a>
                <a href='https://www.linkedin.com/in/michaelyee1996/' target='_blank' rel='noopener noreferrer'>
                    <img className="linkedin" src={LinkedInIcon} alt="Linked In"/>
                </a>
                
            </div>

        </div>
    );
  }
}

export default Contact;
