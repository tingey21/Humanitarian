import React, { Component } from 'react'
import axios from 'axios'
export default class Newsletter extends Component {
    constructor(){
        super();
        emails: []
    }

    componentWillMount(){
       axios.get( '/api/getAllEmails')
       .then( (resp) => this.setState =({
           emails: resp.data
       }))
    }

    onSubmit(){
        axios.post('/api/newsletter', )
    }
  render() {
    return (
      <div>
        <div><input type="text" placeholder ='subject'/></div>
        <div><input type="text" placeholder ='body'/></div>
      </div>
    )
  }
}
