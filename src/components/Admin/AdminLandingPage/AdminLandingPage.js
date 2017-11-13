import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo/logo.jpg'
import axios from 'axios'
import './AdminLandingPage.css'
export default class LandingPage extends Component {
  //         <Route path = '/admin/Blog' component = {AdminBlog} />
 //  <Route path = '/admin/GetInvolved' component = {AdminGetInvolved} />
 componentWillMount(){
  axios.get('/auth/me').then(res => console.log(res.data));
 } 

  render() {
    return (
      <div className = "page" id = 'aaaah'>
      <div className = "brown"></div>
      <div className = "header" id = 'adminHeader'>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#552f1d"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
        <Link to ={'/admin'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className ='clickableLogo'><img className ='iconImage' id = 'hugePanda' src={logo} alt=""/></div></Link>
        <div><Link to ={'/admin/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get Involved</Link></div>
        
      </div>
      
        <a href='http://localhost:8080/auth/logout'><button>Log out</button></a>
      </div>
    )
  }
}
