import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';

import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from '../logo/logo.png'
import './Donate.css'
import Header from '../LandingPage/header'
export default class Donate extends Component { 
  
  onToken = (token) => {
  token.card = void 0;
  
  
  axios.post('/api/payment', { token, amount: 1000 } ).then(response => {
    alert('we are in business')
  });
}

  render() {
    return (
      <div className = "page donate-page">
         <div className = "brown"></div>
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#ffff"}}>  <div className = 'headerLink'>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'headerLink'>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#ffff"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#ffff"}}><div className = 'headerLink' ><div className = 'arrow'></div>Donate</div></Link>
     </div>
     
     <div className = "hamburger">
             
             <Header />
         </div>
      <div className = 'donationImage'>
          
        <div  className = "scalable">
          <div>
            <h3 className = 'whiteFont' id = 'donateTitle'>Help Our Non Profit</h3>
            <p className = 'whiteFont'> Make a Difference and Donate Today!</p>
          </div>  
         <StripeCheckout
         className = 'but'
          token={this.onToken}
          stripeKey={ 
            process.env.REACT_APP_STRIPEPK}
          amount={1000}
          >
          <div className = 'donateButton'> 
            <button className=" btn-donate">Make a Donation</button> </div>
          </StripeCheckout>
        
        </div>
        
        </div>
        <div className = 'goal'>
            <h3 className = "brownFont">Help Us Reach Our Goal</h3>
            <p id = 'donateTextWrapper'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus nec tellus porttitor facilisis in in urna. Nam ac nibh id massa dignissim venenatis. Phasellus id volutpat odio. Donec aliquet eu magna non eleifend.</p>
        </div>
     </div>
    )
  }
}
