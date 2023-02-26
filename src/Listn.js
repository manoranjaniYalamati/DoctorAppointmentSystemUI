import React, { Component } from 'react'
import  axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import Image2  from './bothdoctors.png'
import Image from './mann.jpg'
import './Listn.css'




class Listn extends Component {
	constructor(props) {
		super(props)

		this.state = {
                search:'',
                data : []

		};
  //  this.handleBook = this.handleBook.bind(this, doctorId);

	}
  componentDidMount()
  {
   
    const URL = 'http://localhost:8080/doctor';
    const  AUTH_TOKEN ='Bearer' + localStorage.getItem('token')
    // console.log("auth token is "+ AUTH_TOKEN)
    // const YOUR_TOKEN = 'BearereyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKQiIsInJvbGVzIjoiUk9MRV9QQVRJRU5UIiwiaWF0IjoxNjQ5MzQyNjgyLCJleHAiOjE2NDkzNjA2ODJ9.2jTizEOh7xRoWSWtMtvzfN5-ATPpOt_v04BS7XGYucQ'
  axios.get(URL, {headers: { "Authorization": AUTH_TOKEN } })
  .then(response => {
    console.log(response.data);
    this.setState({
      data: response.data,
      doctorId: ''
    })
 })
.catch((error) => {
    console.log('error ' + error);
 });    

  }


    handleSearch = (event) => {
        this.setState({
            search : event.target.value
        })
    }

 render(){
      const {Doctor} = this.state.data
  return(
  
    <div className='backgr'>
      <div className='listpage  '>
      
      <div className='searching-doctor'>
        
        
        
              <input className='searchbox' type="text" value = {this.state.search} onChange ={this.handleSearch}/><br/>
        
          {this.state.data.filter(doctor => console.log(doctor.name)    
                  )}
                  <div className='head'><h1>DOCTORS</h1></div>
      {this.state.data.filter(doctor => doctor.name.includes(this.state.search) || doctor.experience==this.state.search).map(doctor =>
      <div className='direction'> 
        <img src={Image} className='images'/>
          <div className='joslina'>
                  <p className='doctorname'>Name:  {doctor.name}</p>
                  <p className='exper'> Experience: {doctor.experience}</p>
                  <Link to={`/book/${doctor.id}`}>
                  <button className='btn btn-secondary' value="Book">BOOK</button> 
                  </Link>
          </div>
          <img className='Image2'></img>
      </div>
                  
                  )
                  }      
      </div>       
      </div>
      </div>
    
    
)
}
}

export default Listn