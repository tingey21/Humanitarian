import React, { Component } from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
import logo from '../../logo/logo.png'
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
  axios.get('/auth/me').then(res => console.log(res.data)).catch( () => {
    this.props.history.push('/401')
  });
  axios.get('/api/getAllOpp').then((resp) => this.setState({
    volunteer: resp.data
  })
)
}

removeOppPost(id){
  
    var body = {
      id: id
    }
    axios.post('/api/deleteOpp', body);
   
    axios.get('/api/getAllOpp').then(resp => this.setState({
      volunteer: resp.data
    }));
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

  if(this.state.volunteer){
    console.log( 'this is right here' + this.state.volunteer)
  var oppurtunity = this.state.volunteer.map((card, i) =>{
    if(i%2===0){
      return(
      <div className = 'container'>
          <div className = 'vContainer'>
          <div><button className = 'removeVolunteer' onClick={() =>this.removeOppPost(card.id)}> x</button></div>
            <div className = 'vTitle'>{card.volunteername}</div>
            <div className = 'vDetails'>{card.volunteerdetails}</div>
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
          <div><button className = 'removeVolunteer' onClick={() =>this.removeOppPost(card.id)}> x</button></div>
            <div className = 'vTitle'>
            {card.volunteername}</div>
            <div className = 'vDetails'>{card.volunteerdetails}</div>
          </div>
          
        </div>
      )
    }
  })
} 

  return (
    <div className = "page">
      <div className = "brown"></div>
      <div className = "header" id = 'adminHeader'>
        <div><Link to ={'/admin/newsletter'} style ={{textDecoration: 'none', color: "#ffff"}}>News Letter</Link></div>
        <div><Link to ={'/Admin/Blog'} style ={{textDecoration: 'none', color: "#ffff"}}>Blog</Link></div>
        <Link to ={'/admin'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className ='clickableLogo'><img className ='iconImage' id = 'hugePanda' src={logo} alt=""/></div></Link>
        <div><Link to ={'/admin/GetInvolved'} style ={{textDecoration: 'none', color: "#ffff"}}>Get Involved</Link></div>
        
      </div>
       <Link to ={'/admin/getinvolved/Add'} style ={{textDecoration: 'none', color: "#ffff"}}>
      <div className = "addNewBlog" >+ Add Volunteer options</div>
      </Link> 
      <div className = 'buttonContainer'>  <button className ='usa' id = 'shadow' onClick={() =>this.filterOverseas()}></button>
      <button  className = 'plane'  id = 'shadow' onClick={() =>this.filterLocal()}> </button>
      <button  className = 'globe'  id = 'shadow' onClick={() =>this.filterNone()}></button>
      </div>
         <div className = 'vWrapper'>
      <div>{oppurtunity}</div>
      </div>
    </div>
  )
}
}
