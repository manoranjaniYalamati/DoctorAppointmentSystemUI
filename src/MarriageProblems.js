import React, { Component } from 'react'

import  axios from 'axios';
import depression3 from './depression3.jpg'
import './Depression.css'

class MarriageProblems extends Component {
  render() {
    return (
      <div className='depressioncontainer'>
          <div className='depdiv'>
                    <h1 className='headingdepression'>Marriage Problems</h1>
                    <div>
                        <img src={depression3} className="depressionimage"/>
                    </div>
            </div>
            <div className='alldep'>
                    <ul type="disc" className='lists'>
                	<i>
                    <li>communicate, communicate, communicate</li>
                    <li>Recognize when you’re in a gridlock</li>
                    <li>Express yourself constructively</li>
                    <li>Break the curse of familiarity</li>
                    <li>Make decisions together</li>
                    <li>Acknowledge your spouse’s feelings</li>
                    <li>Understand that it’s not a competition</li>
                    <li>Keep a positive attitude</li>
                    <li>Give your partner space</li>
                    <li>Get counselling</li>
	            </i>
                </ul>
  
            </div>
      </div>
    )
  }
}

export default MarriageProblems