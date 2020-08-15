import React, { Component } from 'react'
import './Profile.css';
import dp from './me3.jpg'
class Profile extends Component{
    render(){
        return(
            <div class="image_container">
            <div>
                <img src = {dp} alt = "profile" />
            </div>
            <div class="image_container__details">
            
                <p>Arpit Jain</p>Self-motivated fresher seeking a career in recognized organization to prove my skills and utilize my knowledge and intelligence in the growth of organization.
                <div class = "image_container__connect">
                    <a href = "https://www.linkedin.com/in/a-r-p-i-t/">
                        <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/arpitjain97 ">
                        <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
                    </a>
             </div>
            </div>
            </div>

        );
    }
}
export default Profile;