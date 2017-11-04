import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class LandingPage extends Component {
  //         <Route path = '/admin/Blog' component = {AdminBlog} />
 //  <Route path = '/admin/GetInvolved' component = {AdminGetInvolved} />
  
  render() {
    return (
      <div>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#552f1d"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
        <div><Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get Involved</Link></div>
      </div>
    )
  }
}
