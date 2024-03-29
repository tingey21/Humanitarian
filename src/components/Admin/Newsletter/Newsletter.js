import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../logo/logo.png'
import {Link} from 'react-router-dom'
import './Newsletter.css'
export default class Newsletter extends Component {
    constructor(){
        super();
       this.state={ 
         emails: [],
        title: '',
        body: ''
       }
       this.handleTitle = this.handleTitle.bind(this);
       this.handleBody = this.handleBody.bind(this);
       this.handleClick = this.handleClick.bind(this);
    }
  

    componentWillMount(){
      axios.get('/auth/me').then(res => console.log(res.data)).catch( () => {
        this.props.history.push('/')
      });
       axios.get( '/api/getAllEmails')
       .then( (resp) => {this.setState({
           emails: resp.data
       })
      console.log(this.state.emails)
       })
    }
    
    handleTitle(e){
      this.setState({
        title: e.target.value
      })
    }

    handleBody(e){
      this.setState({
        body: e.target.value
      })
      console.log('test' + this.state.body)
    }

    handleClick(){
      var info = {
        title: this.state.title,
        body: this.state.body
      } 


      var email = this.state.emails.map( (email) =>{
        console.log(email)  
        axios.post('/api/sendNewsLetter', [email, info])
      })
      //  axios.post('/api/newsletter', )
    }
  render() {
    return (
      <div className = "page">
      <div className = "brown"></div>
      <div className = "header" id = 'adminHeader'>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#ffff"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#ffff"}}>Blog</Link></div>
        <Link to ={'/admin'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className ='clickableLogo'><img className ='iconImage' id = 'hugePanda' src={logo} alt=""/></div></Link>
        <div><Link to ={'/admin/GetInvolved'} style ={{textDecoration: 'none', color: "#ffff"}}>Get Involved</Link></div>
        
      </div>
      <div className ='gmailClone'>
        <div ><input className = "subject" type="text" placeholder ='subject' onChange = {this.handleTitle}/></div>
        <div ><textarea className = 'body' type="text"  onChange = {this.handleBody}/></div>
        <div ><button className = "button" onClick = {this.handleClick}>Submit</button></div>
        </div>
      </div>
    )
  }
}
