import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';

import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from '../logo/logo.jpg'
export default class Donate extends Component { 
  
  onToken = (token) => {
  token.card = void 0;
  console.log('token', token);
  
  axios.post('/api/payment', { token, amount: 1000 } ).then(response => {
    alert('we are in business')
  });
}

  render() {
    return (
      <div className = "page">
         <div className = "brown"></div>
         <div className = "header">
         
     <Link to ={'/WhyUs'} style ={{textDecoration: 'none', color: "#552f1d"}}>  <div className = 'headerLink'>Why us</div></Link>
     <Link to ={'/GetInvolved'} style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink'>Get involved</div></Link>
         <Link to ={'/'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className ='clickableLogo'><img className ='iconImage'src={logo} alt=""/></div></Link>
         <Link to ={'/Blog'} style ={{textDecoration: 'none', color: "#552f1d"}}> <div className = 'headerLink'>Blog</div></Link>
         <Link to ={'/Donate'}style ={{textDecoration: 'none', color: "#552f1d"}}><div className = 'headerLink' ><div className = 'arrow'></div>Donate</div></Link>
     </div>
      
      <div>
         <StripeCheckout
          token={this.onToken}
          stripeKey={ 
            process.env.REACT_APP_STRIPEPK}
          amount={1300}
        />
      </div>
      </div>
    )
  }
}
