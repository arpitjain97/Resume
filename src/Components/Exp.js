import React, { Component } from 'react'
import './Exp.css';

class Exp extends Component{
    render(){
        return(
            <div class = "Exp">
              <div class ="Exp__heading"><p>Experience</p></div>
              <div class = "Exp__intern">
                  <ul>
                    <li><h3>Internship</h3></li>   
                  
                  <li><strong>Company :</strong>ABCLearn, Hyderabad</li>
                  
                  <li><strong>Technology used :</strong>Mean Stack, Machine Learning with Python</li>
                  <li><strong>Summary :</strong>Learned to use Numpy, Pandas, Implemented Supervised Model and DNN Model(basic)</li>
                  </ul>
              </div>
            </div>
        );
    }
}
export default Exp;