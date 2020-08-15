import React, { Component } from 'react'
import './Base.css';
import Profile from './Profile';
import Details from './Details';


class Base extends Component{
    render(){
        return(
            <div class = "Base">
                <Profile />
                <br />
                <Details />
                
            </div>
        );
    }
}
export default Base;