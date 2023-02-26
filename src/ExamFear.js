import React, { Component } from 'react'
import  axios from 'axios';
import depression2 from './depression2.jpg'
import './Depression.css'

class ExamFear extends Component {
  

  render() {
    return (
      
        <div className='depressioncontainer' >
            <div className='depdiv'>
                    <h1 className='headingdepression'>Exam Fear</h1>
                    <div>
                        <img src={depression2} className="depressionimage"/>
                    </div>
            </div>
                
            <div className='alldep'>
                    <ul type="disc" className='lists'>
                <i>
                <li>Feel confident and stay optimistic.</li>
                <li>Create a timetable for every subject and follow it religiously.</li>
                <li>Don’t postpone revision. Finish it before two days of the exam.</li>
                <li>When you are not able to focus, take a few minutes break.Go for a walk and then begin to study.</li>
                <li>Eat properly, and only this will ensure proper physical and mental health.</li> 
                <li>Practice meditation to increase your concentration.</li>
                <li>Make flashcards with essential points that will make studying more enjoyable.</li>
                <li>Stay cool. Believe and give your best shot.</li>
                <li>You can do it. Don’t lose hope. Just keep working hard. Believe yourself.</li>
                <li>There’s nothing to stop you! Charge ahead!</li>
                </i>
                </ul>
  
            </div>
                 
        </div>

    )
  }
}

export default ExamFear