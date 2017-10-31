import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Donate from './components/Donate/Donate'
import WhyUs from './components/WhyUS/WhyUs'
import Blog from './components/Blog/Blog'
import MoreWays from './components/GetInvolved/moreWays/MoreWays'
import GetInvolved from './components/GetInvolved/GetInvolved.js'
import Resources from './components/Resources/Resources'
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path = '/' component = {LandingPage} />
                <Route path = '/Donate' component = {Donate} />
                <Route path = '/WhyUs' component = {WhyUs} />
                <Route path = '/Blog' component= {Blog} />
                <Route path = '/MoreWays' component = {MoreWays} />
                <Route path = '/GetInvolved' component = {GetInvolved} />
                <Route path = '/Resources' component = {Resources} />

            </Switch>
        </Router>
      </div>
    )
  }
}
