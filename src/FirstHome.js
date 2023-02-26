import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import  axios from 'axios';
import './FirstHome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Fdoctor from './Fdoctor.png'

class FirstHome extends Component {
    
	constructor(props) {
		super(props)

		this.state = {
			username : '',
            password : '',
            loggedIn : false
		}
	}
    
    handleUserNameChange = event =>{
        this.setState({
             username: event.target.value
        })
    }

    handlePasswordChange = event =>{
        this.setState({
             password: event.target.value
        })
    }

    handleLogin = event =>{
          console.log(this.state)
        axios.post("http://localhost:8080/users/authenticate",this.state)
        .then(response =>{
            console.log(response.data.token);

            localStorage.setItem('token',response.data.token);

            this.setState({
                loggedIn: true
           })

           
        })
        .catch(error =>{
            alert("Your password or username is incorrect");
            console.log(error)
        })

    }


    render(){

        return(
            <div className='container'>
                <div className='main-container'>
                <legend className='projectlabel'>E-Therapy</legend>
                <p className='loginhere'>Login Here</p>
                    <div className='username-container'>
                        <label className='labelname'>Username  </label>
                        <input className='inputbox' type = "text" value ={this.state.username} onChange = {this.handleUserNameChange} />
                    </div>

                    <div className='username-container'>
                        <label className='labelname'>Password  </label>
                        <input className='inputbox' type = "password" value ={this.state.password} onChange = {this.handlePasswordChange} />
                    </div>

                <div className='username-container'>
                    
                    <button value = "Login" className='btn btn-primary submit-button' onClick={this.handleLogin} >Login</button>
                { this.state.loggedIn && <Redirect to="/home" /> }
        
                </div>
                <div className='register-container'>
                    <label className='newlabelname'>Not login before  </label>
                    <Link to="/register">
                    <button className='btn btn-primary registerbutton'>Register</button></Link>
                </div>
                </div>
                <div>
                    <img src={Fdoctor} className="Homeimage" alt='doctorimage'/>
                </div>
                </div>
        )
    }
}
export default FirstHome
