import React, { Component } from 'react'
import './Certifications.css';

class Certifications extends Component{
    render(){
        return(
            <div class = "Certification">
              <div class ="Certification__heading"><p>Certifications</p></div>
              <div class = "Certification__pages">
                  <ul>
                      <li><strong>Data Analytics with Python – Cognitive Class.ai :</strong>IBM</li>
                  <li><strong>AWS Fundamental Going Cloud Native :</strong>AWS</li>
                  <li><strong>Problem Solving through Programming in C :</strong>NPTEL</li>
                  <li><strong>Developing Soft Skills and Personality :</strong>NPTEL</li>
                  <li><strong>Technical English for Engineers :</strong>NPTEL</li>
                  </ul>
              </div>
            </div>
        );
    }
}
export default Certifications;