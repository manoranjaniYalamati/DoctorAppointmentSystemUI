import React, { Component } from 'react'
import  axios from 'axios';
import bookingImage from './booking.jpg'
import './Book.css'

class Book extends Component {
	constructor(props) {
		super(props)

		this.state = {
            symptomsDescription: '',
            timeSlot: '',
            selectedTimeSlot : '',
            timeSlotsLoaded: false,
            isConsultationOnline: true
		}
	}

    componentDidMount(){
        const id = this.props.match.params.id
       const URL = "http://localhost:8080/book/slots/"+id
 //      const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKQiIsInJvbGVzIjoiUk9MRV9QQVRJRU5UIiwiaWF0IjoxNjQ5MzQyNjgyLCJleHAiOjE2NDkzNjA2ODJ9.2jTizEOh7xRoWSWtMtvzfN5-ATPpOt_v04BS7XGYucQ'
       const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
       axios.get(URL, {headers: { "Authorization": AUTH_TOKEN } })
  .then(response => {
    console.log(response.data);
    this.setState({
      timeSlot: response.data,
     timeSlotsLoaded: true
     
    })
    console.log("state datta");
    console.log(this.state.timeSlot);
 })
.catch((error) => {
    console.log('error ' + error);
 });    

     }

     handleConsultationChange = event =>{
        this.setState({
            isConsultationOnline: event.target.value
       })
     }

    handlePatientNameChange = event =>{
        this.setState({
             patientName: event.target.value
        })
    }

    handleSymptomsDescriptionChange = event =>{
        this.setState({
             symptomsDescription: event.target.value
        })
    }

    handleTimeSlotChange = event =>{
        this.setState({
             selectedTimeSlot: event.target.value
           
        }
        )
       
    }

    handleSubmit = event =>{

        console.log("submit is happening")
        event.preventDefault()
        const URL = `http://localhost:8080/book/${this.state.selectedTimeSlot}/${this.props.match.params.id}`
        console.log("url is")
        console.log(URL)
    //    const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKQiIsInJvbGVzIjoiUk9MRV9QQVRJRU5UIiwiaWF0IjoxNjQ5MzQyNjgyLCJleHAiOjE2NDkzNjA2ODJ9.2jTizEOh7xRoWSWtMtvzfN5-ATPpOt_v04BS7XGYucQ'
        const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
        axios({
            method: 'post',params:{
                "symptomsDescription" : this.state.symptomsDescription,
                "isConsultationOnline" : this.state.isConsultationOnline
            },
            url: URL,
            headers:{
                    "Authorization": AUTH_TOKEN
            }

        })
        .then(response =>{
            console.log(response);
            alert("Your appointment has been booked succesfully.You will get confirmation mail with online consultation details shortly.")
            window.location = 'http://localhost:3000/home'   
        })
        .catch(error =>{
            alert("Something is wrong.Please book later");
            console.log(error)
        })
    }

    render(){
        const timeData = ["4:00 - 4:15","5:00 - 5:15"]
        const {timeSlotsData} = this.state.timeSlot
        console.log("state dtata in render")
        console.log(timeSlotsData)
        return(
           <div className='bookingdisplay'>
                <div className='booking-container'>


                    
                    <h1 className='booking-heading'>Book Appointment</h1>
                    <div className='allinputs'>
                        <div className='symptoms-container'>
                            <label className='symptoms-labelname'>Symptoms Description </label>
                            <textarea className='symptoms-textarea' type = "text" value ={this.state.symptomsDescription} onChange = {this.handleSymptomsDescriptionChange} />
                        </div>
                    
                    <div className='timeslot-container'>
                        <label  className='timeslot-labelname'>Timeslot</label>
                            <select className='timeslot-selection' value={this.state.selectedTimeSlot} onChange={this.handleTimeSlotChange} >
                                <option value ="selectTimeSlot">Select Time Slot</option>
                                {this.state.timeSlotsLoaded && this.state.timeSlot.map((slot) => 
                                        <option value={slot.id}>{slot.doctorSlots}</option>
                                        
                                        )
                                        }
                                        
                            </select>
                     </div> 


                        <div className='consultation-container'>
                            <label className='consultation-labelname'>Do you want consultation online </label>
                            <select className='consultation-selection' value={this.state.isConsultationOnline} onChange={this.handleConsultationChange}>
                                <option value={true}>YES</option>
                                <option value={false}>NO</option>
                            </select>
                        </div>

                    <div> 
                        
                        <button type="submit" className='btn btn-primary booking-button' onClick={this.handleSubmit}>Book Appointment</button></div> 
                    </div>
                </div>
                <div>
                    <img src={bookingImage} className="bookingimage"/>
                </div>
            </div>
        )
    }
}
export default Book