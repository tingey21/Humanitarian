import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

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
      <div>
         <StripeCheckout
          token={this.onToken}
          stripeKey={ 
            process.env.REACT_APP_STRIPEPK}
          amount={1300}
        />
      </div>
    )
  }
}
