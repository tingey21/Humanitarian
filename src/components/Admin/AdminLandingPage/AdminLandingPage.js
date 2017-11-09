import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class LandingPage extends Component {
  //         <Route path = '/admin/Blog' component = {AdminBlog} />
 //  <Route path = '/admin/GetInvolved' component = {AdminGetInvolved} />
 componentWillMount(){
  axios.get('/auth/me').then(res => console.log(res.data));
 } 

  render() {
    return (
      <div>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#552f1d"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
        <div><Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get Involved</Link></div>
        <a href= { process.env.REACT_APP_LOGIN }><button type='button' className = 'loginButton' >LOGIN </button></a>
        <a href='http://localhost:8080/auth/logout'><button>Log out</button></a>
      </div>
    )
  }
}
