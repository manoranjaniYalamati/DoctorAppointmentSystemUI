import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import  axios from 'axios';
import './Form2.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			name: '',
			roleId: "2",
            meetLink: '',
            experience: '',
            gender: 'selectgender',
			contactEmail: '',
			registered: false
			
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

    handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleFullNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}

    handleEmailChange = event => {
		this.setState({
			contactEmail: event.target.value
		})
	}

	 handleRoleChange = event => {
	 	this.setState({
	 		roleId: event.target.value
	 	})
	 }

     handleMeetLinkChange = event =>{
        this.setState({
			meetLink: event.target.value
		})
    }

    handleexperienceChange = event =>{
        this.setState({
			experience: event.target.value
		})
    }

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }


	handleSubmit = event => {
		// this.props.history.push('/');
		// alert(`${this.state.username} ${this.state.password} ${this.state.email} ${this.state.role}`)
		// event.preventDefault()


		
		console.log("yes")
		//	console.log(this.state)
			//localStorage.getItem('token');
			
		//   axios({method: 'post',
		//   url: 'http://localhost:8080/users/register',
		//   data: this.state,
		//   })
		// axios.post('http://localhost:8080/users/register',this.state)
		//   .then(response =>{
		// 	  console.log(response.data);
		// 	  this.setState({
		// 		Registered: true
		// 	})
		// 	console.log(this.state.Registered)
			 
  			 
		//   }
		  
		//   )

		//   .catch(error =>{
		// 	  alert("Please provide correct Details");
		// 	  console.log(error)
		//   })


		  console.log(this.state)
        axios.post("http://localhost:8080/users/register",this.state)
        .then(response =>{
            console.log(response);

        //     this.setState({
        //         registered: true
        //    })
		//    console.log(this.state.registered)
           
        })
        .catch(error =>{
            alert("Your password or username is incorrect");
            console.log(error)
        })
  
	  
	}

	render() {
		
		return (
			<form >
				<div>
					<label>Username </label>
					<input
						type="text"
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
                <div >
					<label >Password </label>
					<input
						type="text"
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>
				</div>
                <div>
					<label >Email </label>
					<input
						type="text"
						value={this.state.contactEmail}
						onChange={this.handleEmailChange}
					/>
				</div>
				<div >
					<label >Full Name </label>
					<input
						type="text"
						value={this.state.name}
						onChange={this.handleFullNameChange}
					/>
				</div>
                <div >
					<label >Gender</label>
					<select value={this.state.gender} onChange={this.handleGenderChange} >
                        <option value ="selectgender">Select gender</option>
						<option value="MALE">MALE</option>
						<option value="FEMALE">FEMALE</option>
					</select>
                    </div>

					
                
				 <div >
					<label >Role</label>
					<select value={this.state.roleId} onChange={this.handleRoleChange} >
						<option value = "1">Doctor</option>
						<option value="2">Patient</option>
					</select>
                    <b>{this.state.roleId == "1" ? <div><div>
					<label>Meet Link </label>
					<input
						type="text"
						value={this.state.meetLink}
						onChange={this.handleMeetLinkChange}
					/>
				</div>
                <div>
					<label>Experience </label>
					<input
						type="text"
						value={this.state.experience}
						onChange={this.handleexperienceChange}
					/>
				</div>
                </div> : <div></div>}</b>
            </div> 
               <div>
				   {console.log("executing")}
			   {/* <Link to="/home" onClick={this.handleSubmit}> */}
				<button onClick={this.handleSubmit} value="submit" ></button>
				{/* { this.state.registered && <Redirect to="/home" /> } */}
				</div>
				
			</form>
   
		)
	}
}

export default Form