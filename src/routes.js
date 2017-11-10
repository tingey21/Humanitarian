import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Donate from './components/Donate/Donate'
import WhyUs from './components/WhyUS/WhyUs'
import Blog from './components/Blog/Blog'
import GetInvolved from './components/GetInvolved/GetInvolved.js'
import AdminBlog from './components/Admin/AdminBlog/AdminBlog'
import AddBlog from './components/Admin/AdminBlog/AddBlog'
import AdminLandingPage from './components/Admin/AdminLandingPage/AdminLandingPage'
import AdminGetInvolved from './components/Admin/AdminGetInvolved/AdminGetInvolved'
import AddGetInvolved from './components/Admin/AdminGetInvolved/AddGetInvolved'
import Newsletter from './components/Admin/Newsletter/Newsletter'
import Authenticate from './components/Admin/Authenticate'
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
                <Route path = '/GetInvolved' component = {GetInvolved} />
                <Route path = '/admin/Blog/Add' component = {AddBlog} />
                <Route path = '/admin/Blog' component = {AdminBlog} />
                <Route path = '/admin/GetInvolved/Add' component = {AddGetInvolved}/>
                <Route path = '/admin/GetInvolved' component = {AdminGetInvolved} />
                <Route path = '/admin/newsletter' component = {Newsletter} />
                <Route path = '/dsaflkhflkddaflhfdlkhihqiwehi' component= {Authenticate} />
                <Route path = "/admin" component = {AdminLandingPage}/>
            </Switch>
        </Router>
      </div>
    )
  }
}
