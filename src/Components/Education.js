import React, { Component } from 'react'
import './Education.css';

class Education extends Component{
    render(){
        return(
            <div class = "Education">
              <div class ="Education__heading"><p>Education</p></div>
              <div class = "Education__skills">
              <ul>
                    <li><strong>Course</strong>B.E in Information Technology (2016-2020)</li>
                    <li><strong>College :</strong>Walchand Institute of Technology, Solapur</li>
                    <li><strong>Current CGPA :</strong>9.4</li>
                  </ul>
              </div>
            </div>
        );
    }
}
export default Education;