import React, { Component } from 'react'
import  axios from 'axios';
import './Prescription.css'
import pre from './pre.jpg'


class Prescription extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
           prescription : '',
           data : [],
           isDoctor : false,
           appid : 'SelectAppointmentid'
           
        }
    }

    componentDidMount(){
     //   const PATIENT_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKQiIsInJvbGVzIjoiUk9MRV9QQVRJRU5UIiwiaWF0IjoxNjQ5MzQ5MTQyLCJleHAiOjE2NDkzNjcxNDJ9.DsT791JgbN_W0pOFi5nCLfyXNd0Jmz0k_J1DbLE-Cso'
        const URL = "http://localhost:8080/users/isDoctor"
   //     const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb3dqYW55YSIsInJvbGVzIjoiUk9MRV9ET0NUT1IiLCJpYXQiOjE2NDkzNDg0ODcsImV4cCI6MTY0OTM2NjQ4N30.oVrT-S2RxL9Xs1Tjk-sN3JgvMKrVjcXUKj4JHcnSn3c'
   const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
   axios.get(URL, {headers: { "Authorization": AUTH_TOKEN } })
   .then(response => {
     console.log(response);
            this.setState({
                isDoctor: true
            })
            axios.get("http://localhost:8080/doctor/appointment", {headers: { "Authorization": AUTH_TOKEN } })
            .then(response =>{
                console.log(response);
                this.setState({
                    data : response.data
                })
            })
            .catch((error) => {
                console.log('error ' + error);
                alert("You are not allowed to edit !!!")
                window.location = 'http://localhost:3000/home'
             }); 
              
  })
 .catch((error) => {
     console.log('error ' + error);
     alert("You are not allowed to edit prescription!!!")
     window.location = 'http://localhost:3000/home'
  });    
    }

    
    handlePrescriptionEdit = event => {//i need appointment id here

        this.setState({
            prescription: event.target.value
       })
		
	}

    handleAppIdChange = event => {//i need appointment id here

        this.setState({
            appid: event.target.value
       })
		
	}

    handlePrescriptionSave = event =>{
        const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb3dqYW55YSIsInJvbGVzIjoiUk9MRV9ET0NUT1IiLCJpYXQiOjE2NDkzNDg0ODcsImV4cCI6MTY0OTM2NjQ4N30.oVrT-S2RxL9Xs1Tjk-sN3JgvMKrVjcXUKj4JHcnSn3c'
        const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
        axios({
            method: 'put',params:{
                "prescription" : this.state.prescription
                
            },
            url:"http://localhost:8080/doctor/appointment/"+this.state.appid ,
            headers:{
                    "Authorization": AUTH_TOKEN
            }

        })
        .then(response =>{
            console.log(response);
            alert("Prescription was saved successfully")
            window.location = 'http://localhost:3000/home'   
        })
        .catch(error =>{
            alert("Something is wrong.Please edit prescription later");
            window.location = 'http://localhost:3000/home'
            console.log(error)
        })
    }

    render(){
        const data =[{"AppointmentId" : "123","DoctorName": "Chaitanya","PatientName": "Sandya","SlotTime":"Wed 4 Jul 2021 12:08 PM", "SymptomsDescription": "Cold","Prescription":"Citrigen-10Tab","MeetLink": "google.com"},
        {"AppointmentId" : "123","DoctorName": "Chaitanya","PatientName": "Sandya","SlotTime":"Wed 4 Jul 2021 12:08 PM", "SymptomsDescription": "Cold","Prescription":"Citrigen-10Tab","MeetLink": "google.com"}
    ]
        return(

        this.state.isDoctor && <div className='backg'>
        <div className='display2'>
                <div className='main3-container'>
                    <div className='prescription-heading'>Enter Prescription Here:</div>
                    <div className='joslina'><textarea type ="text"  className='textarea' value = {this.state.prescription} onChange = {this.handlePrescriptionEdit}/>
                                            <select className='san' value = {this.state.appid} onChange = {this.handleAppIdChange}>
                                                <option value="SelectAppointmentid">Select Appointment</option>
                                            {this.state.data.map((appointmentId) => <option value = {appointmentId}>{appointmentId}</option>)}
                                                </select>
                                                <button className="btn btn-primary button" value ="save" onClick ={this.handlePrescriptionSave}>save</button>
                                                </div>
                </div>

            <div><img className='image' src={pre}/></div>
        </div>
        </div>
        // <div className='display'>
        //         <div>
        //             <img className='image' src={pre}/>
        //         </div>
        //         <div className='main'>
        //             <div className='sandhya'>
        //             <label className='sandy'>Edit Prescription</label>
        //             <select className="selection" value={this.state.editable} onChange={this.handlePrescriptionChange}>
        //                 <option className="himmu" value="yes">Yes</option>
        //                 <option className="mahi" value="no">No</option>
        //             </select>
        //             <b>{this.state.editable == "yes" ?<div className='joslina'><textarea type ="text" className='textarea' value = {this.state.prescriptionchange} onChange = {this.handlePrescriptionEdit}/>
        //                                                 <select className="san" value = {this.state.appid} onChange = {this.handleAppIdChange}>
        //                                                 {data.map((one) => <option value={one.AppointmentId}>{one.AppointmentId}</option>)}
        //                                                     </select>
        //                                                     <div className='joslina2'>
        //                                                     <button className="btn btn-primary button" value ="save" onClick ={this.handlePrescriptionSave}>save</button></div>
        //                                                     </div>
                                                            
        //                                                     : <div></div> }
        //             </b>
        //         </div>
        //     </div>
        //     </div>
                                                
         )


    }
}
export default Prescription