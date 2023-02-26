import React, { Component } from 'react'
import Listn from './Listn'
import { Link } from "react-router-dom";
import "./Home.css";


class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showAppointments : 'false'

		}
	}

 
    handleDoctorSearch = event => {
		//need to redirect it to Listn.js
	}

    handleGuide = event =>{
        window.location = "http://localhost:3000/guide"
        //need to redirect to other html content
    }

    handleViewAppointments = event =>{
        this.setState({
            showAppointments: 'true'
       })
        //need to redirect to Tableh.js
    }

    handleLogout =event =>{
        window.location = "http://localhost:3000"
    }


    render(){

        return(
            <div className='main2-container'>    
                
            <Link to={"/doctors"} >
                 <button  className='btn1'>
                    Search For Doctor
                 </button> 
                 </Link>

                
                <div>
                    <button className='btn1' value = "Check Guide" onClick ={this.handleGuide}>Check Guide</button>
                </div>

                <Link to={"/appointments"}>
                    <button className='btn1'>
                    View Appointments  
                    </button>     
                </Link>
                <button className='logout-btn' onClick={this.handleLogout}>
                    Logout
                </button>

            </div>
        )
    }
}
export default Home;