import React, { Component } from 'react'
import  axios from 'axios';
import depressionfinal from './depressionfinal.jpg'
import './Depression.css'




class Depression extends Component{


    render(){
        return(
            <div className='depressioncontainer' >
                <div className='depdiv'>
                         <h1 className='headingdepression'>Depression</h1>
                         <div>
                             <img src={depressionfinal} className="depressionimage"/>
                         </div>
                </div>
                        
                    <div className='alldep'>
                    <h2 className='depressionheading'>Symptoms of depression include:</h2>
                    <ul className='lists'>
                    <i>
                    <li>Reduced interest in activities that are normally pleasurable</li>
                    <li>Insomnia or increased need for sleep</li>
                    <li>Lack of appetite or an increased need to eat, leading to either weight loss or gain</li>
                    <li>Restlessness, irritability, or lack of energy and fatigue</li>
                    <li>Trouble concentrating and attending to usual tasks</li>
                    <li>Poor self-image</li>
                    <li>Suicidal thoughts</li>
                    </i>
                    </ul>
                    <div>
                        <h2 className='depressionheading'>If so,</h2>
                        <ul type="square" className='lists'>
                            <i>
                                <li>Avoid negativity</li>
                                <li>Stick to a routine</li>
                                <li>Create a Support network</li>
                                <li>Get enough sleep</li> 
                                <li>Live in the moment</li> 
                                <li>Counter Depression with Exercise</li>
                                <li>Savor Small Successes</li> 
                                <li>Keep on doing something and get busy</li> 
                                <li>You will come out of stress with flying colours! Stay confident.</li> 
                            </i>
                         </ul>
                    </div>
                    </div>
                         
           </div>
        
                                                
         )


    }
}
export default Depression