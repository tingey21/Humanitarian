import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo/logo.png'
import axios from 'axios'
import './AdminLandingPage.css'
import {browserHistory} from 'react-router-dom'
export default class LandingPage extends Component {
  //         <Route path = '/admin/Blog' component = {AdminBlog} />
 //  <Route path = '/admin/GetInvolved' component = {AdminGetInvolved} />
 componentWillMount(){
  axios.get('/auth/me').then(res => console.log()).catch( () => {
    this.props.history.push('/401')
  });
 } 



  render() {
    return (
      <div className = "page" id = 'aaaah'>
      <div className = "brown"></div>
      <div className = "header" id = 'adminHeader'>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#FFFF"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#FFFF"}}>Blog</Link></div>
        <Link to ={'/admin'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className ='clickableLogo'><img className ='iconImage' id = 'hugePanda' src={logo} alt=""/></div></Link>
        <div><Link to ={'/admin/GetInvolved'} style ={{textDecoration: 'none', color: "#FFFF"}}>Get Involved</Link></div>
        
      </div>
      
      <Link to = "/">  <div>Log out</div></Link>
      </div>
    )
  }
}
