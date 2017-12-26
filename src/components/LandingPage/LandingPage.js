import React, { Component } from 'react'
import './reset.css';
import './LandingPage.css';
import Header from './header'
import Carousel from './Carousel'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  header from './websitelogo.jpg'
import logo from '../logo/logo.png'
import menu from '../logo/menu.svg'
import photo from '../../assets/seth-doyle-78210.jpg'
import worldMap from '../../assets/world-map.png'
import child from '../../assets/madi-robson-113926.jpg'
export default class LandingPage extends Component {
    constructor()
    {
        super();

        this.state = ({
            email: 'a',
            inputEmail: true,
            handleCorrect: false,
            send: true,
            showHeader: false
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleChange(e){
        this.setState({
            email: e.target.value,
            send: true
        })
        
    }

    handleSubmit(){
        var emailToUse = {
            email: this.state.email
        }
        if(emailToUse.email.includes('@')){
        }
        this.setState({inputEmail: true, handleCorrect: false})
        
   
    
        if(emailToUse.email.includes('@')){
            axios.post('/api/addEmail', emailToUse)
            this.setState({
                inputEmail: true,
                handleCorrect: true,
                send: false
            })
        }
        else{
            this.setState({
                inputEmail: false,
                handleCorrect: false
            })
        }
}

    

  render() {
    return (
        
        //
      
      <div className = "page">
      
         <div className = "brown"></div>
         
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#ffff"}}>  <div className = 'headerLink'>  Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'headerLink'>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt="home"/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'headerLink' >Donate</div></Link>
     </div>

     <div className = "hamburger">
             
             <Header />
         </div>
        
       
             <div className = "stuff">
            
             </div>
             
        
         <div className = "aboutSection">
             <div className = 'about'>about: <p id= 'about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p></div>
             
         </div>
         <div className = "news">
             <div className = "email">
                 
                 <div > Want amazing stories and Non Profit news in your inbox? Hop on the list!</div>
                 <div className ='emailContainer' > 
                     <input className = {this.state.inputEmail ? 'inputEmail' : 'inputfalse'} id ={this.state.handleCorrect ? 'greenlight' : ''} type="text" placeholder={'your email'} onChange ={this.handleChange}/>
                 <button onClick = {this.handleSubmit} className = "button">
                     submit
                 </button>
                 </div>
             </div>
             <div className = "mission">
                 mission:
                 <p id= 'about'>Since the world has existed, there has been injustice. But it is one world, the more so as it becomes smaller, more accessible. There is just no question that there is more obligation that those who have should give to those who have nothing.” </p> </div>
         </div>
         <div className = 'photoAndStory'>
             <div className ="Image"><img className = 'aboutImage' src={child} alt=""/></div>
             <div className = "world-image-wrapper" >
                 <div className = 'worldImage' ><img className = "worldMap" src={worldMap} alt=""/></div>
                 <div> Name of child in photo <p id= 'about'> this is where the story of the child in the photo would go. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p></div>
             </div>
         </div>
         <div className = 'footer'>
             <div className ='callToAction'>   
             <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='getInvolvedBtn'>get involved</div></Link>
            <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='donateBtn' >Donate</div></Link> 
             </div> 
            <div className = 'SM'>
            <a href="https://alexandertingey.com" style={{textDecoration: 'none'}}><div className ='facebookBtn' 
            ></div></a>
             
            </div>
         </div>
        
      </div>
    )
  }
}
