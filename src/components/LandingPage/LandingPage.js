import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <a href= { process.env.REACT_APP_LOGIN }><button type='button' className = 'loginButton' >LOGIN </button></a>
      </div>
    )
  }
}
