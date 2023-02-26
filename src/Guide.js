import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Guide.css"

class Guide extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}
    handleGuides = event =>{
        window.location = "C:\Users\CHIINI\Desktop\project\projectsai\Project1.html"
        window.location = "localhost:8080/depression"
        //need to redirect to other html content
        console.log(1);
    }

        render(){
            return(
            <div className='main5-container'>
                <Link to={"/depression"} >
                <button className='btn1' >Depression</button>
                </Link>
                <Link to={"/examfear"} >
                <button className='btn1'>Exam Fear</button></Link>
                <Link to={"/marriageproblems"} >
                <button className='btn1'>Marriage Problems</button></Link>
                <Link to={"/selfmotivation"} >
                <button className='btn1'>Self Motivation</button></Link>
                <Link to={"/demise"} >
                <button className='btn1'>Demise</button></Link>
                <Link to={"/stressatworkplace"} >
                <button className='btn1'>Stress at work place</button></Link>
            </div>
            )
        }

}
export default Guide;