import React, { Component } from 'react'

//import './Formdup.css'

class Formdup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
            email: '',
			role: 'patient',
            meetlink: '',
            experience: '',
            gender: 'selectgender'
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

    handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}

	 handleRoleChange = event => {
	 	this.setState({
	 		role: event.target.value
	 	})
	 }

     handleMeetLinkChange = event =>{
        this.setState({
			meetlink: event.target.value
		})
    }

    handleExperienceChange = event =>{
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
		alert(`${this.state.username} ${this.state.password} ${this.state.email} ${this.state.role}`)
		event.preventDefault()
	}

	render() {
		const { username, password, email, role } = this.state
		return (
        <div className='form-container'>
			<form onSubmit={this.handleSubmit} >
				<div className='username-container'>
					<label>Username </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
                <div>
					<label>Password </label>
					<input
						type="text"
						value={password}
 						onChange={this.handlePasswordChange}
					/>
				</div>
                <div>
					<label>Email </label>
					<input
						type="text"
						value={email}
						onChange={this.handleEmailChange}
					/>
				</div>
                <div>
					<label>Gender</label>
					<select value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value ="selectgender">Select gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
                    </div>
                
				 <div>
					<label>Role</label>
					<select value={role} onChange={this.handleRoleChange}>
						<option value="doctor">Doctor</option>
						<option value="patient">Patient</option>
					</select>
                    <b>{this.state.role == "doctor" ? <div><div>
					<label>Meet link </label>
					<input
						type="text"
						value={this.state.meetlink}
						onChange={this.handleMeetLinkChange}
					/>
				</div>
                <div>
					<label>Experience </label>
					<input
						type="text"
						value={this.state.experience}
						onChange={this.handleExperienceChange}
					/>
				</div>
                </div> : <div></div>}</b>
            </div> 
               
				<button type="submit">Submit</button>
			</form>
            </div>

            
		)
	}
}

export default Formdup