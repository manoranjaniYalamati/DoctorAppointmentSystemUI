import React, { Component } from 'react'
import { Tab } from 'react-bootstrap'
import './App.css'
import Form from './Form'
import Formdup from './Formdup'
import Listn from './Listn'
import Tableh from './Tableh'
import Prescription from './Prescription'
import Book from './Book'
import Home from './Home'
import FirstHome from './FirstHome'
import RegForm from './RegForm'
import Guide from './Guide'
import Depression from './Depression'
import ExamFear from './ExamFear'
import SelfMotivation from './SelfMotivation'
import MarriageProblems from './MarriageProblems'
import Demise from './Demise'
import  StressAtWorkPlace from './StressAtWorkPlace'
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<BrowserRouter>
      <Switch>
		  <Route path ="/" exact component={FirstHome}/>
		  <Route path = "/register" exact component={RegForm}/>
          <Route path="/home" exact component={Home} />
          <Route path="/doctors" exact component={Listn} />
		  <Route path = "/appointments" exact component={Tableh}/>
		  <Route exact path="/book/:id" component={Book} />
		  <Route exact path="/editprescription" component={Prescription} />
		  <Route exact path = "/guide" component = {Guide} />
		  <Route exact path="/depression" component = {Depression} />
		  <Route exact path='/examfear' component={ExamFear}/>
		  <Route exact path='/selfmotivation' component={SelfMotivation}/>
		  <Route exact path='/marriageproblems' component={MarriageProblems}/>
		  <Route exact path='/demise' component={Demise}/>
		  <Route exact path='/stressatworkplace' component={ StressAtWorkPlace}/>
      </Switch>
    </BrowserRouter>
			
		)
	}
}

export default App