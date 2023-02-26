import React, { Component } from 'react'

import  axios from 'axios';
import selfmotivationfinal from './selfmotivationfinal.jpg'
import './Depression.css'

class SelfMotivation extends Component {
  render() {
    return (
      <div className='depressioncontainer'>
          <div className='depdiv'>
                 <h1 className='headingdepression'>Self Motivation</h1>
                 <div>
                     <img src={selfmotivationfinal} className="depressionimage"/>
                 </div>
            <div className='alldep'>
                 <ul type="square" className='lists'><i>
                    <li>Set yourself one specific, achievable goal.</li>
                    <li>Think about how to include that goal in your life, what you need do to make it happen, and then put a timeframe on it (such as a week).</li>
                    <li>Break your goal into small, easy tasks and set regular reminders.</li>
                    <li>Use your family and friends as support – tell them about your goals and encourage them to help keep you motivated.</li>
                    <li>Make your goal part of your routine by using a diary or app for reminders.</li>
                    <li>Positive self-talk is important and effective in managing depression or anxiety. Instead of saying 'I can't', say 'I can try'.</li>
                    <li>Start a class or join a support group. Support groups can be as effective as professional help.</li>
                    <li>Reward yourself when you have completed a step or goal.</li>
	            </i></ul>
  
                </div>
        </div>
      </div>
    )
  }
}

export default SelfMotivation