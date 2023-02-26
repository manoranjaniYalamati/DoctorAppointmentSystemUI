import React, { Component } from 'react'
import  axios from 'axios';
import { Redirect } from 'react-router-dom';
import './RegForm.css'
import doctor from './doctor.png'
import 'bootstrap/dist/css/bootstrap.min.css'

class RegForm extends Component {
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

    handleEmailChange = event => {
		this.setState({
			contactEmail: event.target.value
		})
	}

    handleFullNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
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

    handleSubmit = event =>{
        event.preventDefault()
        
        console.log(this.state)
      axios.post("http://localhost:8080/users/register",this.state)
      .then(response =>{
          console.log(response);

          this.setState({
              registered: true
         })

         
      })
      .catch(error =>{
          alert("Please Enter correct details");
          console.log(error)
      })

  }

    render() {
		
		return (
			<div className='new-container'>
				<div className='main-container'>
						<form  onSubmit={this.handleSubmit} className="form-container">
							

							<div className='each-container'>
								<label className='labelname'>Username </label>
								<input className='inputbox' placeholder='Enter username'
									type="text"
									value={this.state.username}
									onChange={this.handleUsernameChange}
								/>
							</div>

							<div className='each-container' >
								<label  className='labelname' >Password </label>
								<input className='password-box' placeholder='Enter password'
									type="password"
									value={this.state.password}
									onChange={this.handlePasswordChange}
								/>
							</div>

							<div className='each-container'>
								<label className='labelname emailname' >Email </label>
								<input className='email-box' placeholder='Enter e-mail'
									type="text"
									value={this.state.contactEmail}
									onChange={this.handleEmailChange}
								/>
							</div>

							<div  className='each-container'>
								<label className='labelname emailname' >Full Name </label>
								<input className='fullnamebox' placeholder='Enter Full name'
									type="text"
									value={this.state.name}
									onChange={this.handleFullNameChange}
								/>
							</div>

							<div className='gender-container' >
								<label  className='labelname genderlabelname'>Gender</label>
								<select value={this.state.gender} onChange={this.handleGenderChange} className="selection-area" >
									<option value ="selectgender" className='selecting'>Select gender</option>
									<option value="MALE" className='selecting'>MALE</option>
									<option value="FEMALE" className='selecting'>FEMALE</option>
								</select>
								</div>

								<div className='' >
									<div className='role-container'>
									<label className='labelname  genderlabelname' >Role</label>
									<select className='selection-area2'  value={this.state.roleId} onChange={this.handleRoleChange} >
										<option value = "1" className='selecting'>Doctor</option>
										<option value="2" className='selecting'>Patient</option>
									</select>
									</div>
								<b>{this.state.roleId == "1" ? <div><div>
								
								<label className='labelname'>Meet Link </label>
								<input className='meet-linkbox'
									type="text"
									value={this.state.meetLink}
									onChange={this.handleMeetLinkChange}
								/>
								
							</div>
							<div>
								<label className='experience-m'>Experience </label>
								<input className='second-box2'
									type="text"
									value={this.state.experience}
									onChange={this.handleexperienceChange}
								/>
							</div>
							
							</div> : <div></div>}</b>
								</div>

							<div>
							<button value="Submut" type="submit"  className='submit-button btn btn-primary' > Submit</button>
							{this.state.registered && <Redirect to="/" />}
							</div>

						

						</form>
				</div>
				<div className='inner-container'>
					{/* <h1 className='heading'>E-Therapy</h1> */}
					 <img src={doctor} className="doctor-image"/>
				</div>
				
			</div>
        )
        }
}
export default RegForm