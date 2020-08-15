import React, { Component } from 'react'
import './Details.css';
import Skill from './Skill';
import Exp from './Exp';
import Projects from './Projects';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Education from './Education';

class Detail extends Component{
    render(){
        return(
            <div class = "Detail">
               <Skill />
               <Exp />
               <Projects/>
               <Certifications />
               <Achievements />
               <Education />
            </div>
        );
    }
}
export default Detail;