import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Donate from './components/Donate/Donate'
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path = '/' component = {LandingPage} />
                <Route path = '/Donate' component = {Donate} />
            </Switch>
        </Router>
      </div>
    )
  }
}
