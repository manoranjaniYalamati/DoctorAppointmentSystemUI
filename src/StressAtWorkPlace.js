import React, { Component } from 'react'
import  axios from 'axios';
import depression6 from './depression6.jpg'
import './Depression.css'

class StressAtWorkPlace extends Component {
  render() {
    return (
      <div className='depressioncontainer'>
          <div className='depdiv'>
                    <h1 className='headingdepression'> Stress At WorkPlace</h1>
                    <div>
                        <img src={depression6} className="depressionimage"/>
                    </div>
            </div>
            <div className='alldep'>
                    <ul type="disc" className='lists'>
                	<i>
                    <li>Set realistic goals</li>
                    <li>Make a priority list</li>
                    <li>Protect your time</li>
                    <li>Get other points of view</li>
                    <li>Take a break when you feel so stressed</li>
                    <li>Have an outlet</li>
                    <li>Get other points of view</li>
                    <li>Include physical activity in your daily routine, get plenty of sleep and eat a healthy diet</li>
                    <li>Know when to seek help</li>
	            </i>
                </ul>
  
            </div>
      </div>
    )
  }
}

export default StressAtWorkPlace