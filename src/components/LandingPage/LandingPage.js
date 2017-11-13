import React, { Component } from 'react'
import './LandingPage.css';

import Carousel from './Carousel'
import {Link} from 'react-router-dom'
import axios from 'axios'
import  header from './websitelogo.jpg'
import logo from '../logo/logo.jpg'

export default class LandingPage extends Component {
    constructor()
    {
        super();

        this.state = ({
            email: 'a',
            inputEmail: true,
            handleCorrect: false,
            send: true
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            email: e.target.value,
            send: true
        })
        console.log(this.state.email)
    }

    handleSubmit(){
        var emailToUse = {
            email: this.state.email
        }
        var arr =emailToUse.email.split('@');
        this.setState({inputEmail: true, handleCorrect: false})
        
    axios.get(`https://api.mailtest.in/v1/${arr[1]}`).then((resp) =>{ console.log(resp.data.status)
    
        if(resp.data.status == 'ACTIVE' && this.state.send){
            axios.post('/api/addEmail', emailToUse)
            this.setState({
                inputEmail: true,
                handleCorrect: true,
                send: false
            })
        }
        else{
            console.log('type in a real domain stupid idiot')
            this.setState({
                inputEmail: false,
                handleCorrect: false
            })
        }
})

    }

  render() {
    return (
        //div+div>div*6^div>div*2^div>div>div*3^div^div>div>div^div*2^div>div*6
      
      <div className = "page">
         <div className = "brown"></div>
         
         <div className = "header">
             
         <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#552f1d"}}>  <div className = 'headerLink'>  Why us</div></Link>
         <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink'>Get involved</div></Link>
             <Link to ={'/'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
             <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className = 'headerLink'>Blog</div></Link>
             <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink' >Donate</div></Link>
         </div>
         <div className = 'title'> THE NON PROFIT</div>
         <div className = "imgscroller">
             <div><Carousel /></div>
             
         </div>
         <div className = "aboutSection">
             <div className = 'about'>about: <p id= 'about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p></div>
             <div className = 'icon'><img className ='iconImage' src={header} alt=""/></div>
         </div>
         <div className = "news">
             <div className = "email">
                 
                 <div > Want amazing stories and Non Profit news in your inbox? Hop on the list!</div>
                 <div className ='emailContainer' > 
                     <input className = {this.state.inputEmail ? 'inputEmail' : 'inputfalse'} id ={this.state.handleCorrect ? 'greenlight' : ''} type="text" placeholder={'your email'} onChange ={this.handleChange}/>
                 {console.log( )}
                 <button onClick = {this.handleSubmit} className = "button">
                     submit
                 </button>
                 </div>
             </div>
             <div className = "mission">
                 mission:
                 <p id= 'about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p> </div>
         </div>
         <div className = 'photoAndStory'>
             <div className ="Image"><img className = 'aboutImage' src="https://binoandfino.files.wordpress.com/2010/08/cropped-small-698694_85227669-gambian-girl.jpg" alt=""/></div>
             <div>
                 <div><img src="http://ricebowls.org/static/img/world-map.png" alt=""/></div>
                 <div> Title: <p id= 'about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p></div>
             </div>
         </div>
         <div className = 'footer'>
             <div className ='callToAction'>   
             <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='getInvolvedBtn'>get involved</div></Link>
            <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className ='donateBtn' >Donate</div></Link> 
             </div> 
            <div className = 'SM'>
            <a href="https://www.facebook.com/NonProfit40/"><div className ='facebookBtn'></div></a>
             
            </div>
         </div>
        
      </div>
    )
  }
}
