import React, { Component } from 'react'
import axios from 'axios'
export default class GetInvolved extends Component {
  constructor(){
    super()

    this.state = {
      volunteer: null,
      filterOverseas: false,
      filterLocal: false
    }
    
  }

componentWillMount(){
  axios.get('/api/getAllOpp').then((resp) => this.setState({
    volunteer: resp.data
 }))}

  
  filterOverseas(){
    
    this.setState({
      filterOverseas: !this.state.filterOverseas
    })  
    if(this.state.filterOverseas){
      this.setState({
        filterLocal: false
      })  
      axios.get('/api/getLocalOpp').then(resp => this.setState({
        volunteer: resp.data
      }))}
    else{axios.get('/api/getAllOpp').then(resp => this.setState({
      volunteer: resp.data
    }))}
  }

  filterLocal(){
    
    this.setState({
      filterLocal: !this.state.filterLocal
    })  
    if(this.state.filterLocal){
      this.setState({
        filterOverseas: false
      })  
      axios.get('/api/getOverseasOpp').then(resp => this.setState({
        volunteer: resp.data
      }))}
    else{axios.get('/api/getAllOpp').then(resp => this.setState({
      volunteer: resp.data
    }))}
  }
  render() {
    if(this.state.volunteer){
      console.log( this.state.volunteer)
    var oppurtunity = this.state.volunteer.map((card, i) =>{
      if(i%2===0){
        return(
        <div>
          
          <div>{card.volunteername}</div>
          <div>
              <div>{card.volunteerdetails}</div>
              <div><a href={card.link}>link text</a></div>
          </div>
        </div>
        )
      } else{
        return(
          <div>
            <div>{card.volunteername}</div>
            <div>
              <div><a href={card.link}>link text</a></div>
              <div>{card.volunteerdetails}</div>
            </div>
          </div>
        )
      }
    })
  } 
    return (
      <div>
        <button onClick={() =>this.filterOverseas()}> get local</button>
      <button onClick={() =>this.filterLocal()}> get overseas</button>
      <div>{oppurtunity}</div>
      </div>
    )
  }
}
