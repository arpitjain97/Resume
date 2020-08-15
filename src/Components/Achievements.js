import React, { Component } from 'react'
import './Achievements.css';

class Achievements extends Component{
    render(){
        return(
            <div class = "Achievements">
              <div class ="Achievements__heading"><p>Achievements</p></div>
              <div class = "Achievements__skills">
                  <ul>
                      <li><strong>Bagged 2nd position in WIT Hackathon</strong></li>
                      <li><strong>Stood 3rd in position at Innoverse (Project Idea)</strong></li>
                      <li><strong>President of Soft Skills Development Cell (SSDC)</strong></li>
                      <li><strong>Secretary of Soft Skills Development Cell (SSDC)</strong></li>
                      <li><strong>Delivered Seminar on Leadership Skills, Time Management Skills & Interpersonal Skills in college premises</strong></li>
                       
                  </ul>
              </div>
            </div>
        );
    }
}
export default Achievements;