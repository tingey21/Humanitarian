import React, { Component } from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
export default class AdminGetInvolved extends Component {
  constructor(){
    super()

    this.state = {
      volunteer: null,
      filterOverseas: false,
      filterLocal: false
    }
    this.removeOppPost = this.removeOppPost.bind(this);
  }

componentWillMount(){
  axios.get('/api/getAllOpp').then((resp) => this.setState({
    volunteer: resp.data
  })
)
}

removeOppPost(id){
  
    var body = {
      id: id
    }
    axios.post('/api/deleteOpp', body)
   
    axios.get('/api/getAllOpp').then(resp => this.setState({
      volunteer: resp.data
    }))
  }
  
  filterOverseas(){
    
    this.setState({
      filterOverseas: !this.state.filterOverseas
    })  
    if(this.state.filterOverseas){
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
        <div><button onClick={() =>this.removeOppPost(card.id)}> x</button></div>
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
      
       <Link to ={'/admin/getinvolved/Add'} style ={{textDecoration: 'none', color: "#552f1d"}}>
      <div>+ Add Volunteer options</div>
      </Link> 
      <div>{oppurtunity}</div>
    </div>
  )
}
}
