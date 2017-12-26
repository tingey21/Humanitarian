import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './GetInvolved.css'
import logo from '../logo/logo.png'
import Header from '../LandingPage/header'
export default class GetInvolved extends Component {
  constructor(){
    super()

    this.state = {
      volunteer: null,
      filterOverseas: false,
      filterLocal: false
    }
    
  }

componentDidMount(){
  
  
  axios.get('/api/getAllOpp').then((resp) => this.setState({
    volunteer: resp.data
 })).catch( () => {window.location.reload()})}

 loading(){
  
  setTimeout( () =>{
   
    this.setState({
      timeout: true
    })

  }, 1500)
}
  
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

    if(!this.state.timeout){
      this.loading();
      return(
      
        <div className = "load-me">
          <div class="loader">
            <div class="one"></div>
            <div class="two"></div>
          </div>
    
</div> 
      )
    }


    if(this.state.volunteer){
      
    var opportunity = this.state.volunteer.map((card, i) =>{
      
        return(
          <div className="flip-container" key = {i}>
            <div className="flipper">
              <div className="front">
              <img className='vimage' src={card.photo} alt=""/>
                <span className="name">Volunteer</span>
              </div>

              
              <div className="back">
                <div className="back-logo"> <img className='vimage' src={logo} alt="panda"/></div>
                <div className="back-title">{card.volunteername}</div>
                <div><p>{card.volunteerdetails}</p></div>
              </div>
            </div>
          </div>
        )

    })
  } 
    return (
      
         <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#FFFF"}}>  <div className = 'headerLink'>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink'><div className = 'arrow'></div>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#FFFF"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#FFFF"}}><div className = 'headerLink' >Donate</div></Link>
     </div>

     <div className = "hamburger">
             
             <Header />
         </div>
         
         <div className = 'buttonContainer'>  <button className ='usa' id = 'shadow' onClick={() =>this.filterOverseas()}></button>
      <button  className = 'plane'  id = 'shadow' onClick={() =>this.filterLocal()}> </button>
      <button  className = 'globe'  id = 'shadow' onClick={() =>this.filterNone()}></button>
      </div>
         <div className = 'vWrapper'>
      <div className = "opportunity-wrapper">{opportunity}</div>
      </div>

      <div className = 'footer'>
             <div className ='callToAction'>   
             <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='getInvolvedBtn'>get involved</div></Link>
            <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='donateBtn' >Donate</div></Link> 
             </div> 
            <div className = 'SM'>
            <a href="https://www.facebook.com/NonProfit40/"  style={{textDecoration: 'none'}}><div className ='facebookBtn'></div></a>
             
            </div>
         </div>
      </div>
    )
  }
}
