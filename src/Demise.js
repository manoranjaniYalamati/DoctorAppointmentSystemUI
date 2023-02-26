import React, { Component } from 'react'

import  axios from 'axios';
import depression4 from './depression4.jpg'
import './Depression.css'

 class Demise extends Component {
  render() {
    return (
      <div className='depressioncontainer'>
          <div className='depdiv'>
                    <h1 className='headingdepression'>Demise</h1>
                    <div>
                        <img src={depression4} className="depressionimage"/>
                    </div>
                    <div className='alldep'>
                        <ul type="square" className='lists'><i>
                        <li>Don't stop yourself from having a good cry if you feel one coming on</li>
                        <li>Accept your emotions</li>
                        <li>Know that you can (and will) heal over time</li>
                        <li>Talk about it when you can to your dear ones</li>
                        <li>Preserve memories. You could do something to honour the person you love in a way that fits. Plant a tree or garden. Take part in a charity run or walk</li>
                        </i>
                        </ul>
                    </div>
                 
        </div>
    </div>
     
    )
  }
}

export default Demise