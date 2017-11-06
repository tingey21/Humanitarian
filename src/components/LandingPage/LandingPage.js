import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom'
import Carousel from './Carousel'
import axios from 'axios'

export default class LandingPage extends Component {
    constructor()
    {
        super();

        this.state = ({
            email: 'a',
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    handleSubmit(){
        var emailToUse = {
            email: this.state.email
        }
        var arr =emailToUse.email.split('@');
            
        
    axios.get(`https://api.mailtest.in/v1/${arr[1]}`).then((resp) =>{ console.log(resp.data.status)
        if(resp.data.status == 'ACTIVE'){
            axios.post('/api/addEmail', emailToUse)
        }
        else{
            console.log('type in a real domain stupid idiot')
        }
})

    }

  render() {
    return (
        //div+div>div*6^div>div*2^div>div>div*3^div^div>div>div^div*2^div>div*6
      
      <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
             
             <div><Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#552f1d"}}>Why us </Link></div>
             <div><Link to ={'/MoreWays'} style ={{textDecoration: 'none', color: "#552f1d"}}>More Ways To Help</Link></div>
             <div><Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}>Donate</Link></div>
             <div><Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}>Get involved</Link></div>
             <div><Link to ={'/Resources'} style ={{textDecoration: 'none', color: "#552f1d"}}>Resources</Link></div>
             <div><Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}>Blog</Link></div>
         </div>
         <div className = 'title'> THE NON PROFIT</div>
         <div className = "imgscroller">
             <div><Carousel /></div>
             
         </div>
         <div className = "aboutSection">
             <div className = 'about'>about: <p id= 'about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel hendrerit velit. Integer dictum rutrum odio, pulvinar accumsan risus malesuada tempus. </p></div>
             <div className = 'icon'>Icon for my non profit</div>
         </div>
         <div className = "news">
             <div className = "email">
                 
                 <div > Want amazing stories and Non Profit news in your inbox? Hop on the list!</div>
                 <div className ='emailContainer' > 
                     <input className = "inputEmail" type="text" placeholder='your email' onChange ={this.handleChange}/>
                 {console.log(this.state.email)}
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
            <div className ='getInvolvedBtn'>get involved</div>
             <div className ='donateBtn'>Donate</div>
             </div> 
            <div className = 'SM'>
             <div className ='facebookBtn'></div>
             
            </div>
         </div>
        {/* <a href= { process.env.REACT_APP_LOGIN }><button type='button' className = 'loginButton' >LOGIN </button></a> */}
      </div>
    )
  }
}
