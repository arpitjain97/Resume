import React, { Component } from 'react'
import './Projects.css';

class Projects extends Component{
    render(){
        return(
            <div class = "Projects">
              <div class ="Projects__heading"><p>Projects</p></div>
              <div class = "Projects__project">
                  <ul>
                    <li><strong>1) Leaving Predictor System:</strong></li><div style={{marginLeft: '4rem'}}>An application where it predicts that who is going to leave the bank. It’s a very Basic model which works on Supervised Learning. Basic DNN is implemented. Based on features like AGE, GENDER, LOCATION, CREDITCARD SCORE etc prediction is done</div>
                    <li style={{marginLeft: '2rem'}}><strong>Features :</strong></li><div style={{marginLeft: '4rem'}}>Predicts which customer is going to leave the bank</div>
                    <li style={{marginLeft: '2rem'}}><strong>Technology Stack :</strong></li><div style={{marginLeft: '4rem'}}>Python, Keras</div>
                  </ul>
              </div>
              <div class = "Projects__project">
                  <ul>
                     <li><strong>2) HR ASSITANT:</strong></li><div style={{marginLeft: '4rem'}}>Python based Assistant application which is used by HR for interview purpose</div>
                    <li style={{marginLeft: '2rem'}}><strong>Features :</strong></li><div style={{marginLeft: '4rem'}}>Responsive assistant which takes Interview, asks question from database and stores it into database</div>
                    <li style={{marginLeft: '2rem'}}><strong>Technology Stack :</strong></li><div style={{marginLeft: '4rem'}}>Python, Mysql, NLP(Basics)</div>
                  </ul>
              </div>
              <div class = "Projects__project">
                  <ul>
                    <li><strong>3) Message Posting Application:</strong></li><div style={{marginLeft: '4rem'}}>A Web Application where user can create, post, edit and delete posts and see the posts of other users which they can't edit. The Application allows proper Authentication as well as Authorization</div>
                    <li style={{marginLeft: '2rem'}}><strong>Features :</strong></li><div style={{marginLeft: '4rem'}}>Interactive UI, Secured Login</div>
                    <li style={{marginLeft: '2rem'}}><strong>Technology Stack :</strong></li><div style={{marginLeft: '4rem'}}>Mongo Db, Express.js, HTML, CSS , Node.js (MEAN)</div>
                  </ul>
              </div>
              <div class = "Projects__project">
                  <ul>
                    <li><strong>4) Your Blog:</strong></li><div style={{marginLeft: '4rem'}}>A Web Application where you can post blog and can edit the blog. You can only see the public blogs but  not the private ones. It comes with Google Authentication.</div>
                    <li style={{marginLeft: '2rem'}}><strong>Features :</strong></li><div style={{marginLeft: '4rem'}}>Interactive UI, Material UI design</div>
                    <li style={{marginLeft: '2rem'}}><strong>Technology Stack :</strong></li><div style={{marginLeft: '4rem'}}>Mongo Db, Express.js, HTML, CSS, Node.js </div>
                  </ul>
              </div>
              <div class = "Projects__project">
                  <ul>
                    <li><strong>5) Maaxum  (A platform for BSP’s and Recruiters):</strong></li><div style={{marginLeft: '4rem'}}>A Platform where Multiple Bench Sale Person can upload Consultants and Recruiter can post jobs.</div>
                    <li style={{marginLeft: '2rem'}}><strong>Features :</strong></li><div style={{marginLeft: '4rem'}}>Consultant seeking for the job can get job through BSP applying for it and Recruiter seeking for the right candidate can get the candidate by posting it. Many other features like Filtering while Searching, Candidate upload, Bulk Candidate Upload, Authentication, etc</div>
                    <li style={{marginLeft: '2rem'}}><strong>Technology Stack :</strong></li><div style={{marginLeft: '4rem'}}>Node.js, HTML, CSS, JavaScript, Python, AWS, MongoDb</div>
                  </ul>
              </div>
            </div>
        );
    }
}
export default Projects;