import React, { Component } from 'react'
import axios from 'axios'
export default class AddGetInvolved extends Component {
  constructor(){
    super()

    this.state={
      title: null,
      details: null,
      link: null,
      overseas: false
    }
    this.handleLink = this.handleLink.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




      handleTitle(e){
        this.setState({title: e.target.value })
    }
    handleDetails(e)
    {
        this.setState({details:e.target.value})
    }
    handleLink(e){
        this.setState({link: e.target.value})
    }
    handleCheck(){
      this.setState({overseas: !this.state.overseas})
    }

    handleSubmit(e){
      e.preventDefault()

 var volunteer = {
     title: this.state.title,
     details: this.state.details,
     link: this.state.link,
     overseas: this.state.overseas
 }
     
      console.log(volunteer)
      axios.post('/api/addVolunteer', volunteer)

      this.props.history.push('/Admin/getinvolved')
  }



  render(){

    return(
      <div>
        <input type="text" placeholder='title' onChange={this.handleTitle}/>
        <input type="text" placeholder='descripition' onChange={this.handleDetails}/>
        <input type="text" placeholder ='hyperlink' onChange={this.handleLink}/>
        <input type="checkbox" placeholder = 'overseas?' defaultChecked={this.state.overseas} onChange={this.handleCheck}/>
        {console.log(this.state.overseas)}
        <button className='btn' value = "submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
    
}
