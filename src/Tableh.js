import React, { Component } from 'react'
import  axios from 'axios';
import './Tableh.css'

class Tableh extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
           editable : 'no',
           data : []
        }
    }

    componentDidMount()
    {
     
      const URL = 'http://localhost:8080/appointment';
      const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
   //   const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKQiIsInJvbGVzIjoiUk9MRV9QQVRJRU5UIiwiaWF0IjoxNjQ5MzQyNjgyLCJleHAiOjE2NDkzNjA2ODJ9.2jTizEOh7xRoWSWtMtvzfN5-ATPpOt_v04BS7XGYucQ'
    axios.get(URL, {headers: { "Authorization": AUTH_TOKEN } })
    .then(response => {
      console.log(response.data);
      this.setState({
        data: response.data
      })
   })
  .catch((error) => {
      console.log('error ' + error);
   });    
  
    }

    handleEditPrescription = event => {
        window.location = 'http://localhost:3000/editprescription'
    }


    render(){
        const data =[{"AppointmentId" : "123","DoctorName": "Chaitanya","PatientName": "Sandya","SlotTime":"Wed 4 Jul 2021 12:08 PM", "SymptomsDescription": "Cold","Prescription":"Citrigen-10Tab","MeetLink": "google.com"},
        {"AppointmentId" : "123","DoctorName": "Chaitanya","PatientName": "Sandya","SlotTime":"Wed 4 Jul 2021 12:08 PM", "SymptomsDescription": "Cold","Prescription":"Citrigen-10Tab","MeetLink": "google.com"}
    ]

        return(
            <div className='table-container'>
                <div className='app-container'>
                <div>
                        <button onClick={this.handleEditPrescription}>Enter Prescription</button>
                        {/* <button className="btn btn-primary" onClick ={this.handlePrescriptionSave}>Edit Prescription</button> */}
                    </div>
                <div className='heading'><p>Appointments</p></div>
                    
                    <table>
                    <thead>
                        <tr>
                            <th>AppointmentId</th>
                            <th> Doctor Name</th>
                            <th>Patient Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Symptoms Description</th>
                            <th>Prescription</th>
                            <th>Meet Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((one) => 
                            <tr>
                                <td>{one.id}</td>
                                <td>{one.doctorName}</td>
                                <td>{one.patientName}</td>
                                <td>{one.startTime}</td>
                                <td>{one.endTime}</td>
                                <td>{one.symptomsDescription}</td>
                                <td>{one.prescription}</td>
                                <td>{one.meetLink}</td>
                                </tr>
                        )}
                    </tbody>
                    </table>

                    </div>
            </div>
           
        )
    }
}
export default Tableh