import React, { Component } from 'react'
import './Skill.css';

class Skill extends Component{
    render(){
        return(
            <div class = "Skill">
              <div class ="Skill__heading"><p>Skills</p></div>
              <div class = "Skill__skills">
                  <ul>
                      <li><strong>Languages :</strong>Python, Node.js, JS, C++</li>
                      
                  
                  
                  <li><strong>Database :</strong>Mysql, MongoDb</li>
                  
                  
                  <li><strong>Development Tools :</strong>VS Code, Spyder, Jupiter Notebook</li>
                  </ul>
              </div>
            </div>
        );
    }
}
export default Skill;