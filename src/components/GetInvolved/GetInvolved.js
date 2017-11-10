import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './GetInvolved.css'
import logo from '../logo/logo.jpg'
import usa from '../logo/usaIcon.png'
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
    
    
      
      axios.get('/api/getLocalOpp').then(resp => this.setState({
        volunteer: resp.data
      }))}
    
  

  filterLocal(){
    
   
      axios.get('/api/getOverseasOpp').then(resp => this.setState({
        volunteer: resp.data
      }))}
   
  filterNone(){
    axios.get('/api/getAllOpp').then(resp => this.setState({
      volunteer: resp.data
    }))}

  render() {
    if(this.state.volunteer){
      console.log( this.state.volunteer)
    var oppurtunity = this.state.volunteer.map((card, i) =>{
      if(i%2===0){
        return(
        <div className = 'container'>
          <div className = 'vContainer'>
            <div className = 'vTitle'>{card.volunteername}</div>
            <div className = 'vDetails'>{card.volunteerdetails}</div>
            <div className = 'vLink'><a href={card.Link}>Volunteer!</a> </div>
          </div>
          <div className = 'imageWrapper'>
          <div className = 'roundImage'><img className='vimage' src={card.photo} alt=""/></div>
          </div>
        </div>
        )
      } else{
        return(
          <div className = 'container'>
            <div className = 'imageWrapper'>
          <div className = 'roundImage'><img className='vimage' src={card.photo} alt=""/></div>
          </div>
          <div className = 'vContainer'>
            <div className = 'vTitle'>{card.volunteername}</div>
            <div className = 'vDetails'>{card.volunteerdetails}</div>
            <div className = 'vLink'><a href={card.Link}>Volunteer!</a> </div>
          </div>
          
        </div>
        )
      }
    })
  } 
    return (
      
         <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#552f1d"}}>  <div className = 'headerLink'>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink'><div className = 'arrow'></div>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink' >Donate</div></Link>
     </div>
         
         <div className = 'buttonContainer'>  <button className ='usa' id = 'shadow' onClick={() =>this.filterOverseas()}></button>
      <button  className = 'plane'  id = 'shadow' onClick={() =>this.filterLocal()}> </button>
      <button  className = 'globe'  id = 'shadow' onClick={() =>this.filterNone()}></button>
      </div>
         <div className = 'vWrapper'>
      <div>{oppurtunity}</div>
      </div>

      <div className = 'footer'>
             <div className ='callToAction'>   
             <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='getInvolvedBtn'>get involved</div></Link>
            <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='donateBtn' >Donate</div></Link> 
             </div> 
            <div className = 'SM'>
            <a href="https://www.facebook.com/NonProfit40/" ><div className ='facebookBtn'></div></a>
             
            </div>
         </div>
      </div>
    )
  }
}
