import React, { Component } from 'react'
import axios from 'axios'
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
      <div>
        <div><input type="text" placeholder ='subject' onChange = {this.handleTitle}/></div>
        <div><input type="text" placeholder ='body' onChange = {this.handleBody}/></div>
        <div><button onClick = {this.handleClick}></button></div>
      </div>
    )
  }
}
